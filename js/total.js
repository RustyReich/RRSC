function TotalFieldEnterHandler(element, event) {

    if (event.key === 'Enter') {

        const id = element.getAttribute("id");

        if (id == "input_preTax")
            document.getElementById("input_postTax").focus();
        else if (id == "input_postTax")
            document.getElementById("input_tip").focus();

    }

}