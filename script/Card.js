import { imagePopup, imagePopupItem, imagePopupCaption, openPopup } from './utils.js';

export class Card {
    constructor(data, cardTemplateSelector) {
        this._template = document.querySelector('#template').content;
        this._name = data.name;
        this._link = data.link;
    }

    _likeFunction = () => {
        this._likeButton.classList.toggle('element__like_active');
    }

    _deleteCard = () => {
        this._newElement.remove();
    }

    _openImagePopup = () => {
        openPopup(imagePopup);
        imagePopupItem.src = this._link;
        imagePopupCaption.textContent = this._name;
        imagePopupItem.alt = this._name;
    }

    _setEventsListeners = () => {
        this._deleteButton = this._newElement.querySelector('.element__trash');
        
        this._likeButton.addEventListener('click', this._likeFunction);
        this._deleteButton.addEventListener('click', this._deleteCard);
        this._cardPhoto.addEventListener('click', this._openImagePopup);
    }

    createCard () {
        this._newElement = this._template.querySelector('.element').cloneNode(true);
        this._cardPhoto = this._newElement.querySelector('.element__photo');
        this._likeButton = this._newElement.querySelector('.element__like');

        this._cardPhoto.src = this._link;
        this._newElement.querySelector('.element__title').textContent = this._name;
        this._cardPhoto.alt = this._name; 
        
        this._setEventsListeners();
        
        return this._newElement;
    }
}