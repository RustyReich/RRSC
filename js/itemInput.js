function InitExpandingItemsList() {
    
    const itemInput1 = document.getElementById("input_item1");
    itemInput1.addEventListener('input', () => { ItemFieldUpdateHandler(1) });
    itemInput1.addEventListener('keypress', function (e) { ItemFieldEnterHandler(1, e) });

}

function ItemFieldEnterHandler(id, event) {

    if (event.key === 'Enter') {

        const inputValue = document.getElementById("input_item" + id).value;

        if (inputValue.length != 0) {

            const nextInput = document.getElementById("input_item" + (id + 1));
            nextInput.focus();

        } else if (inputValue.length == 0 && (id != 1)) {

            RemoveItemInputField(id);
            
        }

    }

}

function ItemFieldUpdateHandler(id) {

    const inputValue = document.getElementById("input_item" + id).value;
    const lastChar = inputValue.slice(-1);

    if (inputValue.length > 0 && lastChar != '.' && (lastChar < '0' || lastChar > '9')) {

        document.getElementById("input_item" + id).value = inputValue.slice(0, -1);
        return;

    } else if (inputValue.length == 1 && lastChar == '.') {

        document.getElementById("input_item" + id).value = inputValue.slice(0, -1);
        return;

    } else if (lastChar == '.' && inputValue.slice(0, -1).includes(".")) {

        document.getElementById("input_item" + id).value = inputValue.slice(0, -1);
        return;

    } else if (inputValue.charAt(inputValue.length - 4) == '.') {

        document.getElementById("input_item" + id).value = inputValue.slice(0, -1);
        return;

    }

    if (inputValue.length == 1 && !(document.getElementById("input_item" + (id + 1)))) {

        AddItemInputField(id);

    } else if (inputValue.length == 0) {

        RemoveItemInputField(id + 1);

    }

}

function RemoveItemInputField(id) {

    const inputToDelete = document.getElementById("input_item" + id);
    const labelToDelete = document.getElementById("label_item" + id);
    const breakToDelete = document.getElementById("break_item" + id);
    
    inputToDelete.remove();
    labelToDelete.remove();
    breakToDelete.remove();

}

function AddItemInputField(id) {

    const newItemID = id + 1;

    const newItemInput = CreateItemInputField(newItemID);
    newItemInput.addEventListener('input', () => { ItemFieldUpdateHandler(newItemID) });
    newItemInput.addEventListener('keypress', function (e) { ItemFieldEnterHandler(newItemID, e) });

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

    const itemDiv = document.createElement("div");
    itemDiv.setAttribute("class", "input-wrap");

    itemDiv.appendChild(itemLabel);
    itemDiv.appendChild(itemInput);

    itemForm.appendChild(itemDiv);

    return itemInput;

}