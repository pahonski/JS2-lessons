function MenuItem(href, title) {
    this.href = href;
    this.title = title;
}

function SubMenuItem(href, title) {
    this.href = href;
    this.title = title;
}

MenuItem.prototype.render = function () {
    return '<li><a href="' + this.href + '">' + this.title + '</a></li>';
};

SubMenuItem.prototype.render = function () {
    return '<li><a href="' + this.href + '">' + this.title + '</a></li>';
};