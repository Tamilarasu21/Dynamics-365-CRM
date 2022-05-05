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