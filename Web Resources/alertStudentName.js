function alertStudentName(executionContext) {
  var formContext = executionContext.getFormContext();
  //get Value
  var studentName = formContext.getAttribute("test_name").getValue();
  //set Value
  formContext
    .getAttribute("test_email")
    .setValue(studentName.toLowerCase() + "@gmail.com");
  //set notification
  formContext.ui.setFormNotification(
    "Welcome" + studentName,
    "WARNING",
    "phoneNumberWarning1"
  );
  // clear notification
  setTimeout(function () {
    formContext.ui.clearFormNotification("phoneNumberWarning1");
  }, 2000);
}

function createStudentRecord() {
  // Define the data to create new account
  var anysize = 5; //the size of string
  var charset = "abcdefghijklmnopqrstuvwxyz"; //from where to create
  var res = "";
  for (var i = 0; i < anysize; i++) {
    res += charset[Math.floor(Math.random() * charset.length)];
  }
  var studentData = {
    test_name: res,
  };

  // Create student record
  Xrm.WebApi.createRecord("test_student", studentData).then(
    function success(result) {
      // Show student GUID
      Xrm.Utility.alertDialog("Student created with ID: " + result.id, null);
    },
    function (error) {
      // Show Error
      Xrm.Utility.alertDialog("Error :" + error.message, null);
    }
  );
}

function retrieveStudentRecord() {
  var studentRecordGuid = null,
    nextLine = "\n";
  studentRecordGuid = Xrm.Page.data.entity.getId();

  if (studentRecordGuid != null && studentRecordGuid != "") {
    // Retrieve student Record
    Xrm.WebApi.retrieveRecord(
      "test_student",
      studentRecordGuid,
      "?$select=test_name"
    ).then(
      function success(result) {
        // Perform operations on record retrieval
        var sampleValueText = "Retrieved values: ";

        if (result.test_name != null) {
          sampleValueText += "Account Name : " + result.test_name + nextLine;
        }
        //show alert with the retrieved text
        Xrm.Utility.alertDialog(sampleValueText, null);
      },
      function (error) {
        // show alert for the error
        Xrm.Utility.alertDialog(
          "Error while retrieving the Account Record : " + error.message,
          null
        );
      }
    );
  }
}

function updateStudentRecord() {
  var accountData = {
    test_name: "kresh",
  };
  // Update student record
  Xrm.WebApi.updateRecord(
    "test_student",
    "b80d2933-a788-ec11-93b0-000d3aca1c16",
    accountData
  ).then(
    function success(result) {
      // Show student GUID
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

function deleteStudentRecord() {
  // Delete record
  Xrm.WebApi.deleteRecord(
    "test_student",
    "b80d2933-a788-ec11-93b0-000d3aca1c16"
  ).then(
    function success(result) {
      // Show student GUID
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
