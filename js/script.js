'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ad = document.querySelectorAll(".promo__adv"),
      poster = document.querySelector(".promo__bg"),
      genre = document.querySelector(".promo__genre"),
      list = document.querySelector(".promo__interactive-list");


ad.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';
poster.style.backgroundImage = `url(img/bg.jpg)`;

movieDB.movies.sort();
list.innerHTML = "";

movieDB.movies.forEach((item,i) => {
    list.innerHTML += `
       <li class="promo__interactive-item">${i+1} ${item}
            <div class="delete"></div>
        </li>
    `;
});
