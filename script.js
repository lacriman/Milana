const countText = document.getElementById('countText');
const countLable = document.getElementById('countLable');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const heart = document.getElementById('heart')
let count = 11;


decreaseBtn.onclick = function () {
   if (count <= 1) {
      countText.innerText = 'не правда';
   } else {
      count--;
      countLable.innerText = count;
   }

   if (count >= 1 && count <= 11) {
      countText.style.display = 'block';
   }
   if (count < 12) {
      countText.style.display = 'block';
      heart.style.display = 'none';
   }
}

resetBtn.onclick = function () {
   count = 11;
   countLable.innerHTML = count;
}

increaseBtn.onclick = function () {
   count++;
   countLable.innerHTML = count;
   if (count > 1) {
      countText.innerText = 'на сколько милана красивая от 1 до 10';
   }

   if (count >= 2 && count <= 11) {
      countText.style.display = 'block';
   }
   if (count >= 12) {
      countText.style.display = 'none';
      heart.style.display = 'block';
   }
}
