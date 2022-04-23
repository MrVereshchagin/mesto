export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        this._popup.addEventListener('click', this.setEventListeners);
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        this._popup.removeEventListener('click', this.setEventListeners);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose (event) {
        if(event.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        const closeButton = this._popup.querySelector('.popup__close');

        this._popup.addEventListener('click', (event) => {
            if(!event.target.closest('.popup__container')) {
                this.close();
            } else if (event.target === closeButton) {
                this.close();
            }
        })
    }
}