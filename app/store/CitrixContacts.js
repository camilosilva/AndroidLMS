Ext.define("AndroidLMS.store.CitrixContacts", {
    extend: "Ext.data.Store",
    requires: "AndroidLMS.proxy.CitrixContactProxy",
    
    config: {
        model: "AndroidLMS.model.CitrixContact",
        proxy: {
            type: "citrixContactProxy",
            //id: "citrix-contacts"
        },
        
        sorters: [{property: 'givenName', direction:'DESC'}],
        grouper:{
            sortProperty:"givenName",
            direction:"DESC",
            groupFn: function(record){
                if(record && record.data.givenName){
                    return record.data.givenName.charAt(0);
                } else {
                    return '';
                }            
            },
            
            getGroupString: function (record) {
                return '';
            }
        }
    }   
});