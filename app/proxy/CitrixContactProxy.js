Ext.define('AndroidLMS.proxy.CitrixContactProxy',{
    extend: 'Ext.data.proxy.Proxy',
    alias: 'proxy.citrixContactProxy',
    config: {
        model: 'AndroidLMS.model.CitrixContact'
    },
    read: function(operation, callback, scope){
        var thisProxy = this;
        console.log('Proxy**');
        
        /*
        var contacts = [];
        for (var i = 0; i < 3; i++){
            var contact = Ext.create(thisProxy.config.model,{
                id: i,
                givenName: "Test " + i,
                familyName: "Last name " + i
            });
            contacts.push(contact);
        }
        
        operation.setSuccessful();
        operation.setCompleted();
        
        operation.setResultSet(Ext.create('Ext.data.ResultSet',{
            records: contacts,
            total: contacts.length,
            loaded: true
        }));
        
        
        operation.setRecords(contacts);
        
        if(typeof callback == "function"){
            callback.call(scope || thisProxy, operation);
        }
        */
        
        
        navigator.contacts.find(['id', 'name', 'emails', 'phoneNumbers', 'addresses'],
            function(deviceContacts){
                //loop over the device contacts and create the CitrixContact Model
                var contacts = [];
                for (var i = 0; i < deviceContacts.length; i++){
                    var deviceContact = deviceContacts[i];
                    var contact = Ext.create(thisProxy.config.model,{
                        id: deviceContact.id,
                        givenName: deviceContact.name.givenName,
                        familyName: deviceContact.name.familyName
                    });
                    contact.deviceContact = deviceContact;
                    contacts.push(contact);
                }
                
                operation.setSuccessful();
                operation.setCompleted();
                
                operation.setResultSet(Ext.create('Ext.data.ResultSet',{
                    records: contacts,
                    total: contacts.length
                }));
                
                operation.setRecords(contacts);
                
                if(typeof callback == "function"){
                    callback.call(scope || thisProxy, operation);
                }
            },
            function(e){console.log('Error while fetching the contacts from the phone');},
            {multiple:true, filter: "Silva"}
        );
        
    }
});