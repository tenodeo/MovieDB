const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll(".promo__adv"),
      poster = document.querySelector(".promo__bg"),
      genre = document.querySelector(".promo__genre"),
      movieList  = document.querySelector(".promo__interactive-list"),
      textArea = document.querySelector('.form'),
      input = document.querySelector('.adding__input'),
      checkbox = document.querySelector('[type="checkbox"]'),
      addForm = document.querySelector('form.add'),
      delbtns = document.querySelectorAll('.delete');

addForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    let newFilm = input.value;

    if(newFilm.length > 21){
        newFilm = `${newFilm.substring(0,22)}...`;
    }
    if(newFilm){
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        
        createMovieList(movieDB.movies, movieList);
        if(checkbox.checked) console.log("Добавляем любимый фильм");
    }

    event.target.reset();
});

function createMovieList(films, parent){
    sortArr(films);
    parent.innerHTML = '';
    films.forEach((film, i)=>{
       parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                 <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i)=>{
        btn.addEventListener('click', ()=>{
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(films, parent);
        });
    });

    
}

const sortArr = (arr)=>{
    arr.sort();
};
const makeChanges = ()=>{
    genre.textContent = 'Драма';
    poster.style.backgroundImage = `url(img/bg.jpg)`;
};
const deleteAdv = (adv)=>{
    adv.forEach(item => {
        item.remove();
    });
};

deleteAdv(adv);
makeChanges();
createMovieList(movieDB.movies, movieList);