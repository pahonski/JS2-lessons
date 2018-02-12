function Container() {
    this.htmlCode = '';   
    // this.render = function () {
    //     return this.htmlCode;
    // };
}

Container.prototype.render = function () {
  return this.htmlCode;
};

Container.prototype.remove = function () {
   document.querySelector('#menu1').remove(); //Метод удаляет меню
};



