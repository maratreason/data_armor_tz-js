class Circle {
    constructor(tagName = "div", color, className) {
        this.tagName = tagName;
        this.color = color;
        this.className = className;
        this.circle = null;
    }

    create() {
        this.circle = document.createElement(this.tagName);
        this.circle.classList.add(this.className);
        this.circle.style.background = this.color;
        return this.circle;
    }
}
