Ext.define("AndroidLMS.controller.CitrixContactsController",{
    extend:"Ext.app.Controller",
    //slide animations
    slideLeftTransition: { type: 'slide', direction: 'left'},
    slideRightTransition: {type: 'slide', direction:'right'},
    
    config: {
        animation: 'slide',
        
        refs: {
            citrixList: "citrixlist",
            citrixItem: "citrixitem",
            citrixEditor: "citrixeditor",
            contactsContainer: "contactscontainer"
        },
        
        control: {
            contactsContainer:{
                showCitrixContactsCommand: "onShowCitrixContacts"
            },
            citrixList:{
                goToMainScreen: "onGoToMainScreen"
            }
        }
    },
    
    onGoToMainScreen: function(){
        this.activateContactsContainer();
    },
    
    onShowCitrixContacts: function(){
        console.log("Citrix Contacts pressed!");
        this.activateCitrixList();
    },
    
    launch: function(){
        this.callParent(arguments);
        console.log("CitixController launch");
        Ext.getStore("CitrixContacts").load();
    },
    
    init: function(){
        this.callParent(arguments);
        console.log("Citrix Controller init");
    },
    
    getRandomInt: function(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    },
    
    activateCitrixEditor: function(record){
        var citrixEditor = this.getCitrixEditor();
        citrixEditor.setRecord(record);
        Ext.Viewport.animateActiveItem(citrixEditor, this.slideLeftTransition);
    },
    
    activateContactsContainer: function(){
        Ext.Viewport.animateActiveItem(this.getContactsContainer(),this.slideRightTransition);
    },
    
    activateCitrixList: function(){
        Ext.Viewport.animateActiveItem(this.getCitrixList(),this.slideRightTransition);
    }
    
    
});