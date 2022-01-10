/*Была интересная идея по запуску программы с кнопки (пуск секундомера и стоп), отсчитывать время с секундомера в переменную.
И далее переменную использовать в расчетах.
Но...
- не смог на onklick повесить несколько событий
- и из счетчика достать время в переменную
*/

function on() {
  console.log('Лампочка выключена');
  
}
elem2.addEventListener("click", off);

function off() {
  document.querySelectorAll('.agut').forEach(function(el) {   // скрыть агутина
    el.style.display = 'none';
 });

  let Calc = function cal() { // калькулятор электроэнергии
    this.get = function () {
      this.a = prompt('Введите мощность лампочки, Ватт '); //мощность лампочки
      this.b = prompt('Введите стоимость электроэнергии, руб. за 1 кв/ч \n На 01.01.2022 составляет = 0,1778 руб.'); //стоимость электроинергии кв. /ч
      this.с = prompt('Введите время работы лампочки, в часах '); //мощность лампочки
      this.operation();
    };
    this.operation = function () {
      this.d = (this.a / 1000); // перевод ватт в кв/ч 
      this.e = this.d / 3600; // расход кв за 1 час
      this.f = this.d * this.e; //
      this.result = this.f * this.с;
      this.show();
    };
    this.show = function () {
      alert(('Ваш расход электроэнергии за введенное время работы составляет:    ') + (((parseInt(this.result / 60) * 100)) / 100) + 'бел.р.');
    };
  };
  let calc = new Calc();
  calc.get();

  function Econom() {      // Экономте свет
    alert('Да выключите свет. Берегите электроэнергию!');
  }
  setTimeout(Econom, 2500);
  //////////////////////////////
  console.log('Лампочка включена');
}
elem.addEventListener("click", on);
