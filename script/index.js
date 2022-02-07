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

// Выбираем секцию elements в которой отрисовывем изначальные карточки из массива, выбираем template для картинок, которые будет отрисовывать по контенту, содержащемуся в нем.
const sectionElements = document.querySelector('.elements');
const template = document.querySelector('#template').content;

// Создаем функцию для отрисовки карточек с вызовом функции по клонированию template с заполнением соответствующих полей и фото и заголовка, полученных из массива, вызываем функцию render
function render(cards) {
    cards.forEach(renderCards);
}

function renderCards(item) {
    const newElement = template.cloneNode(true);
    newElement.querySelector('.element__photo').src = item.link;
    newElement.querySelector('.element__title').textContent = item.name;
    newElement.querySelector('.element__like').addEventListener('click', likeFunction);

    sectionElements.prepend(newElement);
}

render(initialCards);

// Создаем переменные для узлов кнопки редактирования профиля, блока попапа, в томч числе кнопки закрытия
const editProfileButton = document.querySelector('.profile__edit-button');
const popupSection = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');

// Создаем переменные для формы попапа, input-ов внутри формы, в которые вводятся измененные данные профиля, а также полей профиля которые будут отрисованы нами при загрузке страницы по умолчанию
const formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let nicknameInput = formElement.querySelector('.popup__input_type_nickname');
let profielName = document.querySelector('.profile__name');
let profileNickname = document.querySelector('.profile__nickname');

// Создаем функцию для открытия окна popup, а также присваиваем полям попапа изначальные значения, полученные из полей профайла, по умолчанию при первой загрузке
function openPopupWindow() {
    popupSection.classList.add('popup_opened');
    nameInput.value = profielName.textContent;
    nicknameInput.value = profileNickname.textContent;
}

// Прописываем функцию закрытия попапа при клике на крестик
function closePopupWindow() {
    popupSection.classList.remove('popup_opened');
}

// Вешаем обработчики событий на кнопку редактирования профиля и на крестик закртия попапа
editProfileButton.addEventListener('click', openPopupWindow);
popupCloseButton.addEventListener('click', closePopupWindow);


// Пишем функцию для вставки в поля профайла данных из интпутов попапа, введенные пользователем
function formSubmitHandler(event) {
    event.preventDefault();
    profielName.textContent = nameInput.value;
    profileNickname.textContent = nicknameInput.value;
    closePopupWindow();
}

// Вешаем обработчик событий на форму попапа, при нажатии кнопки сохранения
formElement.addEventListener('submit', formSubmitHandler);


// Создаем переменные в котрых храним поля нового попапа, кнопку профайла для добавления карточек
const cardPopupSection = document.querySelector('.popup__cards');
const addCard = document.querySelector('.profile__button');
const popupCardCloseButton = document.querySelector('.popup__close_card');
let cardInput = document.querySelector('.popup__input_card_title');
let cardImage = document.querySelector('.popup__input_card_link');
const formCardElement = document.querySelector('.popup__form_card');

// Создаем функции открытия и закрытия попапа с карточками
function openPopupCardWindow() {
  cardPopupSection.classList.add('popup_opened');
}

function closePopupCardWindow() {
  cardPopupSection.classList.remove('popup_opened');
}

// Вешаем обработчики на кнопки попапа с карточками
addCard.addEventListener('click', openPopupCardWindow);
popupCardCloseButton.addEventListener('click', closePopupCardWindow);

// Создаем функцию добавления новой карточки при нажатии кнопки в попапе с карточками
function cardSubmitHandler(event) {
  event.preventDefault();
  const newCard = 
    {
      name: cardInput.value,
      link: cardImage.value
    };
  renderCards(newCard);
  closePopupCardWindow();
}

// Вешаем обработчик событий на форму попапа с карточками
formCardElement.addEventListener('submit', cardSubmitHandler);

const likeButtons = document.querySelectorAll('.element__like');

// Создаем функцию для лайков

function likeFunction(e) {
  e.preventDefault();
  e.target.classList.toggle('element__like_non_active');
  e.target.classList.toggle('element__like_active');
}






