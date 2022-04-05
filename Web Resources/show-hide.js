function hideSection(executionContext) {
  var formContext = executionContext.getFormContext();
  var status = formContext.getAttribute("test_show_dealer").getValue();
  if (status == 0) {
    formContext.ui.tabs
      .get("tab_general")
      .sections.get("section_dealer")
      .setVisible(false);
  } else if (status == 1) {
    formContext.ui.tabs
      .get("tab_general")
      .sections.get("section_dealer")
      .setVisible(true);
  }
}
