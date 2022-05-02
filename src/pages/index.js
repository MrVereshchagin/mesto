import CloseIcon from '../images/CloseIcon.svg';
import dombai from '../images/dombai.jpg';
import dombai1 from '../images/dombai1.jpg';
import EditButton from '../images/EditButton.svg';
import elbrus from '../images/elbrus.jpg';
import elbrus1 from '../images/elbrus1.jpg';
import heart from '../images/heart.svg';
import image from '../images/image.jpg';
import karachaevo_cherkessia from '../images/karachaevo_cherkessia.jpg';
import karachaevsk from '../images/karachaevsk.jpg';
import logo from '../images/logo.svg';
import Trash from '../images/Trash.svg';
import Union from '../images/Union.svg';
import Vector from '../images/Vector.svg';

const imagesFromImageFolder = [
    { name: 'CloseIcon', image: CloseIcon },
    { name: 'dombai', image: dombai },
    { name: 'dombai1', image: dombai1 },
    { name: 'EditButton', image: EditButton },
    { name: 'elbrus', image: elbrus },
    { name: 'elbrus1', image: elbrus1 },
    { name: 'heart', image: heart },
    { name: 'image', image: image },
    { name: 'karachaevo_cherkessia', image: karachaevo_cherkessia },
    { name: 'karachaevsk', image: karachaevsk },
    { name: 'logo', image: logo },
    { name: 'Trash', image: Trash },
    { name: 'Union', image: Union },
    { name: 'Vector', image: Vector }
]

import '../pages/index.css';
import { initialCards, validationConfig } from '../utils/utils.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

const sectionElements = document.querySelector('.elements');

const buttonProfileEditOpen = document.querySelector('.profile__edit-button');

const formProfileEdit = document.querySelector('.popup__form_profile');
const nameInput = formProfileEdit.querySelector('.popup__input_profile_name');
const nicknameInput = formProfileEdit.querySelector('.popup__input_profile_nickname');

const buttonAddCardOpen = document.querySelector('.profile__button');
const formAddCard = document.querySelector('.popup__form_card');

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