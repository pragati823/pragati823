function handleReviewVerificationChange() {
    var formContext = Xrm.Page;

    // Get the value of the ReviewVerification field
    var reviewVerificationField = formContext.getAttribute("t1_reviewtheverification").getValue();

    // Check if the ReviewVerification field is marked as 'No'
    if (reviewVerificationField === 0) {
        // Disable the Next Stage button in the Business Process Flow
        disableNextStageButton();
    } else {
        // Enable the Next Stage button in the Business Process Flow
        enableNextStageButton();
    }
}

function disableNextStageButton() {
    var nextStageButton = document.getElementById("MscrmControls.Containers.ProcessBreadCrumb-headerNavigationButtontrue3_3037420087894");

    if (nextStageButton != null) {
        nextStageButton.disabled = true;
    }
}

function enableNextStageButton() {
    var nextStageButton = document.getElementById("MscrmControls.Containers.ProcessBreadCrumb-headerNavigationButtontrue3_3037420087894");

    if (nextStageButton != null) {
        nextStageButton.disabled = false;
    }
}
