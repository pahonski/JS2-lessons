function SubMenu(myId, myClass, myItems) {
    Container.call(this);
    this.id = myId;
    this.class = myClass;
    this.items = myItems;
}

SubMenu.prototype = Object.create(Container.prototype);
SubMenu.prototype.constructor = SubMenu;

