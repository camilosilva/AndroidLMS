Ext.define("AndroidLMS.view.CitrixContactsList", {
    extend: "Ext.Container",
    alias: "widget.citrixlist",
    config:{
        scrollable:'vertical',
        layout: {type: 'fit'}
    },
    initialize: function(){
        this.callParent(arguments);
        var backButton = {
            xtype: "button",
            text: "Back",
            ui: 'back',
            handler: this.onBackButtonTap,
            scope: this
        };
        
        var newButton = {
            xtype: "button",
            text: "New",
            ui: "action",
            handler: this.onNewButtonTap,
            scope: this
        }
        
        var toolbar = {
            xtype: 'toolbar',
            title: 'My Citrix Contacts',
            docked: 'top',
            items: [
                backButton,
                {xtype:"spacer"},
                newButton
            ]
        }
        
        var citrixItem = {
            xtype: 'citrixitem',
            store: Ext.getStore('CitrixContacts'),
            
            listeners: {
                disclose: {fn: this.onContactsPanelDisclose, scope:this}
            }
            
        };
        
        this.add([toolbar, citrixItem]);
    },
    
    onNewButtonTap: function(){
        console.log("New Button TAP");
        //this.fireEvent("newContactCommand", this);
    },
    
    onBackButtonTap: function(){
        console.log("Back Button Pressed");
        this.fireEvent('goToMainScreen', this);
    },
    
    onContactsPanelDisclose: function(list, record, target, index, evt, options){
        console.log("edit Contact Command");
        //this.fireEvent('editContactCommand', this, record);
    }
});