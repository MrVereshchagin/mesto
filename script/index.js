const editProfileButton = document.querySelector('.profile__edit-button');
const popupSection = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');

function openPopupWindow() {
    popupSection.classList.add('popup_opened');
}

function closePopupWindow() {
    popupSection.classList.remove('popup_opened');
}

editProfileButton.addEventListener('click', openPopupWindow);
popupCloseButton.addEventListener('click', closePopupWindow);

const formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__name');
let nicknameInput = formElement.querySelector('.popup__nickname');
let profielName = document.querySelector('.profile__name');
let profileNickname = document.querySelector('.profile__nickname');

function formSubmitHandler(event) {
    event.preventDefault();
    profielName.textContent = nameInput.value;
    profileNickname.textContent = nicknameInput.value;
    closePopupWindow();
}

formElement.addEventListener('submit', formSubmitHandler);