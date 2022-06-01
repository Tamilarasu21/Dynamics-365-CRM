function fillDropdown() {
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.2/EntityDefinitions(LogicalName='account')/Attributes/Microsoft.Dynamics.CRM.PicklistAttributeMetadata?$select=LogicalName&$filter=LogicalName eq 'test_deferral_payment_method'&$expand=OptionSet", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                var results = JSON.parse(this.response);
                var closeReasons = document.getElementById("selectForm");

                for (var i = 0; i < results.value[0].OptionSet.Options.length; i++) {
                    var Label = results.value[0].OptionSet.Options[i].Label.UserLocalizedLabel.Label;
                    var Value = results.value[0].OptionSet.Options[i].Value;
                    var option = document.createElement("option");
                    option.text = Label;
                    option.value = Value;
                    closeReasons.options.add(option);
                }
                closeReasons.selectedIndex = -1;

            }
            // else {
            //     Xrm.Utility.alertDialog(this.statusText);
            // }
        }
    };
    req.send();
}