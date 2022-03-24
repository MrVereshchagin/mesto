export const imagePopup = document.querySelector('.popup_image');
export const imagePopupItem = document.querySelector('.popup__image_item');
export const imagePopupCaption = document.querySelector('.popup__image_caption');

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.addEventListener('click', closePopupWithClickOnOverlay);
    document.addEventListener('keydown', closeByEscape);
}

export function closePopupWithClickOnOverlay(popup) {
  if(popup.target === popup.currentTarget) {
    closePopup(popup.target);
  }
}

export function closeByEscape(event) {
    if(event.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.removeEventListener('click', closePopupWithClickOnOverlay);
    document.removeEventListener('keydown', closeByEscape);
}
  


  