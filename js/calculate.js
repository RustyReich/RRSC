// Function for updating the amount owed based on the inputs in all other fields
function OweUpdateHandler() {

    // Get the elements of all items, totals, and tips
    const itemInputs = document.getElementsByClassName("itemInput");
    const preTaxInput = document.getElementById("input_preTax");
    const postTaxInput = document.getElementById("input_postTax");
    const tipInput = document.getElementById("input_tip");

    // Add up totals of all items
    var itemTotals = 0
    for (var i = 0; i < itemInputs.length; i++) {

        if (itemInputs[i].value.length > 0)
            itemTotals += parseFloat(itemInputs[i].value);
        else {

            // Don't calculate an amount owed if any item has no value
            document.getElementById("input_owe").value = "";
            return

        }

    }

    // Don't calculate an amount owed if any total/tip has no value
    if (preTaxInput.value.length == 0 || postTaxInput.value.length == 0 || tipInput.value.length == 0) {

        document.getElementById("input_owe").value = "";
        return

    }

    // Calculate amount owed
    const percentageOfTotal = itemTotals / parseFloat(preTaxInput.value);
    const totalTax = parseFloat(postTaxInput.value) - parseFloat(preTaxInput.value);
    const oweInputElement = document.getElementById("input_owe");
    oweInputElement.value = itemTotals + percentageOfTotal * (totalTax + parseFloat(tipInput.value));

    // If the calculated amount owed is NaN, set it to an empty string
    if (Number.isNaN(Number(oweInputElement.value)))
        oweInputElement.value = "";

    // If the owed value is not an integer, round it to 2 decimal places
    if (Number.isInteger(Number(oweInputElement.value)) == false)
        oweInputElement.value = Number(oweInputElement.value).toFixed(2);

}