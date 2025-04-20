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

    // Get the current values for tip, tip percentage, and total post-tax
    const tipValue = Number(document.getElementById("input_tip").value);
    const tipPercentageValue = Number(document.getElementById("input_tip_percentage").value);
    const totalPostTaxValue = Number(document.getElementById("input_postTax").value);

    // Get the id of the current element
    const id = element.getAttribute("id");

    // If the element being updated is the tip, we need to update the tip percentage
    if (id == "input_tip")
    {

        // If the tip is empty, make the tip percentage empty. Otherwise, calculate the tip percentage
        if (document.getElementById("input_tip").value.length == 0)
            document.getElementById("input_tip_percentage").value = "";
        else
            document.getElementById("input_tip_percentage").value = tipValue / totalPostTaxValue * 100;

    }
    else if (id == "input_tip_percentage")  // If the element being updated is the tip percentage, we need to update the tip
    {

        // If the tip percentage is empty, make the tip empty. Otherwise, calculate the tip
        if (document.getElementById("input_tip_percentage").value.length == 0)
            document.getElementById("input_tip").value = "";
        else
            document.getElementById("input_tip").value = totalPostTaxValue * tipPercentageValue / 100;

    }
    else    // If we are updating a total value (pre-tax or post-tax), make both the tip and tip percentage empty
    {

        if (document.getElementById("input_preTax").value.length != 0 && document.getElementById("input_postTax").value.length != 0)
        {

            document.getElementById("input_tip_percentage").value = "";
            document.getElementById("input_tip").value = "";

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