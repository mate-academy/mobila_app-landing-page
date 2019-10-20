'use strict';

/* конфигурация */
const width = 260; // ширина картинки
const count = 3; // видимое количество изображений
const slider = document.getElementById('carousel');

const list = slider.querySelector('ul');
const listElems = slider.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

slider.querySelector('.prev').onclick = function() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

slider.querySelector('.next').onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
