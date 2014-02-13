Ext.define("AndroidLMS.controller.ContactsController", {
    extend: "Ext.app.Controller",
    
    //slide animations
    slideLeftTransition: { type: 'slide', direction: 'left'},
    slideRightTransition: {type: 'slide', direction:'right'},
    
    //Config settings
    config: {
        animation: 'slide',
        
        refs: {
            contactsContainer: "contactscontainer",
            contactsPanel: "contactspanel",
            contactsEditor: "contactseditor"
        },
        control: {
            //controller actions for the ContactsContainer view
            contactsContainer: {
                newContactCommand: "onNewContact",
                editContactCommand: "onEditContact"    
            },
            
            contactsEditor: {
                saveContactCommand: "onSaveContactCommand",
                backHomeCommand: "onBackHomeCommand",
                deleteButtonCommand: "onDeleteCommand"
            }
            
        }
    },
    
    onDeleteCommand:function(){
        var contactEditor = this.getContactsEditor();
        var currentContact = contactEditor.getRecord();
        var contactStore = Ext.getStore("Contacts");
        
        contactStore.remove(currentContact);
        contactStore.sync();
        
        this.activateContactsContainer();
    },
    
    onBackHomeCommand: function(){
        console.log("back home was pressed");
        this.activateContactsContainer();
    },
    
    onSaveContactCommand: function(){
        console.log("onSaveContact Command");
        
        var contactEditor = this.getContactsEditor();
        var currentContact = contactEditor.getRecord();
        var newValues = contactEditor.getValues();
        
        currentContact.set("title", newValues.title);
        currentContact.set("narrative", newValues.narrative);
        
        var errors = currentContact.validate();
        
        if(!errors.isValid()) {
            Ext.Msg.alert('Wait', errors.getByField("title")[0].getMessage(), Ext.emptyFn);
            currentContact.reject();
            return;
        }
        
        var contactsStore = Ext.getStore("Contacts");
        
        //Check if note exists, if not add it
        if(null == contactsStore.findRecord('id', currentContact.data.id)){
            contactsStore.add(currentContact);
        }
        
        contactsStore.sync();
        contactsStore.sort([{property:'dateCreated', direction:'DESC'}]);
        
        this.activateContactsContainer();
    },
    
    onEditContact: function(list, record) {
        console.log("onEditConact");
        this.activateContactEditor(record);
    },
    
    onNewContact: function () {
        console.log("onNewContact");
        var now = new Date();
        var cId = (now.getTime()).toString() +
            (this.getRandomInt(0,100)).toString();
        
        var newContact = Ext.create("AndroidLMS.model.Contact", {
            id: cId,
            dateCreated:now,
            narrative: "",
            title: ""
        });
        this.activateContactEditor(newContact);
    },
    
    launch: function(){
        this.callParent(arguments);
        console.log("CC launch");
        Ext.getStore("Contacts").load();
    },
    
    init: function(){
        this.callParent(arguments);
        console.log("CC init");
    },
    
    getRandomInt: function(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    },
    
    activateContactEditor: function(record){
        var contactsEditor = this.getContactsEditor();
        contactsEditor.setRecord(record);
        Ext.Viewport.animateActiveItem(contactsEditor, this.slideLeftTransition);
    },
    
    activateContactsContainer: function(){
        Ext.Viewport.animateActiveItem(this.getContactsContainer(),this.slideRightTransition);
    }
    

    // init and launch functions omitted.
});