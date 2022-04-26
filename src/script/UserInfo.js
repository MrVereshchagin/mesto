export class UserInfo {
    constructor({profileNameSelector, profileNicknameSelector}) {
        this._nameElement = document.querySelector(profileNameSelector);
        this._nicknameElement = document.querySelector(profileNicknameSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            nickname: this._nicknameElement.textContent
        }
    }

    setUserInfo(name, nickname) {
        this._nameElement.textContent = name;
        this._nicknameElement.textContent = nickname;
    }
}