const formSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target.checkValidity());
}

const checkInputValidity = (formSelector, input) => {
    const errorMessage = formSelector.querySelector(`#error-${input.id}`);
    console.log(errorMessage);
    if(input.validity.valid) {
        errorMessage.textContent = '';
        input.classList.remove('popup__input_type_error');
    } else {
        errorMessage.textContent = input.validationMessage;
        input.classList.add('popup__input_type_error');
    }
}

function enableValidation() {
    const formSelector = document.querySelector('.popup__form');
    formSelector.addEventListener('submit', formSubmit);
    const inputSelector = formSelector.querySelectorAll('.popup__input');
    inputSelector.forEach((input) => {
        input.addEventListener('input', () => checkInputValidity(formSelector, input));
    });
}

enableValidation();