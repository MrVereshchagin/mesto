(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._settings=t,this._inputList=this._form.querySelectorAll(this._settings.inputSelector),this._submitButton=this._form.querySelector(this._settings.submitButtonSelector)}var n,r;return n=e,(r=[{key:"checkButtonValidity",value:function(){this._form.checkValidity()?(this._submitButton.removeAttribute("disabled"),this._submitButton.classList.remove(this._settings.inactiveButtonClass)):(this._submitButton.setAttribute("disabled",""),this._submitButton.classList.add(this._settings.inactiveButtonClass))}},{key:"_showInputError",value:function(e){this._form.querySelector("#error-".concat(e.id)).textContent=e.validationMessage,e.classList.add(this._settings.inputErrorClass)}},{key:"_hideInputError",value:function(e){this._form.querySelector("#error-".concat(e.id)).textContent="",e.classList.remove(this._settings.inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListener",value:function(){var e=this;this.checkButtonValidity(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.checkButtonValidity()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListener()}},{key:"resetForm",value:function(){var e=this;this._form.reset(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=o((function e(t,n,r,o){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_likeCard",(function(){c._likeButton.classList.toggle("element__like_active")})),i(this,"_setEventsListeners",(function(){c._deleteButton=c._newElement.querySelector(".element__trash"),c._likeButton.addEventListener("click",c._likeCard),c._deleteButton.addEventListener("click",c._handleDeleteClick),c._cardPhoto.addEventListener("click",c._handleImageClick)})),i(this,"_setLikes",(function(){c._likeCountElement=c._newElement.querySelector(".element__like-count"),c._likeCountElement.textContent=c._likes.length})),i(this,"createCard",(function(){return c._newElement=c._template.querySelector(".element").cloneNode(!0),c._cardPhoto=c._newElement.querySelector(".element__photo"),c._likeButton=c._newElement.querySelector(".element__like"),c._cardPhoto.src=c._link,c._newElement.querySelector(".element__title").textContent=c._name,c._cardPhoto.alt=c._name,c._setEventsListeners(),c._setLikes(),c._newElement})),this._template=document.querySelector(n).content,this._name=t.name,this._link=t.link,this._likes=t.likes,this._handleImageClick=r,this._handleDeleteClick=o}));function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._items=r,this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton=this._popup.querySelector(".popup__close"),this._popup.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target===e._closeButton)&&e.close()}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function c(){return p(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"open",value:function(e,t){var n=this._popup.querySelector(".popup__image_item"),r=this._popup.querySelector(".popup__image_caption");n.src=t,r.textContent=e,n.alt=e,y(b(c.prototype),"open",this).call(this)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(s);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__form"),n}return t=c,(n=[{key:"_getInputValues",value:function(){var e,t=function(e){if(Array.isArray(e))return g(e)}(e=this._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n={};return t.forEach((function(e){n[e.name]=e.value})),n}},{key:"setEventListeners",value:function(){var e=this;E(P(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){E(P(c.prototype),"close",this).call(this),this._form.reset()}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(s);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.profileNameSelector,r=t.profileNicknameSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._nicknameElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,nickname:this._nicknameElement.textContent}}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._nicknameElement.textContent=t}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-40",headers:{authorization:"af34ff13-a7dd-4760-9d1d-9898ab2d36c3","Content-Type":"application/json"}}),R=new q({profileNameSelector:".profile__name",profileNicknameSelector:".profile__nickname"}),T=document.querySelector(".elements"),U=document.querySelector(".profile__edit-button"),x=document.querySelector(".popup__form_profile"),A=x.querySelector(".popup__input_profile_name"),V=x.querySelector(".popup__input_profile_nickname"),D=document.querySelector(".profile__button"),N=document.querySelector(".popup__form_card"),F=new n(e,x),J=new n(e,N),M=new u({items:[],renderer:function(e){var t=K({name:e.name,link:e.link,likes:e.likes});T.append(t)}},".elements"),z=new v(".popup_image"),H=new C(".popup_profile",(function(e){var t=e.profilename,n=e.profilenickname;B.editProfile(t,n).then((function(){R.setUserInfo(t,n),H.close()}))})),$=new C(".popup_cards",(function(e){B.addCard(e.cardtitle,e.cardlink).then((function(e){var t=K({name:e.name,link:e.link,likes:e.likes});M.addItem(t),$.close()}))})),G=new C(".popup_delete-confirm",(function(){B.deleteCard().then((function(e){console.log("res",e)})),console.log("delete")}));function K(e){return new c(e,"#template",(function(){z.open(e.name,e.link)}),(function(){console.log("clicked button"),G.open()})).createCard()}U.addEventListener("click",(function(e){var t=R.getUserInfo(),n=t.name,r=t.nickname;A.value=n,V.value=r,H.open()})),D.addEventListener("click",(function(){J.resetForm(),J.checkButtonValidity(),$.open()})),F.enableValidation(),J.enableValidation(),z.setEventListeners(),H.setEventListeners(),$.setEventListeners(),G.setEventListeners(),B.getProfile().then((function(e){R.setUserInfo(e.name,e.about)})),B.getInitialCards().then((function(e){e.forEach((function(e){var t=K({name:e.name,link:e.link,likes:e.likes});M.addItem(t)}))})),M.renderItems()})();