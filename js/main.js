// Main function
function main() {

    // Get all input fields in the page
    const inputs = document.getElementsByTagName("input");

    // Go through every input field
    for (var i = 0; i < inputs.length; i++)  {

        // Every input on the page has an InputController
        inputs[i].addEventListener('input', function() { InputController(this); } );

        // All item inputs have several input-specific handlers
        if (inputs[i].getAttribute("id").includes("input_item")) {

            inputs[i].addEventListener('input', function() { ItemFieldUpdateHandler(this); } );
            inputs[i].addEventListener('keypress', function(e) { ItemFieldEnterHandler(this, e); } );
            inputs[i].addEventListener('focusout', function() { ItemFocusOutHandler(this); } );

        } else if (!inputs[i].getAttribute("id").includes("owe")) {

            // All total/tip inputs have a TotalFieldEnterHandler and TipUpdateHandler and a TotalFocusHandler
            inputs[i].addEventListener('keypress', function(e) { TotalFieldEnterHandler(this, e); } );
            inputs[i].addEventListener('input', function() { TipUpdateHandler(this); } );
            inputs[i].addEventListener('focus', function() { TotalFocusHandler(this); } );

        } else {

            // Don't allow modifying the value of the "You Owe" value
            inputs[i].addEventListener('input', function() { this.value = this.value.slice(0, -1); } );

        }

        // All inputs also will update the "You Owe" value when updated
        inputs[i].addEventListener('input', OweUpdateHandler);

    }

}

main();