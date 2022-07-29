function navigateToView(){
    var pageInput = {
        pageType: "entitylist",
        entityName: "account"
    };
    Xrm.Navigation.navigateTo(pageInput).then(
        function success(success) {
            console.log("Returned to Account View"+success);
        });
}
// refresh current record
function refreshCurrentRecord(){
    var entityFormOptions = {};
        entityFormOptions["entityName"] = formContext.data.entity.getEntityName();
        entityFormOptions["entityId"] = formContext.data.entity.getId();

        setTimeout(function () {
            Xrm.Navigation.openForm(entityFormOptions).then(
                function (success) {
                    console.log(success);
                },
                function (error) {
                    console.log(error);
                });
        }, 2000);
}