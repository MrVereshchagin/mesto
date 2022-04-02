export class FormValidator {
    constructor (settings, form) {
        this._form = form;
        this._settings = settings;
        this._inputList = this._form.querySelectorAll(this._settings.inputSelector);
        this._submitButton = this._form.querySelector(this._settings.submitButtonSelector);
    }

   checkButtonValidity () {
        if(this._form.checkValidity()) {
            this._submitButton.removeAttribute('disabled');
            this._submitButton.classList.remove(this._settings.inactiveButtonClass);
        } else {
            this._submitButton.setAttribute('disabled', '');
            this._submitButton.classList.add(this._settings.inactiveButtonClass);
        }
    }

    _showInputError(input) {
        const errorMessage = this._form.querySelector(`#error-${input.id}`);
        errorMessage.textContent = input.validationMessage;
        input.classList.add(this._settings.inputErrorClass);
    }
    
    _hideInputError(input) {
        const errorMessage = this._form.querySelector(`#error-${input.id}`);
        errorMessage.textContent = '';
        input.classList.remove(this._settings.inputErrorClass);
    }

    _checkInputValidity (input) {
        if(input.validity.valid) {
            this._hideInputError(input);
        } else {
            this._showInputError(input);          
        }
    }
                                
    _setEventListener() {
        this.checkButtonValidity();
        
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                //console.log('this =>', this);
            this._checkInputValidity(input);
            this.checkButtonValidity();
            });
        });   
    }
    
    enableValidation() {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        this._setEventListener();
    }

    resetForm() {
        this._form.reset();
        this._inputList.forEach((input) => {
            this._hideInputError(input);
        });
    }
}