function InputController(element) {

    const inputValue = element.value;

    // If an input field has been updated, reset it's text color to black in case it has been changed to red
    element.style.color = '#171D1C';

    // Don't allow the user to input a value that is not a number
    if (Number.isNaN(Number(inputValue)) && inputValue[0] != '=')
        element.value = inputValue.slice(0, -1);

}