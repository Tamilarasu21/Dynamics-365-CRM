function showRelatedContacts(primaryControl){
    // var formContext=primaryControl;
    // var accountId=formContext.data.entity.getId();
    var accountId=Xrm.Page.data.entity.getId();
    var webResourceName="test_related_contacts.html";
    var windowOptions={height:600,width:700};

    //opening an external web resource
    Xrm.Navigation.openWebResource(webResourceName,windowOptions,accountId);
}