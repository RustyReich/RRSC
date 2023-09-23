function main() {

    const inputs = document.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++)  {

        inputs[i].addEventListener('input', function() { InputController(this); } );

        if (inputs[i].getAttribute("id").includes("input_item")) {

            inputs[i].addEventListener('input', function() { ItemFieldUpdateHandler(this); } );
            inputs[i].addEventListener('keypress', function(e) { ItemFieldEnterHandler(this, e); } );

        } else if (!inputs[i].getAttribute("id").includes("owe")) {

            inputs[i].addEventListener('keypress', function(e) { TotalFieldEnterHandler(this, e); } );

        } else {

            inputs[i].addEventListener('input', function() { this.value = this.value.slice(0, -1); } );

        }

        inputs[i].addEventListener('input', OweUpdateHandler);

    }

}

main();