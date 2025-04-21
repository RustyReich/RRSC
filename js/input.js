function InputController(element) {

    const inputValue = element.value;
    const lastChar = inputValue.slice(-1);

    // Don't allow the user to input a value that is not a number
    if (Number.isNaN(Number(inputValue)))
        element.value = inputValue.slice(0, -1);

}