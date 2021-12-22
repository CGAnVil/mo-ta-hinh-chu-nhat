class Rectangle {
    _long;
    _short;

    constructor(long, short) {
        this._short = short
        this._long = long
    }

    get long() {
        return this._long
    }

    get short() {
        return this._short
    }

    set long(long) {
        this._long = long
    }

    set short(short) {
        this._short = short
    }

    get square() {
        return (this._short + this._long) * 2
    }

    get area() {
        return this._long * this._short
    }
}

function drawRectangle() {
    let ctx = document.getElementById('myCanvas').getContext('2d')
    let rectangle = new Rectangle()
    rectangle.long = parseInt(prompt('Nhập chiều dài:'))
    rectangle.short = parseInt(prompt('Nhập chiều rộng'))
    ctx.strokeRect(0, 0, rectangle.long, rectangle.short)
    console.log(rectangle.area)
    console.log(rectangle.square)
}

