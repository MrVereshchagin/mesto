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
import avatar from '../images/avatar_svg.svg';

import '../pages/index.css';
import { validationConfig } from '../utils/utils.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api.js';

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
  { name: 'Vector', image: Vector },
  { name: 'avatar_svg', image: avatar }
]

const userInfo = new UserInfo({profileNameSelector: '.profile__name', profileNicknameSelector: '.profile__nickname', profileAvatarSelector: '.profile__avatar'});

const sectionElements = document.querySelector('.elements');

const buttonProfileEditOpen = document.querySelector('.profile__edit-button');

const formProfileEdit = document.querySelector('.popup__form_profile');
const nameInput = formProfileEdit.querySelector('.popup__input_profile_name');
const nicknameInput = formProfileEdit.querySelector('.popup__input_profile_nickname');
const avatarEditButton = document.querySelector('.profile__avatar_edit-button');
const formAvatarEdit = document.querySelector('.popup__form_avatar')
// 
const buttonAddCardOpen = document.querySelector('.profile__button');
const formAddCard = document.querySelector('.popup__form_card');

const editProfileValidator = new FormValidator(validationConfig, formProfileEdit);
const addCardValidator = new FormValidator(validationConfig, formAddCard);

const section = new Section({ items: [], renderer: render }, '.elements');
const imagePopup = new PopupWithImage('.popup_image');
const editProfilePopup = new PopupWithForm('.popup_profile', handleProfileFormSubmit);
const addCardPopup = new PopupWithForm('.popup_cards', handleCardSubmit);
const confirmPopup = new PopupWithForm('.popup_delete-confirm');
const avatarPopup = new PopupWithForm('.popup_avatar', handleAvatarSubmit);
const editAvatarValidator = new FormValidator(validationConfig, formAvatarEdit);

let userId;

function render(card) {
    const newData = {
      name: card.name,
      link: card.link,
      likes: card.likes,
      id: card._id,
      userId: userId,
      ownerId: card.owner._id
    }

    const cardElement = createCard(newData);
    sectionElements.append(cardElement);
}

function createCard (data) {
  const myCard = new Card(
    data,
    '#template',
    () => {
      imagePopup.open(data.name, data.link);
    },
    (id) => {
      confirmPopup.open();
      confirmPopup.changeSubmitHandler(() => {
        api.deleteCard(id)
        .then((res) => {
          myCard.deleteCard();
          confirmPopup.close();
        })
        .catch((err) => {
          console.log(err)
        })
      })
    },
    (id) => {
      if(myCard.isLiked()) {
        api.deleteLike(id)
          .then((res) => {
          myCard.setLikes(res.likes);
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        api.addLike(id)
          .then((res) => {
            myCard.setLikes(res.likes);
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  );

  const cardElement = myCard.createCard();  
  return cardElement;
}

function openPopupProfile(popup) {
  const { name, nickname } = userInfo.getUserInfo();
  nameInput.value = name;
  nicknameInput.value = nickname;
  
  editProfilePopup.open();
}

function handleProfileFormSubmit(data) {
  editProfilePopup.setButtonText("Сохранение...");
  const { profilename, profilenickname } = data; 

  api.editProfile(profilename, profilenickname)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about, res.avatar);
      editProfilePopup.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally((res) => {
      editProfilePopup.setButtonText("Сохранить");
    })
}


function handleAvatarSubmit(data) {
  avatarPopup.setButtonText("Сохранение...");
  api.updateAvatar(data.avatarlink)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about, res.avatar);
      avatarPopup.close();
  })
  .catch((err) => {
    console.log(err)
  })
  .finally((res) => {
    avatarPopup.setButtonText("Да");
  })
}

function openPopupAvatar(data) {
  avatarPopup.open();
}

function openPopupCardWindow() {
  addCardValidator.resetForm();
  addCardValidator.checkButtonValidity();
  
  addCardPopup.open();
}

function handleCardSubmit(data) {
  addCardPopup.setButtonText("Сохранение...");
  api.addCard(data['cardtitle'], data['cardlink'])
    .then((res) => {
      const cardElement = createCard({
        name: res.name,
        link: res.link,
        likes: res.likes,
        id: res._id,
        userId: userId,
        ownerId: res.owner._id
      })
      section.addItem(cardElement);
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally((res) => {
      addCardPopup.setButtonText("Создать");
    })
}

buttonProfileEditOpen.addEventListener('click', openPopupProfile);
buttonAddCardOpen.addEventListener('click', openPopupCardWindow);
avatarEditButton.addEventListener('click', openPopupAvatar);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();
editAvatarValidator.enableValidation();

imagePopup.setEventListeners();
editProfilePopup.setEventListeners(); 
addCardPopup.setEventListeners();
confirmPopup.setEventListeners();
avatarPopup.setEventListeners();

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData.name, userData.about, userData.avatar);
    userId = userData._id;
    section.renderItems(cards, userId);
  })
  .catch((err) => {
    console.log('Error', err)
  })

// section.renderItems();















