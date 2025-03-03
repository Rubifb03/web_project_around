export default class UserInfo {
  constructor({ nameElement, jobElement, avatarElement }) {
    this._nameElement = document.querySelector(nameElement);
    this._jobElement = document.querySelector(jobElement);
    this._avatarElement = document.querySelector(avatarElement);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
      avatar: this._avatarElement.src,
    };
  }

  setUserInfo({ name, job }) {
    if (name) {
      this._nameElement.textContent = name;
    }
    if (job) {
      this._jobElement.textContent = job;
    }
  }

  setUserAvatar(newUrlAvatar) {
    this._avatarElement.src = newUrlAvatar;
  }
}
