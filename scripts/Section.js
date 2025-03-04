export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  addItem(cardElement) {
    this._container.append(cardElement);
  }

  renderItems(cards) {
    cards.forEach((item) => this._renderer(item));
  }
}
