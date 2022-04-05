function setState(executionContext) {
  var formContext = executionContext.getFormContext();
  var state = new Array();
  var city = formContext.getAttribute("test_city1").getValue()[0].name;
  Xrm.WebApi.retrieveMultipleRecords("test_city").then(
    function success(result) {
      for (var i = 0; i < result.entities.length; i++) {
        var p = result.entities[i];
        var forcity = result.entities[i].test_city_name;
        if (city == forcity && city != null) {
          state[0] = new Object();
          state[0].id = p["_test_state_name_value"];
          state[0].name =
            p[
              "_test_state_name_value@OData.Community.Display.V1.FormattedValue"
            ];
          state[0].entityType =
            p[
              "_test_state_name_value@Microsoft.Dynamics.CRM.lookuplogicalname"
            ];
          formContext.getAttribute("test_state1").setValue(state);
          /*
          First Method: Call the country method after setting the state
          Don't have to select any method onchange event on the form properties
          */
          // setCountry(executionContext);
          /*
          Second Method: using fireOnChange event can fire the event when the given attribute gets changed
          Have to select appropriate method for onchange event on the form properties
          */
          formContext.getAttribute("test_state1").fireOnChange();
        }
      }
    },
    function (error) {
      alert("Error :" + error.message);
    }
  );
}

function setCountry(executionContext) {
  var formContext = executionContext.getFormContext();
  var country = new Array();
  var state = formContext.getAttribute("test_state1").getValue()[0].name;
  Xrm.WebApi.retrieveMultipleRecords("test_state").then(
    function success(result) {
      for (var i = 0; i < result.entities.length; i++) {
        var p = result.entities[i];
        var forState = result.entities[i].test_state_name;
        if (state != null && state == forState) {
          country[0] = new Object();
          country[0].id = p["_test_country_name_value"];
          country[0].name =
            p[
              "_test_country_name_value@OData.Community.Display.V1.FormattedValue"
            ];
          country[0].entityType =
            p[
              "_test_country_name_value@Microsoft.Dynamics.CRM.lookuplogicalname"
            ];
          formContext.getAttribute("test_country1").setValue(country);
        }
      }
    },
    function (error) {
      alert("Error :" + error.message);
    }
  );
}
