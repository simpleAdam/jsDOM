class StyledComponent {
  constructor() {
    this.el;
  }
  init(tag) {
    this.create(tag);
    return this;
  }
  initWith(modifier) {
    this.create(modifier.tag);
    this.css(modifier.styles);
    this.attr(modifier.attr);
    return this;
  }
  create(tag) {
    this.el = document.createElement(tag);
    return this;
  }
  attr(obj) {
    for (let key in obj) {
      this.el.setAttribute(key, obj[key]);
    }
    return this;
  }
  css(styles) {
    for (let key in styles) {
      this.el.style[key] = styles[key];
    }
    return this;
  }
  text(message) {
    if (!this.textNode) {
      this.textNode = document.createTextNode("message");
      this.append(this.textNode);
    }
    if (message) {
      this.textNode.textContent = message;
    }
    return this;
  }
  append(chld) {
    this.el.appendChild(chld);
    return this;
  }
}

module.exports=StyledComponent