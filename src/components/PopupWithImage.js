import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    open(text, link) {
        const image = this._popup.querySelector('.popup__image_item');
        const caption = this._popup.querySelector('.popup__image_caption');

        image.src = link;
        caption.textContent = text;
        image.alt = text;

        super.open(); 
    }
}