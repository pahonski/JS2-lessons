function MenuItem(href, value) {
    this.href = href;
    this.value = value;
}

MenuItem.prototype.render = function () {
  return '<li><a href="' + this.href +'">' + this.value +'</a></li>';
};