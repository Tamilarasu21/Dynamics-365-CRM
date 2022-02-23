function dataTypes(executionContext) {
  //Option set
  var formContext = executionContext.getFormContext();
  //getting values from the option set
  var genderValue = formContext.getAttribute("test_gender").getValue();
  //getting Label text from the option set
  var genderText = formContext.getAttribute("test_gender").getText();
  //alert dialog box
  Xrm.Utility.alertDialog(
    "Gender : " + genderText + "\n" + "Value : " + genderValue
  );
  //setting gender value to phone number field
  formContext.getAttribute("test_phone_number").setValue(genderText);

  // multi select option set
  var language = formContext.getAttribute("test_languages_known");
  formContext.getAttribute("test_languages_known");
  if (language != null) {
    language.getValue();
    language.setValue([1, 2]);
  }

  //lookup
  var stateField = formContext.getAttribute("test_state1");
  var state;
  var guid;
  var name;
  var entityName;

  if (stateField != null) {
    state = stateField.getValue();
    if (state != null) {
      guid = state[0].id.slice(1, -1);
      name = state[0].name;
      entityName = state[0].entityType;
    }
    state.setValue([
      {
        id: "4333fcea-628a-ec11-93b0-000d3aca1c16",
        name: "Kerala",
        entityType: "systemuser",
      },
    ]);
  }
}
