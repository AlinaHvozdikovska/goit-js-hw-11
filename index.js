import{S as u,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function p(s){const o=new URLSearchParams({key:"48339480-4f5c45a75f87f035650b36ee2",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:200});return fetch(`https://pixabay.com/api/?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const c=document.querySelector(".gallery"),d=new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function m(s){const o=s.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
            />
          </a>
          <div class="stat-container">
            <div>
                <span><b>Likes</b></span>
                <span>${e.likes}</span>
            </div>
            <div>
                <span><b>Views</b></span>
                <span>${e.views}</span>
            </div>
             <div>
                <span><b>Comments</b></span>
                <span>${e.comments}</b></span>
            </div>
             <div>
                <span><b>Downloads</b></span>
                <span>${e.downloads}</span>
            </div>
          </div>
        </li>
    `).join("");c.innerHTML=o,d.refresh()}const l=document.querySelector(".search-form"),f=document.querySelector(".loader");function h(){f.style.display="block"}function g(){f.style.display="none"}l.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="";const o=s.target.elements.search.value.trim().toLowerCase();if(o===""){n.show({message:"Input field can not be empty. Please enter your message.",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight"});return}h(),p(o).then(e=>{e.hits.length===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight"}):m(e.hits)}).catch(e=>n.show({message:`${e}`,messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight"})).finally(()=>g()),l.reset()});
//# sourceMappingURL=index.js.map
