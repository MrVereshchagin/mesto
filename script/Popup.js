export class Popup {
    constructor(PopupSelector) {
        this._popup = document.querySelector(PopupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        // this._popup.addEventListener('click', this.setEventListeners);
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        // this._popup.removeEventListener('click', this.setEventListeners);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (event) => {
        if(event.key === 'Escape') {
            this._close();
        }
    }

    setEventListeners() {
        const closeButton = this._popup.querySelector('.popup__close');

        this._popup.addEventListener('click', (event) => {
            if(!event.target.closest('.popup__container' || event.target === closeButton)) {
                this.close();
            }
        })


    }
}