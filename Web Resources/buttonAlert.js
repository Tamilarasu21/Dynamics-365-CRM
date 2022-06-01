function buttonAlert() {
  var pageInput = {
    pageType: "webresource",
    webresourceName: "test_simplewebpage",
  };
  var navigationOptions = {
    target: 2,
    width: 250,
    height: 250,
    position: 1,
  };
  Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
    function success() {
      // Run code on success
    },
    function error() {
      // Handle errors
    }
  );
}
