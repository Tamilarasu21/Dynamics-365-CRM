function retrieveStudentRecord() {
  var accountRecordGuid = null,
    nextLine = "\n";
  accountRecordGuid = Xrm.Page.data.entity.getId();
  alert(accountRecordGuid);

  if (accountRecordGuid != null && accountRecordGuid != "") {
    // Retrieve Record
    Xrm.WebApi.retrieveRecord(
      "test_student",
      accountRecordGuid,
      "?$select=test_name,test_gender"
    ).then(
      function success(result) {
        // Perform operations on record retrieval
        var sampleValueText = "Retrieved values: ";

        // Single Line of Text
        if (result.test_name != null) {
          sampleValueText += "Account Name : " + result.test_name + nextLine;
        }

        //option set
        if (result.test_gender != null) {
          sampleValueText += "gender : " + result.test_gender + nextLine;
        }

        Xrm.Utility.alertDialog(sampleValueText, null);
      },
      function (error) {
        // handle error conditions
        Xrm.Utility.alertDialog(
          "Error while retrieving the Account Record : " + error.message,
          null
        );
      }
    );
  }
}
