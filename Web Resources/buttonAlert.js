function buttonAlert() {
  Xrm.Navigation.navigateTo({
    pageType: "entityrecord", 
    entityName: "account", 
    // entityId: "83BD09D6-930D-EB11-A813-000D3A23CB53", 
    createFromEntity: { entityType: "account", id: Xrm.Page.data.entity.getId(), name: "dummy" }, 
    // data: {
    //     orb_pcftester : Xrm.Page.data.entity.getId(), 
    //     orb_pcftestername: "dummy", 
    //     orb_pcgftestwertype: "orb_pcftester"
    //  },
     formId: "1798e360-dfaa-4167-b3fe-afc371cf1e66"
}, {
    target: 2, 
    width: 600, height: 350 ,
    position: 1
}).then(console.log, console.error)

  // var pageInput = {
  //   pageType: "webresource",
  //   webresourceName: "test_simplewebpage",
  // };
  // var navigationOptions = {
  //   target: 2,
  //   width: 250,
  //   height: 250,
  //   position: 1,
  // };
  // Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
  //   function success() {
  //     // Run code on success
  //   },
  //   function error() {
  //     // Handle errors
  //   }
  // );


}
