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
            }
        }
    },
    
    onShowCitrixContacts: function(){
        console.log("Citrix Contacts pressed!");
    }
});