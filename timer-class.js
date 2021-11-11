class Timer {

    constructor(id) {
        this._element = document.getElementById(id);
    }

    get element() {
        return this._element;
    }

    set element(id) {
        this._element = document.getElementById(id);
    }
}