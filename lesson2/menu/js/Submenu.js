function SubMenu(myClass, myItems) {

    this.class = myClass;
    this.items = myItems;
}

SubMenu.prototype = Object.create(Menu.prototype);
SubMenu.prototype.constructor = SubMenu;

/*
SubMenu.prototype.render = function () {
    var subMenu = '<ul class="' + this.subClass +'">';
    for (var i = 0; i < this.subItems.length; i++) {
        subMenu += this.subItems[i].render();
    }
    subMenu += '</ul>';
    return subMenu;
};


*/
