Ext.define("AndroidLMS.view.ContactsEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.contactseditor",
    config:{
        scrollable:'vertical'
    },
    initialize: function(){
        this.callParent(arguments);
        var backButton = {
            xtype:"button",
            ui: "back",
            text: "Home",
            handler: this.onBackHomeTap,
            scope: this
        };
        
        var saveButton = {
            xtype: "button",
            ui: "action",
            text: "Save",
            handler: this.onSaveButtonTap,
            scope: this
        }
        
        var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            title: "Edit Contact",
            items: [backButton,{xtype:"spacer"},saveButton]
        };
        
        var deleteButton = {
            xtype:"button",
            iconCls:"trash",
            iconMask: true,
            handler: this.onDeleteButtonTap,
            scope: this
        };
        
        var bottomToolbar = {
            xtype: "toolbar",
            docked: "bottom",
            items: [deleteButton]
        };
        
        var contactTitleEditor = {
            xtype: 'textfield',
            name: 'title',
            label: 'Title',
            required: true
        };
        
        var contactNarrativeEditor = {
            xtype:"textareafield",
            name:"narrative",
            label:"Narrative"
        };
        
        this.add([
            topToolbar
            ,{xtype:'fieldset', items:[contactTitleEditor, contactNarrativeEditor]}
            ,bottomToolbar
        ]);
    },
    
    onSaveButtonTap: function(){
        console.log("saveBiteCommand");
        this.fireEvent("saveContactCommand", this);
    },
    
    onBackHomeTap: function(){
        console.log("Home pressed");
        this.fireEvent("backHomeCommand", this);
    },
    
    onDeleteButtonTap: function(){
        console.log("delete pressed");
        this.fireEvent("deleteButtonCommand", this);
    }
});