function Menu(myClass, myItems) {
    Container.call(this);

    this.class = myClass;
    this.items = myItems;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.render = function () {
    var mainMenu = '<ul class="' + this.class +'">';

    for (var i = 0; i < this.items.length; i++) {
        if (this.items[i] instanceof MenuItem) {
            mainMenu += this.items[i].render();
        }

        if (this.items[i] instanceof SubMenu) {
            mainMenu += '<li>' + this.items[i].render() + '</li>';
        }

    }
    mainMenu += '</ul>';

    this.htmlCode = mainMenu;
    return mainMenu;
};


