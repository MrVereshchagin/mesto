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