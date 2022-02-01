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
const element = document.querySelector('.element');
const template = document.querySelector('#template').content;

function render(cards) {
    cards.forEach(renderCards);
}

function renderCards(item) {
    const newElement = template.cloneNode(true);
    newElement.querySelector('.element__photo').src = item.link;
    newElement.querySelector('.element__title').textContent = item.name;
    sectionElements.append(newElement);
}

render(initialCards);

const editProfileButton = document.querySelector('.profile__edit-button');
const popupSection = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');

const formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let nicknameInput = formElement.querySelector('.popup__input_type_nickname');
let profielName = document.querySelector('.profile__name');
let profileNickname = document.querySelector('.profile__nickname');

function openPopupWindow() {
    popupSection.classList.add('popup_opened');
    nameInput.value = profielName.textContent;
    nicknameInput.value = profileNickname.textContent;
}

function closePopupWindow() {
    popupSection.classList.remove('popup_opened');
}

editProfileButton.addEventListener('click', openPopupWindow);
popupCloseButton.addEventListener('click', closePopupWindow);

function formSubmitHandler(event) {
    event.preventDefault();
    profielName.textContent = nameInput.value;
    profileNickname.textContent = nicknameInput.value;
    closePopupWindow();
}

formElement.addEventListener('submit', formSubmitHandler);

