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

function alertAccName(executionContext) {
  var accountFetchXML =
    '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">' +
    '<entity name="contact">' +
    '<attribute name="fullname" />' +
    '<attribute name="emailaddress1" />' +
    '<attribute name="parentcustomerid" />' +
    '<attribute name="telephone1" />' +
    '<attribute name="statecode" />' +
    '<attribute name="contactid" />' +
    '<filter type="and">' +
    '<condition attribute="parentcustomerid" operator="eq" uiname="Alpine Ski House" uitype="account" value="{81883308-7AD5-EA11-A813-000D3A33F3B4}" />' +
    "</filter>" +
    "</entity>" +
    "</fetch>";

  accountFetchXML = "?fetchXml=" + encodeURIComponent(accountFetchXML);

  var outputText =
    '"-----"';
  Xrm.WebApi.retrieveMultipleRecords("contact", accountFetchXML).then(
    function success(result) {
      for (
        var accountRecordsCount = 0;
        accountRecordsCount < result.entities.length;
        accountRecordsCount++
      ) {
        outputText +=
          result.entities[accountRecordsCount].fullname +
          "\t\t" +
          result.entities[accountRecordsCount].primarycontactid +
          "\n";
      }
      var confirmStrings = { text: outputText, title: "Confirmation Dialog" };
      var confirmOptions = { height: 200, width: 450 };
      Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
        function (success) {
          if (success.confirmed) console.log("Dialog closed using OK button.");
          else console.log("Dialog closed using Cancel button or X.");
        }
      );
    },
    function (error) {
      // Handle error conditions
      Xrm.Utility.alertDialog(error.message, null);
    }
  );
}

var accountFetchXML =
  '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">' +
  '<entity name="contact">' +
  '<attribute name="fullname" />' +
  '<attribute name="emailaddress1" />' +
  '<attribute name="parentcustomerid" />' +
  '<attribute name="telephone1" />' +
  '<attribute name="statecode" />' +
  '<attribute name="contactid" />' +
  '<filter type="and">' +
  '<condition attribute="parentcustomerid" operator="eq" uiname="Alpine Ski House" uitype="account" value="{81883308-7AD5-EA11-A813-000D3A33F3B4}" />' +
  "</filter>" +
  "</entity>" +
  "</fetch>";

var accountFetchXML =
  "<fetch mapping='logical' version='1.0' output-format='xml-platform' distinct='false'>" +
  "  <entity name='account'>" +
  "    <attribute name='name' />" +
  "    <attribute name='primarycontactid' />" +
  "    <attribute name='telephone1' />" +
  "    <attribute name='accountid' />" +
  "    <order descending='false' attribute='name' />" +
  "  </entity>" +
  "</fetch>";
