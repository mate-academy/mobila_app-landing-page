'use strict';

/* configuration */
const width = 260; // img width
const count = 3; // visible images
const slider = document.getElementById('carousel');

const list = slider.querySelector('ul');
const listElems = slider.querySelectorAll('li');

let position = 0; // start point

slider.querySelector('.prev').onclick = function() {
  // align left
  position += width * count;
  // last img move could be on 1,2,3.. element
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

slider.querySelector('.next').onclick = function() {
  // align ightr
  position -= width * count;
  //  last img move could be on 1,2,3.. element
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
