function retrieveAllStudentRecord() {
  var outputText = "";
  Xrm.WebApi.retrieveMultipleRecords("test_student", "?$select=test_name").then(
    function success(result) {
      for (
        var accountRecordsCount = 0;
        accountRecordsCount < result.entities.length;
        accountRecordsCount++
      ) {
        outputText += result.entities[accountRecordsCount].test_name + "\n";
      }
      Xrm.Utility.alertDialog(outputText, null);
    },
    function (error) {
      // Handle error conditions
      Xrm.Utility.alertDialog(error.message, null);
    }
  );
}
