function waitForElementToAppear(locateElementHandler) {
    return new Promise((resolve) => {
        var waitInterval;
        var isElementPresent = false;

        function attemptToFindElement() {
            if (isElementPresent) {
                return;
            }

            let element = locateElementHandler();
            if (!element) {
                return;
            } else {
                // Stop the interval immediately.
                isElementPresent = true;
                clearInterval(waitInterval);

                resolve(element);
            }
        }

        waitInterval = setInterval(attemptToFindElement, 500);
    });
}

function markCheckboxAsChecked() {
    waitForElementToAppear(() => { return document.getElementsByName('DontShowAgain')[0] })
        .then(checkbox => {
            checkbox.checked = true;
        })
        .then(submitForm);
}

function submitForm() {
    waitForElementToAppear(() => { return Array.from(document.getElementsByTagName('input')).filter(element => element.type === 'submit')[0] })
        .then(submitButton => {
            submitButton.click();
        });
}

markCheckboxAsChecked();
