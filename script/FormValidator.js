export class FormValidator {
    constructor (settings, form) {
        this._form = form;
        this._settings = settings;
        this._inputSelector = this._form.querySelectorAll(this._settings.inputSelector);
        this._submitButton = this._form.querySelector(this._settings.submitButtonSelector);
    }

   _checkButtonValidity () {
        if(this._form.checkValidity()) {
            this._submitButton.removeAttribute('disabled');
            this._submitButton.classList.remove(this._settings.inactiveButtonClass);
        } else {
            this._submitButton.setAttribute('disabled', '');
            this._submitButton.classList.add(this._settings.inactiveButtonClass);
        }
    }

    _checkInputValidity (input) {
        const errorMessage = this._form.querySelector(`#error-${input.id}`);
        if(input.validity.valid) {
            errorMessage.textContent = '';
            input.classList.remove(this._settings.inputErrorClass);
        } else {
            errorMessage.textContent = input.validationMessage;
            input.classList.add(this._settings.inputErrorClass);
        }
    }

    _setEventListener() {
        this._checkButtonValidity();
        
        this._inputSelector.forEach((input) => {
            input.addEventListener('input', () => {
                //console.log('this =>', this);
            this._checkInputValidity(input);
            this._checkButtonValidity();
            });
        });   
    }
    
    enableValidation() {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        this._setEventListener();
    }
}