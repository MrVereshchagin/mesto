export class Card {
    constructor(data, cardTemplateSelector, handleImageClick, handleDeleteClick, handleLikeClick) {
        this._template = document.querySelector(cardTemplateSelector).content;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data.id;
        this._userId = data.userId;
        this._ownerId = data.ownerId;


        this._handleImageClick = handleImageClick;
        this._handleDeleteClick = handleDeleteClick;
        this.handleLikeClick = handleLikeClick;
    }

    _clearLike = () => {
        this._likeButton.classList.remove('element__like_active');
    }

    isLiked() {
        const userHasLikedCard = this._likes.find(user => user._id === this._userId);
        return userHasLikedCard;
    }

    deleteCard = () => {
        this._newElement.remove();
    }

    _setEventsListeners = () => {
        this._deleteButton = this._newElement.querySelector('.element__trash');
        
        this._likeButton.addEventListener('click', () => this.handleLikeClick(this._id));
        this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
        this._cardPhoto.addEventListener('click', this._handleImageClick);
    }

    setLikes (newLikes) {
        this._likes = newLikes;
        this._likeCountElement = this._newElement.querySelector('.element__like-count');
        this._likeCountElement.textContent = this._likes.length;

        
        if(this.isLiked()) {
            this._fillLike();
        } else {
            this._clearLike();
        }
    }

    _fillLike() {
        this._likeButton.classList.add('element__like_active');
    }

    createCard = () => {
        this._newElement = this._template.querySelector('.element').cloneNode(true);
        this._cardPhoto = this._newElement.querySelector('.element__photo');
        this._likeButton = this._newElement.querySelector('.element__like');

        this._cardPhoto.src = this._link;
        this._newElement.querySelector('.element__title').textContent = this._name;
        this._cardPhoto.alt = this._name; 

        this._setEventsListeners();
        this.setLikes(this._likes);

        if(this._ownerId !== this._userId) {
            this._deleteButton.style.display = 'none';
        }

        return this._newElement; 
    }
}