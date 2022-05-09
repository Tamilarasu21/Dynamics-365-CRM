function showRelatedContacts(primaryControl){
    var formContext=primaryControl;
    var accountId=formContext.data.entity.getId();
    var webResourceName="test_related_contacts.html";
    var windowOptions={height:600,width:700};

    Xrm.Navigation.openWebResource(webResourceName,windowOptions,accountId);
}