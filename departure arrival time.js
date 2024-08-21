function preventDuplicateAircraftBooking(executionContext) {
    var formContext = executionContext.getFormContext();

    var currentDateTime = new Date();
    var departureDate = formContext.getAttribute("t1_departuretime").getValue();

    var arrivalDate = formContext.getAttribute("t1_arrivaltime").getValue();


    if (departureDate != null && departureDate < currentDateTime) {

        formContext.getAttribute("t1_departuretime").setValue(null);
        alert("Kindly choose the appropriate date. date must be past today in progressive manner .");
    }

    else if (arrivalDate != null && arrivalDate < currentDateTime && arrivalDate < departureDate) {

        formContext.getAttribute("t1_arrivaltime").setValue(null);
        alert("Kindly choose the valid arrival date.please make sure the arrival date is not matching with departure date,thank you.");
    }


}

