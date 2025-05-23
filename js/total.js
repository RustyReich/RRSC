// Function for when the ENTER key is pressed on a total/tip input field
function TotalFieldEnterHandler(element, event) {

    if (event.key === 'Enter') {

        const id = element.getAttribute("id");

        // Logic for deciding the next input field to move to when you press ENTER
        if (id == "input_preTax")
            document.getElementById("input_postTax").focus();
        else if (id == "input_postTax")
            document.getElementById("input_tip").focus();
        else if (id == "input_tip")
            document.getElementById("input_tip_percentage").focus();
        else if (id == "input_tip_percentage")
            document.getElementById("input_owe").focus();

    }

}

// Function for updating the tip and tip percentage fields
function TipUpdateHandler(element)
{

    // Get the elements for the tip value and tip percentage value
    const tipValueElement = document.getElementById("input_tip");
    const tipValuePercentageElement = document.getElementById("input_tip_percentage");

    // Get the current values for tip, tip percentage, and total post-tax
    const tipValue = Number(tipValueElement.value);
    const tipPercentageValue = Number(tipValuePercentageElement.value);
    const totalPostTaxValue = Number(document.getElementById("input_postTax").value);

    // Get the id of the current element
    const id = element.getAttribute("id");

    // If the element being updated is the tip, we need to update the tip percentage
    if (id == "input_tip")
    {

        // If the tip is empty, make the tip percentage empty. Otherwise, calculate the tip percentage
        if (tipValueElement.value.length == 0)
            tipValuePercentageElement.value = "";
        else
            tipValuePercentageElement.value = tipValue / totalPostTaxValue * 100;

        // If the tip percentage value is not an integer, round it to 2 decimal places
        if (Number.isInteger(Number(tipValuePercentageElement.value)) == false)
            tipValuePercentageElement.value = Number(tipValuePercentageElement.value).toFixed(2);

    }
    else if (id == "input_tip_percentage")  // If the element being updated is the tip percentage, we need to update the tip
    {

        // If the tip percentage is empty, make the tip empty. Otherwise, calculate the tip
        if (tipValuePercentageElement.value.length == 0)
            tipValueElement.value = "";
        else
            tipValueElement.value = totalPostTaxValue * tipPercentageValue / 100;

        // If the tip value is not an integer, round it to 2 decimal places
        if (Number.isInteger(Number(tipValueElement.value)) == false)
            tipValueElement.value = Number(tipValueElement.value).toFixed(2);

    }
    else    // If we are updating a total value (pre-tax or post-tax), make both the tip and tip percentage empty
    {

        if (document.getElementById("input_preTax").value.length != 0 && document.getElementById("input_postTax").value.length != 0)
        {

            tipValuePercentageElement.value = "";
            tipValueElement.value = "";

        }

    }

}

// Function for when a total/tip input element gains focus
function TotalFocusHandler(element)
{
    
    // Get list of all item inputs
    const inputs = document.getElementsByClassName("itemInput");

    // Delete any item inputs that are empty
    for (var i = 0; i < inputs.length; i++)
        if (inputs[i].value.length == 0)
            RemoveItemInputField(i + 1);

}