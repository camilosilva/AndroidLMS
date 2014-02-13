Ext.define("AndroidLMS.store.Contacts", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    
    config: {
        model: "AndroidLMS.model.Contact",
        proxy: {
            type: "localstorage",
            id: "notes-app-store"
        }
        //hardcoded data
        /*
        data: [
            {title: "CTX-000", narrative: "XenApp Test Course"},
            {title: "CTX-001", narrative: "XenMobile Test Course"},
            {title: "CTX-002", narrative: "XenDesktop Test Course"}
        ]
        */
    },
    
    sorters: [{property: 'dateCreated', direction:'DESC'}],
    grouper:{
        sortProperty:"dateCreated",
        direction:"DESC",
        groupFn: function(record){
            if(record && record.data.dateCreated){
                return record.data.dateCreated.toDateString();
            } else {
                return '';
            }            
        }
    }
});