export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._items = items;
        this._renderer = renderer;
    }

    renderItems(items, userId){ 
        items.forEach(item => {
          this._renderer(item, userId);
        });
    };

    addItem(element) {
        this._container.prepend(element);
    }
}