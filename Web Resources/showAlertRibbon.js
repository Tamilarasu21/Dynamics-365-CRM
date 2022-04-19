function showAlertRibbon(primaryControl) {
  var formContext = primaryControl;
  //getting account name
  var accountName = formContext.getAttribute("name").getValue();
  //getting record GUID
  var recordGUID = formContext.data.entity.getId();
  Xrm.Utility.alertDialog("Welcome "+accountName+"\n"+"Your GUID "+recordGUID,null);
}
