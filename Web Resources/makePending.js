function makePending(selectedIds) {
  var logicalName = "account";
  var changeStatus = {
    test_status: 0,
  };
  for (var i = 0; i < selectedIds.length; i++) {
    Xrm.WebApi.updateRecord(logicalName, selectedIds[i].Id, changeStatus).then(
      function success(result) {
        // Show Account GUID
        Xrm.Utility.alertDialog(
          "Account with ID: " + result.id + " is updated",
          null
        );
      },
      function (error) {
        // Show Error
        Xrm.Utility.alertDialog("Error :" + error.message, null);
      }
    );
  }
}
