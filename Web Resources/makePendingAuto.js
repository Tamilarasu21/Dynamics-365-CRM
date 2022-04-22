function makePending(selectedIds) {
  var logicalName = "account";
  for (var i = 0; i < selectedIds.length; i++) {
    // var guid=selectedIds[i].Id;
    Xrm.WebApi.retrieveRecord(
      logicalName,
      selectedIds[i].Id,
      "?$select=test_status"
    ).then(
      function success(result) {
        if (result.test_status == null) {
          var changeStatus = {
            test_status: 0,
          };
          for (var j = 0; j < selectedIds.length; j++) {
            Xrm.WebApi.updateRecord(
              logicalName,
              selectedIds[j].Id,
              changeStatus
            ).then(
              function success(result) {
                // Show Account GUID
                Xrm.Utility.alertDialog(
                  "Account with ID: " +
                    result.id +
                    " is updated",
                  null
                );
              },
              function (error) {
                // Show Error
                Xrm.Utility.alertDialog("Error :" + error.message, null);
              }
            );
          }
        } else if (result.test_status == 0) {
          var changeStatus = {
            test_status: 1,
          };
          for (var j = 0; j < selectedIds.length; j++) {
            Xrm.WebApi.updateRecord(
              logicalName,
              selectedIds[j].Id,
              changeStatus
            ).then(
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
        } else if (result.test_status == 1) {
          var changeStatus = {
            test_status: 2,
          };
          for (var j = 0; j < selectedIds.length; j++) {
            Xrm.WebApi.updateRecord(
              logicalName,
              selectedIds[j].Id,
              changeStatus
            ).then(
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
      },
      function error(error) {
        Xrm.Navigation.openAlertDialog({ text: error.message });
      }
    );
  }
} 





function makePending(selectedIds) {
  var logicalName = "account";
  for (var i = 0; i < selectedIds.length; i++) {
    // var guid=selectedIds[i].Id;
    Xrm.WebApi.retrieveRecord(
      logicalName,
      selectedIds[i].Id,
      "?$select=test_status"
    ).then(
      function success(result) {
        if (result.test_status == null) {
          var changeStatus = {
            test_status: 0,
          };
          for (var j = 0; j < selectedIds.length; j++) {
            Xrm.WebApi.updateRecord(
              logicalName,
              selectedIds[j].Id,
              changeStatus
            ).then(
              function success(result) {
                // Show Account GUID
                Xrm.Utility.alertDialog(
                  "Account with ID: " +
                    result.id +
                    " is updated",
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
      },
      function error(error) {
        Xrm.Navigation.openAlertDialog({ text: error.message });
      }
    );
  }
} 