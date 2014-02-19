Ext.define("AndroidLMS.view.ContactsContainer", {
    extend: "Ext.Container",
    alias: "widget.contactscontainer",
    
    config: {
        layout: {type: 'fit'}  
        /*
        items: [{
            xtype: "toolbar",
            docked: "top",
            title: "My Contacts Container",
            items: [{
                xtype: "spacer"
            }, {
                xtype: "button",
                text: "New",
                ui: "action",
                id:"new-contact-btn"
            }]
        }]
        
    */
    },
    initialize: function(){
        this.callParent(arguments);
        var newButton = {
            xtype: "button",
            text: 'New',
            ui: 'action',
            handler: this.onNewButtonTap,
            scope:this
        };
        
        var toolbar = {
            xtype: 'toolbar',
            title: 'Citrix Course Catalog',
            docked: 'top',
            items: [
                {xtype:'spacer'} ,
                newButton
            ]
        };
        
        var contactsPanel = {
            xtype: 'contactspanel',
            store: Ext.getStore("Contacts"),
            listeners: {
                disclose: {fn: this.onContactsPanelDisclose, scope:this}
            }
        };
        
        var addressButton = {
            xtype:"button",
            text:"Citrix Contacts",
            iconCls:"user",
            handler: this.onAddressButtonTap,
            scope: this
        };
        
        var bottomToolbar = {
            xtype: "toolbar",
            docked: "bottom",
            items: [addressButton]
        };
        
        this.add([toolbar, contactsPanel, bottomToolbar]);
    },
    
    onNewButtonTap: function(){
        console.log("New Button TAP");
        this.fireEvent("newContactCommand", this);
    },
    
    onContactsPanelDisclose: function(list, record, target, index, evt, options){
        console.log("edit Contact Command");
        this.fireEvent('editContactCommand', this, record);
    },
    
    onAddressButtonTap:function(){
        console.log("Address button tapped");
        this.fireEvent('showCitrixContactsCommand', this);
    }
});