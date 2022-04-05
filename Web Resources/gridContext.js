function gridContext(executionContext) {
  var formContext = executionContext.getFormContext();
  var gridContext = formContext.getControl("Contact");
  var selectAllRows = gridContext.getGrid().getSelectedRows();
  alert(selectAllRows);
}
