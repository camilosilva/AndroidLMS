Ext.define("AndroidLMS.store.CitrixContacts", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    
    config: {
        model: "AndroidLMS.model.CitrixContact",
        proxy: {
            type: "localstorage",
            id: "notes-app-store1"
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
            },
            
            getGroupString: function (record) {
                return '';
            }
        }
    },
    
    
});