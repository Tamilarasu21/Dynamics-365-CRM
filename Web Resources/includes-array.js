// code for find a value which is in array of objects
function includesArrayOfObjects(){
    Xrm.WebApi.retrieveMultipleRecords("jms_docket",docketFetchXml).then(
        function success(result){
                var docketArr=result.entities;
                var isSentenced=docketArr.includes(x=>x.jms_dockettype==177320000);
                if(isSentenced==true){
                    applyJailCreditsControl.setVisible(true);
                }
        },
        function (error) {
            Xrm.Utility.alertDialog(error.message, null);
        }
    );
}