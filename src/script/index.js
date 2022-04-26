import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const sectionElements = document.querySelector('.elements');

const buttonProfileEditOpen = document.querySelector('.profile__edit-button');

const formProfileEdit = document.querySelector('.popup__form_profile');
const nameInput = formProfileEdit.querySelector('.popup__input_profile_name');
const nicknameInput = formProfileEdit.querySelector('.popup__input_profile_nickname');

const buttonAddCardOpen = document.querySelector('.profile__button');
const formAddCard = document.querySelector('.popup__form_card');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error' 
}; 

const editProfileValidator = new FormValidator(validationConfig, formProfileEdit);
const addCardValidator = new FormValidator(validationConfig, formAddCard);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

function render(card) {
    const newData = {
      name: card.name,
      link: card.link
    }

    const cardElement = createCard(newData);
    sectionElements.append(cardElement);
}

function openPopupProfile(popup) {
  const { name, nickname } = userInfo.getUserInfo();
  nameInput.value = name;
  nicknameInput.value = nickname;
  
  editProfilePopup.open();
}

buttonProfileEditOpen.addEventListener('click', openPopupProfile);

function handleProfileFormSubmit(data) {
  const { profilename, profilenickname } = data; 

  userInfo.setUserInfo(profilename, profilenickname);
  editProfilePopup.close();
}

function openPopupCardWindow() {
  addCardValidator.resetForm();
  addCardValidator.checkButtonValidity();
  
  addCardPopup.open();
}

buttonAddCardOpen.addEventListener('click', openPopupCardWindow);

function createCard (data) {
  const myCard = new Card(data, '#template', () => {
    imagePopup.open(data.name, data.link);
  });
  const cardElement = myCard.createCard();
  
  return cardElement;
}

function handleCardSubmit(data) {
  const cardElement = createCard({
    name: data['cardtitle'],
    link: data['cardlink']
  });
  section.addItem(cardElement);
  formAddCard.reset();
 
  addCardPopup.close();
}

const section = new Section({ items: initialCards, renderer: render }, '.elements');
const imagePopup = new PopupWithImage('.popup_image');
const editProfilePopup = new PopupWithForm('.popup_profile', handleProfileFormSubmit);
const addCardPopup = new PopupWithForm('.popup_cards', handleCardSubmit);

imagePopup.setEventListeners();
editProfilePopup.setEventListeners(); 
addCardPopup.setEventListeners();

section.renderItems();

const userInfo = new UserInfo({profileNameSelector: '.profile__name', profileNicknameSelector: '.profile__nickname'});