function Menu(myId, myClass, myItems) {
    Container.call(this);
    this.id = myId;
    this.class = myClass;
    this.items = myItems;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.render = function () {
    var resultconstruct = '<ul  class="' + this.className + '">';
    var result = resultconstruct;
    var stage = false; 
	for (var i = 0; i < this.items.length; i++) {
        //Посмотреть, а Submenu ли это     
        if (this.items[i] instanceof SubMenuItem) {
            if (stage === false) { result += resultconstruct; stage = true; }
            result += this.items[i].render() + '</li>';
			console.log('Экземпляр SubMenuItem');
		}
        if (this.items[i] instanceof MenuItem) {
            if (stage === true) {
                result += '</ul></li>'; stage = false;} 
			if (i) {
                result += '</li>';
            }
            result += this.items[i].render();//render принадлежит пункту меню
			console.log('Экземпляр MenuItem');
        }
    }
    if (stage === true) { result += '</ul>'; stage = false; }
    result += '</li></ul>';
	
	this.htmlCode = result; //Сохраняем HTML-код меню
    return result;
};