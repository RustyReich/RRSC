function ItemFieldUpdateHandler(element) {
    
    const inputValue = element.value;
    const id = parseInt(element.getAttribute("id").slice("input_item".length));

    if (inputValue.length == 1 && !(document.getElementById("input_item" + (id + 1))))
        AddItemInputField(id);

}

function AddItemInputField(id) {

    const newItemID = id + 1;

    const newItemInput = CreateItemInputField(newItemID);
    newItemInput.addEventListener('input', () => { ItemFieldUpdateHandler(newItemInput) });
    newItemInput.addEventListener('keypress', function (e) { ItemFieldEnterHandler(newItemInput, e) });
    newItemInput.addEventListener('keypress', OweUpdateHandler);
    newItemInput.addEventListener('focusout', function() { ItemFocusOutHandler(this); } );

}

// Function for removing an item
function RemoveItemInputField(id) {

    // Get the input and label for the gien item id
    const inputToDelete = document.getElementById("input_item" + id);
    const labelToDelete = document.getElementById("label_item" + id);
    
    // Remove the input and label
    inputToDelete.remove();
    labelToDelete.remove();

}

function CreateItemInputField(id) {

    const itemForm = document.getElementById("item_form");
    
    const itemLabel = document.createElement("label");
    itemLabel.setAttribute("for", "item" + id);
    itemLabel.setAttribute("id", "label_item" + id);
    itemLabel.setAttribute("class", "itemLabel");
    itemLabel.textContent = "Item " + id + ": ";
    
    const itemInput = document.createElement("input");
    itemInput.setAttribute("id", "input_item" + id);
    itemInput.setAttribute("type", "text");
    itemInput.setAttribute("name", "item" + id);
    itemInput.setAttribute("placeholder", "$0.00");
    itemInput.setAttribute("class", "itemInput");

    const itemDiv = document.createElement("div");
    itemDiv.setAttribute("class", "input-wrap");

    itemDiv.appendChild(itemLabel);
    itemDiv.appendChild(itemInput);

    itemForm.appendChild(itemDiv);

    return itemInput;

}

function ItemFieldEnterHandler(element, event) {

    if (event.key === 'Enter') {

        const inputValue = element.value;
        const id = parseInt(element.getAttribute("id").slice("input_item".length));

        if (inputValue.length != 0)
            document.getElementById("input_item" + (id + 1)).focus();
        else if (inputValue.length == 0 && (id != 1))
            document.getElementById("input_preTax").focus();

    }

}

// Function for when an item input loses focus
function ItemFocusOutHandler(element) {

    // Get the value and id of the item input that just lost focus
    const inputValue = element.value;
    const id = parseInt(element.getAttribute("id").slice("input_item".length));

    // If the current input for the item that lost focus is empty
    if (inputValue.length == 0)
    {

        // Get the number of items
        const numOfItems = document.getElementsByClassName("itemInput").length;
        
        // If there is more than one item, remove the current item
        if (numOfItems != 1)
            RemoveItemInputField(id);

        // Get all labels and inputs for all remaining items
        const labels = document.getElementsByClassName("itemLabel");
        const inputs = document.getElementsByClassName("itemInput");

        // Go through all remaining labels and inputs and give them new id's in numerical order
        for (var i = 0; i < inputs.length; i++)
        {

            labels[i].setAttribute("for", "item" + (i + 1));
            labels[i].setAttribute("id", "label_item" + (i + 1));
            labels[i].textContent = "Item " + (i + 1) + ": ";

            inputs[i].setAttribute("id", "input_item" + (i + 1));
            inputs[i].setAttribute("name", "item" + (i + 1));

        }

    }

}