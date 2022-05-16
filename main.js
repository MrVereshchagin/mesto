(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._settings=t,this._inputList=this._form.querySelectorAll(this._settings.inputSelector),this._submitButton=this._form.querySelector(this._settings.submitButtonSelector)}var n,r;return n=e,(r=[{key:"checkButtonValidity",value:function(){this._form.checkValidity()?(this._submitButton.removeAttribute("disabled"),this._submitButton.classList.remove(this._settings.inactiveButtonClass)):(this._submitButton.setAttribute("disabled",""),this._submitButton.classList.add(this._settings.inactiveButtonClass))}},{key:"_showInputError",value:function(e){this._form.querySelector("#error-".concat(e.id)).textContent=e.validationMessage,e.classList.add(this._settings.inputErrorClass)}},{key:"_hideInputError",value:function(e){this._form.querySelector("#error-".concat(e.id)).textContent="",e.classList.remove(this._settings.inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListener",value:function(){var e=this;this.checkButtonValidity(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.checkButtonValidity()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListener()}},{key:"resetForm",value:function(){var e=this;this._form.reset(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n,r,i,a){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_clearLike",(function(){c._likeButton.classList.remove("element__like_active")})),o(this,"deleteCard",(function(){c._newElement.remove()})),o(this,"_setEventsListeners",(function(){c._deleteButton=c._newElement.querySelector(".element__trash"),c._likeButton.addEventListener("click",(function(){return c.handleLikeClick(c._id)})),c._deleteButton.addEventListener("click",(function(){return c._handleDeleteClick(c._id)})),c._cardPhoto.addEventListener("click",c._handleImageClick)})),o(this,"createCard",(function(){return c._newElement=c._template.querySelector(".element").cloneNode(!0),c._cardPhoto=c._newElement.querySelector(".element__photo"),c._likeButton=c._newElement.querySelector(".element__like"),c._cardPhoto.src=c._link,c._newElement.querySelector(".element__title").textContent=c._name,c._cardPhoto.alt=c._name,c._setEventsListeners(),c.setLikes(c._likes),c._ownerId!==c._userId&&(c._deleteButton.style.display="none"),c._newElement})),this._template=document.querySelector(n).content,this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t.id,this._userId=t.userId,this._ownerId=t.ownerId,this._handleImageClick=r,this._handleDeleteClick=i,this.handleLikeClick=a}var t,n;return t=e,(n=[{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._likeCountElement=this._newElement.querySelector(".element__like-count"),this._likeCountElement.textContent=this._likes.length,this.isLiked()?this._fillLike():this._clearLike()}},{key:"_fillLike",value:function(){this._likeButton.classList.add("element__like_active")}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._items=r,this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton=this._popup.querySelector(".popup__close"),this._popup.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target===e._closeButton)&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function y(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(){return f(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"open",value:function(e,t){var n=this._popup.querySelector(".popup__image_item"),r=this._popup.querySelector(".popup__image_caption");n.src=t,r.textContent=e,n.alt=e,h(m(a.prototype),"open",this).call(this)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function j(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e,t=function(e){if(Array.isArray(e))return k(e)}(e=this._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n={};return t.forEach((function(e){n[e.name]=e.value})),n}},{key:"changeSubmitHandler",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;g(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"setButtonText",value:function(e){this._submitButton&&(this._submitButton.textContent=e)}},{key:"close",value:function(){g(L(a.prototype),"close",this).call(this),this._form.reset()}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.profileNameSelector,r=t.profileNicknameSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._nicknameElement=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,nickname:this._nicknameElement.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._nameElement.textContent=e,this._nicknameElement.textContent=t,void 0!==n&&(this._avatar.src=n)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B,q=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-40",headers:{authorization:"af34ff13-a7dd-4760-9d1d-9898ab2d36c3","Content-Type":"application/json"}}),T=new C({profileNameSelector:".profile__name",profileNicknameSelector:".profile__nickname",profileAvatarSelector:".profile__avatar"}),x=document.querySelector(".elements"),U=document.querySelector(".profile__edit-button"),R=document.querySelector(".popup__form_profile"),A=R.querySelector(".popup__input_profile_name"),V=R.querySelector(".popup__input_profile_nickname"),D=document.querySelector(".profile__avatar"),N=document.querySelector(".profile__button"),H=document.querySelector(".popup__form_card"),J=new n(e,R),F=new n(e,H),M=new c({items:[],renderer:function(e){var t=W({name:e.name,link:e.link,likes:e.likes});x.append(t)}},".elements"),z=new v(".popup_image"),$=new O(".popup_profile",(function(e){$.setButtonText("Сохранение...");var t=e.profilename,n=e.profilenickname;q.editProfile(t,n).then((function(){T.setUserInfo(t,n),$.close()})).catch((function(e){console.log(e)})).finally((function(e){$.setButtonText("Сохранить")}))})),G=new O(".popup_cards",(function(e){G.setButtonText("Сохранение..."),q.addCard(e.cardtitle,e.cardlink).then((function(e){var t=W({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:B,ownerId:e.owner._id});M.addItem(t),G.close()})).catch((function(e){console.log(e)})).finally((function(e){G.setButtonText("Создать")}))})),K=new O(".popup_delete-confirm"),Q=new O(".popup_avatar",(function(e){Q.setButtonText("Сохранение..."),q.updateAvatar(e.avatarlink).then((function(e){T.setUserInfo(e.name,e.about,e.avatar),Q.close()})).catch((function(e){console.log(e)})).finally((function(e){Q.setButtonText("Да")}))}));function W(e){var t=new i(e,"#template",(function(){z.open(e.name,e.link)}),(function(e){K.open(),K.changeSubmitHandler((function(){q.deleteCard(e).then((function(e){t.deleteCard(),K.close()}))}))}),(function(e){t.isLiked()?q.deleteLike(e).then((function(e){t.setLikes(e.likes)})):q.addLike(e).then((function(e){t.setLikes(e.likes)}))}));return t.createCard()}U.addEventListener("click",(function(e){var t=T.getUserInfo(),n=t.name,r=t.nickname;A.value=n,V.value=r,$.open()})),N.addEventListener("click",(function(){F.resetForm(),F.checkButtonValidity(),G.open()})),D.addEventListener("click",(function(e){Q.open()})),J.enableValidation(),F.enableValidation(),z.setEventListeners(),$.setEventListeners(),G.setEventListeners(),K.setEventListeners(),Q.setEventListeners(),q.getProfile().then((function(e){T.setUserInfo(e.name,e.about),B=e._id})),q.getInitialCards().then((function(e){e.forEach((function(e){var t=W({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:B,ownerId:e.owner._id});M.addItem(t)}))})),M.renderItems()})();