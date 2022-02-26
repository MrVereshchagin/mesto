const formSubmit = (event) => {
    event.preventDefault();
}

const checkButtonValidity = (config, form, submitButton) => {
    if(form.checkValidity()) {
        submitButton.removeAttribute('disabled');
        submitButton.classList.remove(config.inactiveButtonClass);
    } else {
        submitButton.setAttribute('disabled', '');
        submitButton.classList.add(config.inactiveButtonClass);
    }
}

const checkInputValidity = (config, form, input) => {
    const errorMessage = form.querySelector(`#error-${input.id}`);
    if(input.validity.valid) {
        errorMessage.textContent = '';
        input.classList.remove(config.inputErrorClass);
    } else {
        errorMessage.textContent = input.validationMessage;
        input.classList.add(config.inputErrorClass);
    }
}

function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach((form) => {
        form.addEventListener('submit', formSubmit);
        const inputSelector = form.querySelectorAll(config.inputSelector);
        const submitButton = form.querySelector(config.submitButtonSelector);
        checkButtonValidity(config, form, submitButton);
        inputSelector.forEach((input) => {
            input.addEventListener('input', () => {
            checkInputValidity(config, form, input);
            checkButtonValidity(config, form, submitButton);
            });
        });   
    });
}
 