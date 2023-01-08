var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var l={id:t,exports:{}};return e[t]=l,i.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},t.parcelRequired7c6=i);var l=i("2shzp"),a=i("b5rV1");const s={watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),galleryLibrary:document.querySelector(".gallery-library")};s.watchedBtn.addEventListener("click",r);let o,c=[];async function r(){c=[],console.log("click"),s.watchedBtn.classList.add("btn-active"),s.queueBtn.classList.remove("btn-active");try{const t=(0,a.loadFromLocalStorage)(a.WATCHED_FILM);console.log(t);for(let e=0;e<t.length;e++){o=t[e];const n=await d(t);c.push(n),console.log(c)}if(t&&Object.keys(t).length){u();const t=p(c);s.galleryLibrary.insertAdjacentHTML("beforeend",t)}else{u();const t=m();s.galleryLibrary.insertAdjacentHTML("beforeend",t)}}catch(t){console.log(t.message)}}async function d(t){try{const e=await l.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`);return await e.data}catch(t){console.log(t.message)}}function m(){return'\n  <li class="container-nothing">\n      <div class="container-nothing__content">\n        <h2 class="container-nothing__title">Your library is empty!</h2>\n        <p class="container-nothing__text">\n          <a\n            title="Link to main page"\n            class="container-nothing__link"\n            href="/src/index.html"\n            >GO TO</a\n          >\n          movie selection.\n        </p>\n      </div>\n    </li>\n    '}function u(){s.galleryLibrary.innerHTML=""}function p(t=[]){return t.map((t=>{const{id:e,title:n,poster_path:i,genres:l,release_date:a}=t,s=l.map((t=>t.name)).reduce(((t,e,n,i)=>i.length>2?`${i[0]}, ${i[1]}, Others`:i.join(", ")),"");return`<li class="home-card__link" id=${e}>\n\t\t</div class = "home-card__thumb">\n\t\t<picture class="home-card__poster">\n\t\t\t\t  <source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${i}">\n\t\t\t\t  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${i}">\n\t\t\t\t  <img class="home-card__img" src="https://image.tmdb.org/t/p/w300${i}" alt="${n}" loading="lazy">\n\t\t\t  </picture>\n\n\t\t  <h2 class='card__title'>${n}</h2>\n\t\t  <p class='card__text' id=${e}>${s||"---"} | ${new Date(a).getFullYear()} </p>\n\t\t</div>\n\t\t  </li>`})).join("")}a=i("b5rV1");const _={watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),galleryLibrary:document.querySelector(".gallery-library")};_.queueBtn.addEventListener("click",(async function(){f=[],console.log("click"),_.watchedBtn.classList.remove("btn-active"),_.queueBtn.classList.add("btn-active"),u();try{const t=(0,a.loadFromLocalStorage)(a.QUEUED_FILM);for(let e=0;e<t.length;e++){g=t[e];const n=await d(g);f.push(n),console.log(f)}if(t&&Object.keys(t).length){u();const t=p(f);_.galleryLibrary.insertAdjacentHTML("beforeend",t)}else{u();const t='\n  <li class="container-nothing">\n      <div class="container-nothing__content">\n        <h2 class="container-nothing__title">Your library is empty!</h2>\n        <p class="container-nothing__text">\n          <a\n            title="Link to main page"\n            class="container-nothing__link"\n            href="/src/index.html"\n            >GO TO</a\n          >\n          movie selection.\n        </p>\n      </div>\n    </li>\n    ';_.galleryLibrary.insertAdjacentHTML("beforeend",t)}}catch(t){console.log(t.message)}}));let g,f=[];l=i("2shzp");var h=i("iQIUW");i("5sxXJ"),i("dCvm9");var b=i("04jNI"),y=i("7rYDH"),v=i("4WdgQ");const w=document.getElementById("foo"),L={modalFilmBackdrop:document.querySelector("[data-modal-film]"),modalFilm:document.querySelector(".modal-film"),cardFilmLibrary:document.querySelector(".container-library")};function k(t){L.modalFilmBackdrop.classList.remove("is-hidden"),L.modalFilm.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("click",q),window.addEventListener("keydown",x);const e=t.target.closest(".home-card__link");!async function(t){try{b.spinner.spin(w);const e=await async function(t){try{const e=await l.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`);return await e.data}catch(t){console.log(t.message)}}(t);L.modalFilm.innerHTML="",function(t){const e=E(t);L.modalFilm.insertAdjacentHTML("beforeend",e)}(e)}catch(t){console.log(t.message),$(),h.Notify.failure("Sorry, movie not found. Please try again.")}finally{b.spinner.stop()}}(e.id);(new(0,y.default)).fetchMoviesTrailers(e.id).then((t=>{if(console.log(t),0===t.results.length)return;document.querySelector(".modal-film-card-wrapper").remove();const e=(0,v.markupMovieTrailer)(t.results[0].key);L.modalFilm.insertAdjacentHTML("afterbegin",e)})).catch((t=>console.log(t)))}function $(){window.removeEventListener("keydown",x),document.removeEventListener("click",q),L.modalFilmBackdrop.classList.add("is-hidden"),L.modalFilm.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function q(t){(t.target.classList.contains("close-modal__btn-text")||t.target.classList.contains("close-modal__btn-inner")||t.target.classList.contains("close-modal__btn-text"))&&$()}function x(t){"Escape"===t.code&&$()}L.cardFilmLibrary.addEventListener("click",k),L.cardFilmLibrary.addEventListener("click",k),L.modalFilmBackdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&$()}));const E=({id:t,title:e,original_title:n,overview:i,poster_path:l,vote_average:a,vote_count:s,popularity:o,genres:c})=>`\n    <button\n        type="button"\n        class="modal-film__close-button close-modal__btn"\n      >\n      <div class="close-modal__btn-inner">\n      <span class="close-modal__btn-text">Back\n      </span> </div>\n      </button>\n    <div class="modal-film__card"  id="${t}">\n    <div class="modal-film-card-wrapper">\n    <picture class="modal-film__img>\n    <source media="(min-width:1024px)" srcset="https://image.tmdb.org/t/p/w500${l}">\n    <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${l}">\n    <img class="img-film__poster" src="https://image.tmdb.org/t/p/w300${l}"  "alt="${e}" loading="lazy"  >\n  </picture>\n  </div>\n  <div class="movie-info">\n    <h2 class="film-title">${e}</h2>\n    <ul class="film-title__list-film">\n    <li class="film-title__item-film"><p class="film-title__value" >Vote / Votes </p><p class="film-title__desc-film"><span class="film-title__vote_average">${a}</span><span class="film-title__slash">/</span><span class="film-title__vote_count">${s}</span> </p> </li>\n    <li class="film-title__item-film"><p class="film-title__value">Popularity</p><p class="film-title__desc-film">${o}</p></li>\n    <li class="film-title__item-film"><p class="film-title__value">Original Title</p><p class="film-title__desc-film">${n}</p></li>\n    <li class="film-title__item-film"><p class="film-title__value">Genre</p><p class="film-title__desc-film">${c.map((t=>t.name)).join(", ")}</p></li>\n    </ul>\n    <h3 class="about-title">About ${n}</h3>\n    <p class="text-about-movie">${i}</p>\n    \n    <ul class="modal-window_list-btn">\n    <li class="modal-window_list-item-btn"><button class="modal-window__watched-btn js-add-watched" type="button" data-id=${t}>add to Watched</button></li>\n    <li class="modal-window_list-item-btn"><button class="modal-window__queued-btn js-add-queue" type="button" data-id=${t}>Add to queue</button></li>\n  </ul>\n    </div>\n  `;i("biHlP"),i("dCvm9");b=i("04jNI");i("h53OD").btnUp.addEventListener(),r();const F=document.getElementById("foo");b.spinner.spin(F),window.addEventListener("load",(function(t){b.spinner.stop()}));
//# sourceMappingURL=my-library.8af56f8a.js.map
