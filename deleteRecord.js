function deleteStudentRecord() {
  // Delete record
  Xrm.WebApi.deleteRecord(
    "test_student",
    "b80d2933-a788-ec11-93b0-000d3aca1c16",
    accountData
  ).then(
    function success(result) {
      // Show Account GUID
      Xrm.Utility.alertDialog(
        "Student with ID: " + result.id + " is deleted",
        null
      );
    },
    function (error) {
      // Show Error
      Xrm.Utility.alertDialog("Error :" + error.message, null);
    }
  );
}
