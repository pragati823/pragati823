// JavaScript source code
function retrieveFlighid(PrimaryControl) {
    var formContext = PrimaryControl;

    var aircraftId = formContext.data.entity.getId().replace("{", "").replace("}", "");

    Xrm.WebApi.online.retrieveMultipleRecords("t1_flight", "?$select=t1_flightid,t1_name&$filter=_t1_aircraft_value eq '"+aircraftId +"' and  statuscode eq 1").then(
        function success(results) {
            for (var i = 0; i < results.entities.length; i++) {
                var t1_flightid = results.entities[i]["t1_flightid"];

                var t1_name = results.entities[i]["t1_name"];

                var entity = {};
                entity.statuscode = 126530000;

                Xrm.WebApi.online.updateRecord("t1_flight", t1_flightid, entity).then(
                    function success(result) {

                        Xrm.Utility.alertDialog(t1_name + "flights have been cancelled");

                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );


            }
        },
        function (error) {
            Xrm.Utility.alertDialog(error.message);
        }
    );
}
