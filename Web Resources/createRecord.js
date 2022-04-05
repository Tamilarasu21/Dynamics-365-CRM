function createStudentRecord() {
  // Define the data to create new account
  var anysize = 3; //the size of string
  var charset = "abcdefghijklmnopqrstuvwxyz"; //from where to create
  var res = "";
  // create account with random name
  for (var i = 0; i < anysize; i++) {
    res += charset[Math.floor(Math.random() * charset.length)];
  }
  var accountData = {
    test_name: res,
  };

  // Create account record
  Xrm.WebApi.createRecord("test_student", accountData).then(
    function success(result) {
      // Show Account GUID
      Xrm.Utility.alertDialog("Student created with ID: " + result.id, null);
    },
    function (error) {
      // Show Error
      Xrm.Utility.alertDialog("Error :" + error.message, null);
    }
  );
}

function createAccountRecord() {
  var accountData = {
    test_name: "Tamil",
  };

  // Create account record
  Xrm.WebApi.createRecord("account", accountData).then(
    function success(result) {
      // Show Account GUID
      Xrm.Utility.alertDialog("Account created with ID: " + result.id, null);
    },
    function (error) {
      // Show Error
      Xrm.Utility.alertDialog("Error :" + error.message, null);
    }
  );
}
