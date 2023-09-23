function OweUpdateHandler() {

    const itemInputs = document.getElementsByClassName("itemInput");
    const preTaxInput = document.getElementById("input_preTax");
    const postTaxInput = document.getElementById("input_postTax");
    const tipInput = document.getElementById("input_tip");

    var itemTotals = 0
    for (var i = 0; i < itemInputs.length; i++) {

        if (itemInputs[i].value.length > 0)
            itemTotals += parseFloat(itemInputs[i].value);
        else {

            document.getElementById("input_owe").value = "";
            return

        }

    }

    if (preTaxInput.value.length == 0 || postTaxInput.value.length == 0 || tipInput.value.length == 0) {

        document.getElementById("input_owe").value = "";
        return

    }

    const percentageOfTotal = itemTotals / parseFloat(preTaxInput.value);
    const totalTax = parseFloat(postTaxInput.value) - parseFloat(preTaxInput.value);

    document.getElementById("input_owe").value = itemTotals + percentageOfTotal * (totalTax + parseFloat(tipInput.value));

}