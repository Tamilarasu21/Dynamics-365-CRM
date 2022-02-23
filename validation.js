//phone number validation
function validatePhoneNum(executionContext) {
  var formContext = executionContext.getFormContext();
  var phonenNum = formContext.getAttribute("test_phone_number").getValue();
  if (phonenNum == " ") {
    formContext.ui.setFormNotification(
      "Please fill Phone Number",
      "WARNING",
      "phoneNumberWarning1"
    );
    //Wait the designated time and then remove
    setTimeout(function () {
      formContext.ui.clearFormNotification("phoneNumberWarning1");
    }, 2000);
  }
}
