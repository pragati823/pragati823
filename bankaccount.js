// JavaScript source code
// JavaScript source code
function onloadBankAccount() {
    alert("New Action Is Being Initiated");
}
function onsaveBankAccount() {
    alert("Action is Saved");
}
function onchangeBankAccount() {
    alert("Change in action");
}

function getAllFieldValues(executionContext) {
    var formContext = executionContext.getFormContext();

    var nameSl = formContext.getAttribute("t1_name").getValue();

    alert("Single line of Text name: " + nameSl);


    var customerType = formContext.getAttribute("t1_customertype").getValue();


    alert("Optionset value: " + customerType);


    var dateOfBirth = formContext.getAttribute("t1_dateofbirth").getValue();

    alert("Date of birth value: " + dateOfBirth);


    var bankAccountOpen = formContext.getAttribute("t1_bankaccountopen").getValue();

    alert("Two optionSet value: " + bankAccountOpen);

}

function hideBillingType(executionContext) {

    var formContext = executionContext.getFormContext();

    var billPaidBy = formContext.getAttribute("t1_billpayedby").getValue();


    if (billPaidBy == null) {

        formContext.getControl("t1_creditcardnumber").setVisible(false);
        formContext.getControl("t1_debitcardnumber").setVisible(false);
        formContext.getControl("t1_upidetails").setVisible(false);
        formContext.getAttribute("t1_billpayedby").setRequiredLevel("required");
    }

    else if (billPaidBy == 126530000) {
        //Credit Card

        alert("User Paid by Credit Card : " + billPaidBy);
        formContext.getControl("t1_creditcardnumber").setVisible(true);
        formContext.getControl("t1_debitcardnumber").setVisible(false);
        formContext.getControl("t1_upidetails").setVisible(false);



        // formContext.getAttribute("t1_creditcardnumber").setRequiredLevel("required");
        //formContext.getAttribute("t1_debitcardnumber").setRequiredLevel("none");
        //formContext.getAttribute("t1_upidetails").setRequiredLevel("none");
    }
    else if (billPaidBy == 126530001) {
        // Debit Card

        alert("User Paid by Debit Card : " + billPaidBy);
        formContext.getControl("t1_creditcardnumber").setVisible(false);
        formContext.getControl("t1_debitcardnumber").setVisible(true);
        formContext.getControl("t1_upidetails").setVisible(false);

        // formContext.getAttribute("t1_creditcardnumber").setRequiredLevel("none");
        //formContext.getAttribute("t1_debitcardnumber").setRequiredLevel("required");
        //formContext.getAttribute("t1_upidetails").setRequiredLevel("none");


    }


    else if (billPaidBy == 126530002) {
        //UPI

        alert("User Paid by UPI : " + billPaidBy);
        formContext.getControl("t1_creditcardnumber").setVisible(false);
        formContext.getControl("t1_debitcardnumber").setVisible(false);
        formContext.getControl("t1_upidetails").setVisible(true);

        // formContext.getAttribute("t1_creditcardnumber").setRequiredLevel("none");

    }
}


    // JavaScript source code

    function custPhone(executionContext) {

        var formContext = executionContext.getFormContext();

        var custPhone = formContext.getAttribute("t1_customerphonenumber").getValue();

        if (custPhone > 10) {
            alert("Phone Number Can Not Be More Than 10 Numbers: ");
        }
    }
    function LockUnlock(executionContext) {
        //Initiated Form Context.
        var formContext = executionContext.getFormContext();
        //Getting Value From Field Billing Purpose.
        var billingPurpose = formContext.getAttribute("t1_billpurpose").getValue();
        //Condition If billPaidBy Is Null.
        if (billingPurpose == null) {
            //Using SetVisible propertly for locking field Account Address.
            formContext.getControl("t1_billpayedby").setDisabled(true);
        }


        else {
            formContext.getControl("t1_billpayedby").setDisabled(false);
        }
    }

    // JavaScript source code
    function hideAddressDetailsInCV(executionContext) {
        var formContext = executionContext.getFormContext();
        var isExistingCustomer = formContext.getAttribute("t1_isbillingincludesgst").getValue();
        formContext.ui.clearFormNotification();
        if (isExistingCustomer == 1) {
            formContext.ui.tabs.get("{168d2729-aa50-4e3c-af62-b8aabbd9036d}").sections.get("addressdetails").setVisible(true);
            formContext.ui.setFormNotification("Please fill values in Existing Contact Details TAB ", "INFO", "infoId");

        }


        else {
            formContext.ui.tabs.get("{168d2729-aa50-4e3c-af62-b8aabbd9036d}").sections.get("addressdetails").setVisible(false);


        }

    }

    function hideGSTAdditionalDetails(executionContext) {
        var formContext = executionContext.getFormContext();
        var gstAdditionalDetails = formContext.getAttribute("t1_gstadditionaldetails").getValue();
        if (gstAdditionalDetails == true) {
            formContext.ui.tabs.get("tab_2").setVisible(true);
            alert("Fill Additional Tab:" + gstAdditionalDetails);
        }
        else if (gstAdditionalDetails == false) {
            formContext.ui.tabs.get("tab_2").setVisible(false);
        }


    }
    function gstInNumberIsNull(executionContext) {
        var formContext = executionContext.getFormContext();
        var gstInNumberIsNull = formContext.getAttribute("t1_gstinnumber").getValue();
        var gstAdditionalDetails = formContext.getAttribute("t1_gstadditionaldetails").getValue();
        if (gstInNumberIsNull == null && gstAdditionalDetails == true) {
            alert("Provide GSTN Number" + gstInNumberIsNull);
        }
    }
   



