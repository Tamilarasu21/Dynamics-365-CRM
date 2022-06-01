function getOptionSetMetadata(executionContext) {
  var formContext = executionContext.getFormContext();
  var OptionSetControl = formContext.getAttribute(
    "test_deferral_payment_method"
  );
  for (
    var intCounter = 0;
    intCounter < OptionSetControl.getOptions().length;
    intCounter++
  ) {
    var backendvalue = OptionSetControl.getOptions()[intCounter].text;
    alert(backendvalue.toString());
  }
}
