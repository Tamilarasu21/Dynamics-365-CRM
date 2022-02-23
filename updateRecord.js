function updateStudentRecord() {
  var accountData = {
    test_name: "kresh",
  };

  // Create account record
  Xrm.WebApi.updateRecord(
    "test_student",
    "b80d2933-a788-ec11-93b0-000d3aca1c16",
    accountData
  ).then(
    function success(result) {
      // Show Account GUID
      Xrm.Utility.alertDialog(
        "Student with ID: " + result.id + " is updated",
        null
      );
    },
    function (error) {
      // Show Error
      Xrm.Utility.alertDialog("Error :" + error.message, null);
    }
  );
}
// b80d2933-a788-ec11-93b0-000d3aca1c16
