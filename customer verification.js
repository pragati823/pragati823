// JavaScript source code
// JavaScript source code
function hideAddressDetailsInCV(executionContext) {
    var formContext = executionContext.getFormContext();
    var isExistingCustomer = formContext.getAttribute("t1_isexistingcustomer").getValue();
    formContext.ui.clearFormNotification();
    if (isExistingCustomer == 1) {
        formContext.ui.tabs.get("{2616a1c7-27af-4a5c-bce0-a6064e58a21c}").sections.get("{2616a1c7-27af-4a5c-bce0-a6064e58a21c}_section_2").setVisible(true);
        formContext.ui.tabs.get("tab_2").setVisible(true);
        formContext.ui.setFormNotification("Please fill values in Existing Contact Details TAB ", "INFO", "infoId");

    }
    else {
        formContext.ui.tabs.get("{2616a1c7-27af-4a5c-bce0-a6064e58a21c}").sections.get("{2616a1c7-27af-4a5c-bce0-a6064e58a21c}_section_2").setVisible(false);
        formContext.ui.tabs.get("tab_2").setVisible(false);

    }

}
function isContactEnddateNull(executionContext) {
    var formContext = executionContext.getFormContext();
    var isContactEnddate = formContext.getAttribute("t1_contactenddate").getValue();

    if (isContactEnddate == null) {
        formContext.ui.setFormNotification("Contact End Date should not be Empty", "ERROR", "errorId");
        formContext.getControl("t1_contactenddate").setNotification("Contact End Date should not be Empty");
        executionContext.getEventArgs().preventDefault();
    } else {
        formContext.ui.clearFormNotification("alertId");
    }
}



function kycCompletedYes(executionContext) {
    var formContext = executionContext.getFormContext();
    var kycCompleted = formContext.getAttribute("t1_kyccomplete").getValue();

    if (kycCompleted == 1) {
        var defaultValue = 126530002;
        var verificationStatus = formContext.getAttribute("t1_verificationstatus").getValue();
        if (verificationStatus == null) {
            formContext.getAttribute("t1_verificationstatus").setValue(defaultValue);
        }
        //To  Comments Multi line text
        formContext.getAttribute("t1_comments").setValue("Customer Verification is completed");
        //To Customer minimum balance currency
        formContext.getAttribute("t1_customerminimumbalance").setValue(1000);
        //To Customer score floatimg point
        formContext.getAttribute("t1_customerscore").setValue(78.08);

    }
}

