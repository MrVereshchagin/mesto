export class UserInfo {
    constructor({profileNameSelector, profileNicknameSelector, profileAvatarSelector}) {
        this._nameElement = document.querySelector(profileNameSelector);
        this._nicknameElement = document.querySelector(profileNicknameSelector);
        this._avatar = document.querySelector(profileAvatarSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            nickname: this._nicknameElement.textContent,
        }
    }

    setUserInfo(name, nickname, avatar) {
        this._nameElement.textContent = name;
        this._nicknameElement.textContent = nickname;
        if(avatar !== undefined) {
            this._avatar.src = avatar;
        }
    }
}