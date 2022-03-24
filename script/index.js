import { FormValidator } from './FormValidator.js';

// Выбираем секцию elements в которой отрисовывем изначальные карточки из массива, выбираем template для картинок, которые будет отрисовывать по контенту, содержащемуся в нем.
const sectionElements = document.querySelector('.elements');
const template = document.querySelector('#template').content;
const popups = document.querySelector('.popup');

// Создаем переменные для узлов кнопки редактирования профиля, блока попапа, в том числе кнопки закрытия
const buttonProfileEditOpen = document.querySelector('.profile__edit-button');
const popupProfileEdit = document.querySelector('.popup_profile');
const buttonProfileClose = document.querySelector('.popup__close_profile');
const buttonProfileSubmit = document.querySelector('.popup__button_edit_profile');

// Создаем переменные для формы попапа, input-ов внутри формы, в которые вводятся измененные данные профиля, а также полей профиля которые будут отрисованы нами при загрузке страницы по умолчанию
const formProfileEdit = document.querySelector('.popup__form_profile');
const nameInput = formProfileEdit.querySelector('.popup__input_profile_name');
const nicknameInput = formProfileEdit.querySelector('.popup__input_profile_nickname');
const profielName = document.querySelector('.profile__name');
const profileNickname = document.querySelector('.profile__nickname');

// Создаем переменные в которых храним поля нового попапа, кнопку профайла для добавления карточек
const popupAddCard = document.querySelector('.popup_cards');
const buttonAddCardOpen = document.querySelector('.profile__button');
const buttonAddCardClose = document.querySelector('.popup__close_card');
const cardInput = document.querySelector('.popup__input_card_title');
const cardImage = document.querySelector('.popup__input_card_link');
const formAddCard = document.querySelector('.popup__form_card');
const buttonAddCardSubmit = document.querySelector('.popup__button_add_card');

// Создаем переменные для открытия и закрытия попапа с картинкой
const imagePopup = document.querySelector('.popup_image');
const imagePopupItem = document.querySelector('.popup__image_item');
const imagePopupCaption = document.querySelector('.popup__image_caption');
const closePopupImageButton = document.querySelector('.popup__close_image');

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


// Создаем функцию для отрисовки карточек с вызовом функции по клонированию template с заполнением соответствующих полей и фото и заголовка, полученных из массива, вызываем функцию render
function render(card) {
  card.forEach((card) => sectionElements.append(createCard(card)));
}

// Создаем функцию подо все последующие манипуляции с карточками
function createCard(item) {
  const newElement = template.cloneNode(true);
  const cardPhoto = newElement.querySelector('.element__photo');
  cardPhoto.src = item.link;
  newElement.querySelector('.element__title').textContent = item.name;
  cardPhoto.alt = item.name;
  newElement.querySelector('.element__like').addEventListener('click', likeFunction);
  newElement.querySelector('.element__trash').addEventListener('click', deleteCard);
  cardPhoto.addEventListener('click', () => openImagePopup(item.name, item.link));
  
  return newElement;
}

render(initialCards);

// Создаем функцию для открытия окна popup, а также присваиваем полям попапа изначальные значения, полученные из полей профайла, по умолчанию при первой загрузке
function openPopupProfile(popup) {
  nameInput.value = profielName.textContent;
  nicknameInput.value = profileNickname.textContent;
  
  openPopup(popupProfileEdit);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupWithClickOnOverlay);
  document.addEventListener('keydown', closeByEscape);
}

// Прописываем функцию закрытия попапа через клик на оверлей
function closeByEscape(event) {
  if(event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Прописываем функцию закрытия попапа при клике на крестик
function closePopupProfile() {
  closePopup(popupProfileEdit);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopupWithClickOnOverlay);
  document.removeEventListener('keydown', closeByEscape);
}

// Вешаем обработчик событий на оверлей для закрытия попапа при клике на затененную область
function closePopupWithClickOnOverlay(popup) {
  if(popup.target === popup.currentTarget) {
    closePopup(popup.target);
  }
}

// Вешаем обработчики событий на кнопку редактирования профиля и на крестик закрытия попапа
buttonProfileEditOpen.addEventListener('click', openPopupProfile);
buttonProfileClose.addEventListener('click', closePopupProfile);

// Пишем функцию для вставки в поля профайла данных из инпутов попапа, введенные пользователем
function handleProfileFormSubmit(event) {
  event.preventDefault();
  profielName.textContent = nameInput.value;
  profileNickname.textContent = nicknameInput.value;
  closePopupProfile();
}

// Вешаем обработчик событий на форму попапа, при нажатии кнопки сохранения
formProfileEdit.addEventListener('submit', handleProfileFormSubmit);

// Создаем функции открытия и закрытия попапа с карточками
function openPopupCardWindow(config) {
  addCardValidator.resetForm();
  addCardValidator.checkButtonValidity();
  openPopup(popupAddCard);
}

function closePopupCardWindow() {
  closePopup(popupAddCard);
}

// Вешаем обработчики на кнопки попапа с карточками
buttonAddCardOpen.addEventListener('click', openPopupCardWindow);
buttonAddCardClose.addEventListener('click', closePopupCardWindow);

// Создаем функцию добавления новой карточки при нажатии кнопки в попапе с карточками
function cardSubmitHandler(event) {
  event.preventDefault();
  const newCard = 
    {
      name: cardInput.value,
      link: cardImage.value
    };
  cardInput.value = '';
  cardImage.value = '';

  sectionElements.prepend(createCard(newCard));
  closePopupCardWindow();
}

// Вешаем обработчик событий на форму попапа с карточками
formAddCard.addEventListener('submit', cardSubmitHandler);

// Создаем функцию для лайков
function likeFunction(e) {
  e.target.classList.toggle('element__like_active');
}

//Создаем функцию для удаления карточек
function deleteCard(e) {
  e.target.closest('.element').remove();
}

// Создаем функцию для открытия попапа с картинкой
function openImagePopup(name, link) {
  openPopup(imagePopup);
  imagePopupItem.src = link;
  imagePopupCaption.textContent = name;
  imagePopupItem.alt = name;
}

// Создаем функцию закрытия попапа с картинкой
function closeImagePopup() {
  closePopup(imagePopup);
}

closePopupImageButton.addEventListener('click', closeImagePopup);
