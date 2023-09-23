function ItemFieldUpdateHandler(element) {
    
    const inputValue = element.value;
    const id = parseInt(element.getAttribute("id").slice("input_item".length));

    if (inputValue.length == 1 && !(document.getElementById("input_item" + (id + 1))))
        AddItemInputField(id);
    else if (inputValue.length == 0)
        RemoveItemInputField(id + 1);

}

function AddItemInputField(id) {

    const newItemID = id + 1;

    const newItemInput = CreateItemInputField(newItemID);
    newItemInput.addEventListener('input', () => { ItemFieldUpdateHandler(newItemInput) });
    newItemInput.addEventListener('keypress', function (e) { ItemFieldEnterHandler(newItemInput, e) });
    newItemInput.addEventListener('keypress', OweUpdateHandler);

}

function RemoveItemInputField(id) {

    const inputToDelete = document.getElementById("input_item" + id);
    const labelToDelete = document.getElementById("label_item" + id);
    
    inputToDelete.remove();
    labelToDelete.remove();

}

function CreateItemInputField(id) {

    const itemForm = document.getElementById("item_form");
    
    const itemLabel = document.createElement("label");
    itemLabel.setAttribute("for", "item" + id);
    itemLabel.setAttribute("id", "label_item" + id);
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
        else if (inputValue.length == 0 && (id != 1)) {

            RemoveItemInputField(id);

            document.getElementById("input_preTax").focus();
            
        }

    }

}