Ext.define("AndroidLMS.controller.ContactsController", {
    extend: "Ext.app.Controller",
    config: {
        animation: 'slide',
        slideLeftTransition: { type: 'slide', direction: 'left' },
        refs: {
            //newContactBtn: "#contactLink"
            newContactBtn: "#new-contact-btn",
            contactsContainer: "contactscontainer",
            contactsPanel: "contactspanel"
        },
        control: {
            newContactCommand: "onNewContact",
            editContactCommand: "onEditContact"
        }
    },
    onNewContact: function () {
        console.log("onNewContact");
    },
    launch: function(){
        this.callParent(arguments);
        console.log("CC launch");
        Ext.getStore("Contacts").load();
    },
    init: function(){
        this.callParent(arguments);
        console.log("CC init");
    }
    

    // init and launch functions omitted.
});