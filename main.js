(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=new(function(){function t(e){var n=e.baseUrl,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._headers=r,this._baseUrl=n}var n,r;return n=t,(r=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-40",headers:{authorization:"af34ff13-a7dd-4760-9d1d-9898ab2d36c3","Content-Type":"application/json"}}),n={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error"};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._settings=t,this._inputList=this._form.querySelectorAll(this._settings.inputSelector),this._submitButton=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"checkButtonValidity",value:function(){this._form.checkValidity()?(this._submitButton.removeAttribute("disabled"),this._submitButton.classList.remove(this._settings.inactiveButtonClass)):(this._submitButton.setAttribute("disabled",""),this._submitButton.classList.add(this._settings.inactiveButtonClass))}},{key:"_showInputError",value:function(e){this._form.querySelector("#error-".concat(e.id)).textContent=e.validationMessage,e.classList.add(this._settings.inputErrorClass)}},{key:"_hideInputError",value:function(e){this._form.querySelector("#error-".concat(e.id)).textContent="",e.classList.remove(this._settings.inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListener",value:function(){var e=this;this.checkButtonValidity(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.checkButtonValidity()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListener()}},{key:"resetForm",value:function(){var e=this;this._form.reset(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=a((function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_likeCard",(function(){o._likeButton.classList.toggle("element__like_active")})),c(this,"_deleteCard",(function(){o._newElement.remove()})),c(this,"_setEventsListeners",(function(){o._deleteButton=o._newElement.querySelector(".element__trash"),o._likeButton.addEventListener("click",o._likeCard),o._deleteButton.addEventListener("click",o._deleteCard),o._cardPhoto.addEventListener("click",o._handleImageClick)})),c(this,"_setLikes",(function(){o._newElement.querySelector(".element__like-count").textContent=o._likes.length})),c(this,"createCard",(function(){return o._newElement=o._template.querySelector(".element").cloneNode(!0),o._cardPhoto=o._newElement.querySelector(".element__photo"),o._likeButton=o._newElement.querySelector(".element__like"),o._cardPhoto.src=o._link,o._newElement.querySelector(".element__title").textContent=o._name,o._cardPhoto.alt=o._name,o._setLikes(),o._setEventsListeners(),o._newElement})),this._template=document.querySelector(n).content,this._name=t.name,this._link=t.link,this._likes=t.likes,this._handleImageClick=r}));function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._items=r,this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton=this._popup.querySelector(".popup__close"),this._popup.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target===e._closeButton)&&e.close()}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(){return d(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"open",value:function(e,t){var n=this._popup.querySelector(".popup__image_item"),r=this._popup.querySelector(".popup__image_caption");n.src=t,r.textContent=e,n.alt=e,m(k(a.prototype),"open",this).call(this)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function C(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e,t=function(e){if(Array.isArray(e))return E(e)}(e=this._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n={};return t.forEach((function(e){n[e.name]=e.value})),n}},{key:"setEventListeners",value:function(){var e=this;j(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){j(L(a.prototype),"close",this).call(this),this._form.reset()}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){var n=t.profileNameSelector,r=t.profileNicknameSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._nicknameElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,nickname:this._nicknameElement.textContent}}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._nicknameElement.textContent=t}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.getProfile().then((function(e){G.setUserInfo(e.name,e.about)})),t.getInitialCards().then((function(e){e.forEach((function(e){var t=F({name:e.name,link:e.link,likes:e.likes});J.addItem(t)}))}));var x=document.querySelector(".elements"),R=document.querySelector(".profile__edit-button"),T=document.querySelector(".popup__form_profile"),U=T.querySelector(".popup__input_profile_name"),A=T.querySelector(".popup__input_profile_nickname"),V=document.querySelector(".profile__button"),N=document.querySelector(".popup__form_card"),D=new o(n,T),z=new o(n,N);function F(e){return new u(e,"#template",(function(){M.open(e.name,e.link)})).createCard()}D.enableValidation(),z.enableValidation(),R.addEventListener("click",(function(e){var t=G.getUserInfo(),n=t.name,r=t.nickname;U.value=n,A.value=r,H.open()})),V.addEventListener("click",(function(){z.resetForm(),z.checkButtonValidity(),$.open()}));var J=new l({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=F({name:e.name,link:e.link});x.append(t)}},".elements"),M=new g(".popup_image"),H=new q(".popup_profile",(function(e){var n=e.profilename,r=e.profilenickname;t.editProfile(n,r).then((function(){console.log(n,r),G.setUserInfo(n,r),H.close()}))})),$=new q(".popup_cards",(function(e){t.addCard(e.cardtitle,e.cardlink).then((function(e){var t=F({name:e.name,link:e.link,likes:e.likes});J.addItem(t),$.close()}))}));M.setEventListeners(),H.setEventListeners(),$.setEventListeners(),J.renderItems();var G=new B({profileNameSelector:".profile__name",profileNicknameSelector:".profile__nickname"})})();