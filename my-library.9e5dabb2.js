var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequired7c6;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,a.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){n[t]=e},t.parcelRequired7c6=a);var i=a("2shzp"),l=a("b5rV1");const o={watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),galleryLibrary:document.querySelector(".gallery-library")};o.watchedBtn.addEventListener("click",r);let s,c=[];async function r(){c=[],console.log("click"),o.watchedBtn.classList.add("btn-active"),o.queueBtn.classList.remove("btn-active");try{const t=(0,l.loadFromLocalStorage)(l.WATCHED_FILM);console.log(t);for(let e=0;e<t.length;e++){s=t[e];const n=await d(t);c.push(n),console.log(c)}if(t&&Object.keys(t).length){u();const t=p(c);o.galleryLibrary.insertAdjacentHTML("beforeend",t)}else{u();const t=m();o.galleryLibrary.insertAdjacentHTML("beforeend",t)}}catch(t){console.log(t.message)}}async function d(t){try{const e=await i.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`);return await e.data}catch(t){console.log(t.message)}}function m(){return'\n  <li class="container-nothing">\n      <div class="container-nothing__content">\n        <h2 class="container-nothing__title">Your library is empty!</h2>\n        <p class="container-nothing__text">\n          <a\n            title="Link to main page"\n            class="container-nothing__link"\n            href="/src/index.html"\n            >GO TO</a\n          >\n          movie selection.\n        </p>\n      </div>\n    </li>\n    '}function u(){o.galleryLibrary.innerHTML=""}function p(t=[]){return t.map((t=>{const{id:e,title:n,poster_path:a,genres:i,release_date:l}=t,o=i.map((t=>t.name)).reduce(((t,e,n,a)=>a.length>2?`${a[0]}, ${a[1]}, Others`:a.join(", ")),"");return`<li class="home-card__link" id=${e}>\n\t\t</div class = "home-card__thumb">\n\t\t<picture class="home-card__poster">\n\t\t\t\t  <source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${a}">\n\t\t\t\t  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${a}">\n\t\t\t\t  <img class="home-card__img" src="https://image.tmdb.org/t/p/w300${a}" alt="${n}" loading="lazy">\n\t\t\t  </picture>\n\n\t\t  <h2 class='card__title'>${n}</h2>\n\t\t  <p class='card__text' id=${e}>${o||"---"} | ${new Date(l).getFullYear()} </p>\n\t\t</div>\n\t\t  </li>`})).join("")}l=a("b5rV1");const _={watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),galleryLibrary:document.querySelector(".gallery-library")};_.queueBtn.addEventListener("click",(async function(){f=[],console.log("click"),_.watchedBtn.classList.remove("btn-active"),_.queueBtn.classList.add("btn-active"),u();try{const t=(0,l.loadFromLocalStorage)(l.QUEUED_FILM);for(let e=0;e<t.length;e++){g=t[e];const n=await d(g);f.push(n),console.log(f)}if(t&&Object.keys(t).length){u();const t=p(f);_.galleryLibrary.insertAdjacentHTML("beforeend",t)}else{u();const t='\n  <li class="container-nothing">\n      <div class="container-nothing__content">\n        <h2 class="container-nothing__title">Your library is empty!</h2>\n        <p class="container-nothing__text">\n          <a\n            title="Link to main page"\n            class="container-nothing__link"\n            href="/src/index.html"\n            >GO TO</a\n          >\n          movie selection.\n        </p>\n      </div>\n    </li>\n    ';_.galleryLibrary.insertAdjacentHTML("beforeend",t)}}catch(t){console.log(t.message)}}));let g,f=[];i=a("2shzp");var h=a("iQIUW");a("5sxXJ"),a("dCvm9");var b=a("04jNI"),v=a("7rYDH"),y=a("4WdgQ");l=a("b5rV1");const L=document.getElementById("foo"),w={modalFilmBackdrop:document.querySelector("[data-modal-film]"),modalFilm:document.querySelector(".modal-film"),cardFilmLibrary:document.querySelector(".container-library")};function E(t){w.modalFilmBackdrop.classList.remove("is-hidden"),w.modalFilm.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("click",F),window.addEventListener("keydown",M);const e=t.target.closest(".home-card__link");!async function(t){try{b.spinner.spin(L);const e=await async function(t){try{const e=await i.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`);return await e.data}catch(t){console.log(t.message)}}(t);w.modalFilm.innerHTML="",function(t){const e=T(t);w.modalFilm.insertAdjacentHTML("beforeend",e)}(e)}catch(t){console.log(t.message),$(),h.Notify.failure("Sorry, movie not found. Please try again.")}finally{b.spinner.stop()}}(e.id),w.modalFilmBackdrop.classList.contains("is-hidden")||w.modalFilm.addEventListener("click",k);(new(0,v.default)).fetchMoviesTrailers(e.id).then((t=>{if(console.log(t),0===t.results.length)return;document.querySelector(".modal-film-card-wrapper").remove();const e=(0,y.markupMovieTrailer)(t.results[0].key);w.modalFilm.insertAdjacentHTML("afterbegin",e)})).catch((t=>console.log(t)))}function k(t){const e=t.target,n=Number(t.target.dataset.id);t.target.classList.contains("js-add-watched")?(0,l.checkLocalStorageMovies)(e,n,l.WATCHED_FILM):t.target.classList.contains("js-add-queue")&&(0,l.checkLocalStorageMovies)(e,n,l.QUEUED_FILM)}function $(){window.removeEventListener("keydown",M),document.removeEventListener("click",F),w.modalFilmBackdrop.classList.add("is-hidden"),w.modalFilm.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function F(t){(t.target.classList.contains("close-modal__btn-text")||t.target.classList.contains("close-modal__btn-inner")||t.target.classList.contains("close-modal__btn-text"))&&$()}function M(t){"Escape"===t.code&&$()}w.cardFilmLibrary.addEventListener("click",E),w.cardFilmLibrary.addEventListener("click",E),w.modalFilmBackdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&$()}));const T=({id:t,title:e,original_title:n,overview:a,poster_path:i,vote_average:o,vote_count:s,popularity:c,genres:r})=>{const d=r.map((t=>t.name)).join(", "),m=(0,l.loadFromLocalStorage)(l.WATCHED_FILM),u=(0,l.loadFromLocalStorage)(l.QUEUED_FILM);let p="ADD TO WATCHED",_="ADD TO QUEUE";return m.includes(t)&&(p="REMOVE FROM WATCHED"),u.includes(t)&&(_="REMOVE FROM QUEUE"),`\n    <button\n        type="button"\n        class="modal-film__close-button close-modal__btn"\n      >\n      <div class="close-modal__btn-inner">\n      <span class="close-modal__btn-text">Back\n      </span> </div>\n      </button>\n    <div class="modal-film__card"  id="${t}">\n    <div class="modal-film-card-wrapper">\n    <picture class="modal-film__img>\n    <source media="(min-width:1024px)" srcset="https://image.tmdb.org/t/p/w500${i}">\n    <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${i}">\n    <img class="img-film__poster" src="https://image.tmdb.org/t/p/w300${i}"  "alt="${e}" loading="lazy"  >\n  </picture>\n  </div>\n  <div class="movie-info">\n    <h2 class="film-title">${e}</h2>\n    <ul class="film-title__list-film">\n    <li class="film-title__item-film"><p class="film-title__value" >Vote / Votes </p><p class="film-title__desc-film"><span class="film-title__vote_average">${o}</span><span class="film-title__slash">/</span><span class="film-title__vote_count">${s}</span> </p> </li>\n    <li class="film-title__item-film"><p class="film-title__value">Popularity</p><p class="film-title__desc-film">${c}</p></li>\n    <li class="film-title__item-film"><p class="film-title__value">Original Title</p><p class="film-title__desc-film">${n}</p></li>\n    <li class="film-title__item-film"><p class="film-title__value">Genre</p><p class="film-title__desc-film">${d}</p></li>\n    </ul>\n    <h3 class="about-title">About ${n}</h3>\n    <p class="text-about-movie">${a}</p>\n    \n     <ul class="modal-window_list-btn">\n      <li class="modal-window_list-item-btn "><button aria-label="add or remove from watched" class="modal-active modal-window__watched-btn js-add-watched" type="button" data-id=${t}>${p}</button></li>\n      <li class="modal-window_list-item-btn "><button aria-label="add or remove from queue" class="modal-active modal-window__queued-btn js-add-queue" type="button" data-id=${t}>${_}</button></li>\n    </ul>\n    </div>\n  `};a("biHlP"),a("gyeM6"),a("dCvm9");b=a("04jNI");a("h53OD").btnUp.addEventListener(),r();const q=document.getElementById("foo");b.spinner.spin(q),window.addEventListener("load",(function(t){b.spinner.stop()}));
//# sourceMappingURL=my-library.9e5dabb2.js.map
