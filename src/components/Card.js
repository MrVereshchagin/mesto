export class Card {
    constructor(data, cardTemplateSelector, handleImageClick, handleDeleteClick) {
        this._template = document.querySelector(cardTemplateSelector).content;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data.id;

        this._handleImageClick = handleImageClick;
        this._handleDeleteClick = handleDeleteClick;
    }

    _likeCard = () => {
        this._likeButton.classList.toggle('element__like_active');
    }

    deleteCard = () => {
        this._newElement.remove();
    }


    _setEventsListeners = () => {
        this._deleteButton = this._newElement.querySelector('.element__trash');
        
        this._likeButton.addEventListener('click', this._likeCard);
        this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
        this._cardPhoto.addEventListener('click', this._handleImageClick);
    }

    _setLikes = () => {
        this._likeCountElement = this._newElement.querySelector('.element__like-count');
        this._likeCountElement.textContent = this._likes.length;
    }

    createCard = () => {
        this._newElement = this._template.querySelector('.element').cloneNode(true);
        this._cardPhoto = this._newElement.querySelector('.element__photo');
        this._likeButton = this._newElement.querySelector('.element__like');

        this._cardPhoto.src = this._link;
        this._newElement.querySelector('.element__title').textContent = this._name;
        this._cardPhoto.alt = this._name; 

        this._setEventsListeners();
        this._setLikes();

        return this._newElement; 
    }
}