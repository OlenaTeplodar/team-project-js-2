!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var i=a("dIxxU");const l="https://api.themoviedb.org/3",s="9fae0fdf266213c68361ca578a95b948";class o{async fetchPopularMovies(){try{const e=await i.default.get(`${l}/trending/all/day?api_key=${s}&language=${this.language}&page=${this.page}`);return await e.data}catch(e){}}async fetchSearchMovies(){try{const e=await i.default.get(`${l}/search/movie?api_key=${s}&language=${this.language}&page=${this.page}&query=${this.searchQuery}&include_adult=false`);return await e.data}catch(e){}}async fetchIdMovies(e){try{const t=await i.default.get(`${l}/movie/${e}?api_key=${s}&language=${this.language}`);return await t.data}catch(e){}}async fetchGenresMovies(){try{const e=await i.default.get(`${l}/genre/movie/list?api_key=${s}&language=${this.language}`);return await e.data}catch(e){}}async fetchMoviesTrailers(e){try{const t=await i.default.get(`${l}/movie/${e}/videos?api_key=${s}&language=${this.language}&page=${this.page}`);return await t.data}catch(e){}}incrementPage(){return this.page+=1}decrementPage(){if(1!==this.page)return this.page-=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get pageNum(){return this.page}set pageNum(e){this.page=e}constructor(){this.searchQuery="",this.page=1,this.language="en-US"}}const c={cardList:document.querySelector(".cards__list")};function r(e){c.cardList.insertAdjacentHTML("beforeend",function(e=[]){return e.map((e=>{const{id:t,title:n,poster_path:a,genre_ids:i,release_date:l}=e;return`<li class="home-card__link" id=${t}>\n\t\t  <div class = "home-card__thumb">\n\t\t  <picture class="home-card__poster">\n\t\t\t\t\t<source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${a}">\n\t\t\t\t\t<source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${a}">\n\t\t\t\t\t<img class="home-card__img" src="https://image.tmdb.org/t/p/w300${a}" alt="${n}" loading="lazy">\n\t\t\t\t</picture>\n\t\t\t</div>\n\t\t\t<div class="card__content">\n\t\t\t<h2 class="card__title">${n}</h2>\n\t\t\t<p class="card__text">${function(e){if(localStorage.key===u)return m=load(u);let t=e.map((e=>m[e]));return t.length>2?`${t[0]}, ${t[1]}, Other`:t.join(", ")}(i)} | ${new Date(l).getFullYear()}</p>\n\t  </div>\n\t\t\t</li>`})).join("")}(e))}function d(){c.cardList.innerHTML=""}const u="genreList";let m={};const p=new o;!async function(){try{const e=(await p.fetchPopularMovies()).results;let t=Math.ceil(e.length/10),n=[];for(let e=1;e<=t;e++){let a=document.createElement("li");if(1==e){let e=document.createElement("li");e.innerHTML="<li>&#8592;</li>",f.appendChild(e)}if(t<=5&&(a.innerHTML=e,f.appendChild(a),n.push(a)),t>5){if(a.innerHTML=e,f.appendChild(a),n.push(a),1==e){let e=document.createElement("li");e.innerHTML="...",f.appendChild(e)}if(t-1==e){let e=document.createElement("li");e.innerHTML="...",f.appendChild(e)}}if(e==t){let e=document.createElement("li");e.innerHTML="<li>&#8594;</li>",f.appendChild(e)}}let a=function(){let t;return function(n){t&&t.classList.remove("active"),t=n,n.classList.add("active");let a=10*(+n.innerHTML-1),i=a+10;r(e.slice(a,i))}}();a(n[0]);for(let e of n)e.addEventListener("click",(function(){d(),a(this)}))}catch(e){console.log(e)}}();let f=document.querySelector("#pagination");a("6pumv");i=a("dIxxU");var g=a("h6c0i");a("vUagc");const h={modalFilmBackdrop:document.querySelector("[data-modal-film]"),modalFilm:document.querySelector(".modal-film"),div:document.querySelector(".modal-film "),cardFilm:document.querySelector(".cards__list"),cardFilmLibrary:document.querySelector(".container-library")};function _(){window.removeEventListener("keydown",y),document.removeEventListener("click",v),h.modalFilmBackdrop.classList.add("is-hidden"),h.div.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function v(e){(e.target.classList.contains("close-modal__btn-text")||e.target.classList.contains("close-modal__btn-inner")||e.target.classList.contains("close-modal__btn-text"))&&_()}function y(e){"Escape"===e.code&&_()}async function w(e){try{const t=await i.default.get(`https://api.themoviedb.org/3/movie/${e}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`);return await t.data}catch(e){console.log(e.message)}}function b(e){const t=$(e);!function(e){S.push(e)}(e),function(e){M.push(e)}(e),h.modalFilm.insertAdjacentHTML("beforeend",t);document.querySelector(".modal-window__watched-btn").addEventListener("click",k);document.querySelector(".modal-window__queued-btn").addEventListener("click",q)}h.cardFilm.addEventListener("click",(function(e){h.modalFilmBackdrop.classList.remove("is-hidden"),h.div.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("click",v),window.addEventListener("keydown",y);const t=e.target.closest(".home-card__link").id;console.log(t),async function(e){try{const t=await w(e);h.modalFilm.innerHTML="",b(t)}catch(e){console.log(e.message),_(),g.Notify.failure("Sorry, movie not found. Please try again.")}}(t),w(t).then((e=>(h.modalFilm.innerHTML="",b(e))));(new o).fetchMoviesTrailers(t).then((e=>{if(console.log(e),0===e.results.length)return;document.querySelector(".modal-film-card-wrapper").remove();const t=`\n    <iframe id="trailer" class="player" width="420" height="315" allowfullscreen="allowfullscreen"\n    src="https://www.youtube.com/embed/${e.results[0].key}"\n    frameborder="0"></iframe>\n  `;h.modalFilm.insertAdjacentHTML("afterbegin",t)})).catch((e=>console.log(e)))})),h.modalFilmBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&_()}));const $=({id:e,title:t,original_title:n,overview:a,poster_path:i,vote_average:l,vote_count:s,popularity:o,genres:c})=>`\n  <button\n      type="button"\n      class="modal-film__close-button close-modal__btn"\n    >\n    <div class="close-modal__btn-inner">\n    <span class="close-modal__btn-text">Back\n    </span> </div>\n    </button>\n  <div class="modal-film__card"  id="${e}">\n  <div class="modal-film-card-wrapper">\n  <picture class="modal-film__img>\n  <source media="(min-width:1024px)" srcset="https://image.tmdb.org/t/p/w500${i}">\n  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${i}">\n  <img class="img-film__poster" src="https://image.tmdb.org/t/p/w300${i}"  "alt="${t}" loading="lazy"  >\n</picture>\n</div>\n<div class="movie-info">\n  <h2 class="film-title">${t}</h2>\n  <ul class="film-title__list-film">\n  <li class="film-title__item-film"><p class="film-title__value" >Vote / Votes </p><p class="film-title__desc-film"><span class="film-title__vote_average">${l}</span><span class="film-title__slash">/</span><span class="film-title__vote_count">${s}</span> </p> </li>\n  <li class="film-title__item-film"><p class="film-title__value">Popularity</p><p class="film-title__desc-film">${o}</p></li>\n  <li class="film-title__item-film"><p class="film-title__value">Original Title</p><p class="film-title__desc-film">${n}</p></li>\n  <li class="film-title__item-film"><p class="film-title__value">Genre</p><p class="film-title__desc-film">${c.map((e=>e.name)).join(", ")}</p></li>\n  </ul>\n  <h3 class="about-title">About ${n}</h3>\n  <p class="text-about-movie">${a}</p>\n  <ul>\n      <li><button class="modal-window__watched-btn" type="button" data-id=${e}>Add</button></li>\n      <li><button class="modal-window__queued-btn" type="button" data-id=${e}>Add to queue</button></li>\n    </ul>\n  </div>\n`,L=localStorage.getItem("WATCHED-FILM"),S=JSON.parse(L)||[],E=localStorage.getItem("QUEUED-FILM"),M=JSON.parse(E)||[];function k(e){const t=e.target.dataset.id;console.log(t);return S.includes(t)?void 0:void localStorage.setItem("WATCHED-FILM",JSON.stringify(S))}function q(e){const t=e.target.dataset.id;console.log(t);return M.includes(t)?void 0:void localStorage.setItem("QUEUED-FILM",JSON.stringify(M))}var T=a("j1lrD");const x={cardList:document.querySelector(".gallery__list"),formSearch:document.querySelector(".header__form"),notification:document.querySelector(".header__notification")},F=document.getElementById("foo"),H=new o;function I(){x.notification.textContent="Search result not successful. Enter the correct movie name and try again."}x.formSearch.addEventListener("submit",(function(e){if(e.preventDefault(),x.notification.textContent="",H.query=e.currentTarget.elements.searchQuery.value.trim().toLowerCase(),""===H.query)return I();!async function(){try{T.spinner.spin(F);const e=await H.fetchSearchMovies(),t=e.results;if(console.log(t),r(t),console.log(e),d(),r(t),0===e.total_results)return void I();I()}catch(e){I()}finally{T.spinner.stop()}}()})),a("ghI91").btnUp.addEventListener()}();
//# sourceMappingURL=index.9a24b945.js.map
