function InputController(element) {

    const inputValue = element.value;
    const lastChar = inputValue.slice(-1);

    // Don't allow characters other than digits and .
    if (inputValue.length > 0 && lastChar != '.' && (lastChar < '0' || lastChar > '9')) {

        element.value = inputValue.slice(0, -1);
        return;

    } else if (inputValue.length == 1 && lastChar == '.') {

        // Don't allow the input to start with a .
        element.value = inputValue.slice(0, -1);
        return;

    } else if (lastChar == '.' && inputValue.slice(0, -1).includes(".")) {

        // Don't allow the input to have more than one .
        element.value = inputValue.slice(0, -1);
        return;

    } else if (inputValue.charAt(inputValue.length - 4) == '.') {

        // Don't allow the input to have more than 2 digits after the decimal point
        element.value = inputValue.slice(0, -1);
        return;

    }

}