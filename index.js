import{S as c,i as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m="46110623-cffeede45492ee1adb33fe3c4";function g(s){const o=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}?${o}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()})}function d(s){return s.reduce((o,r)=>o+`<article class="gallery-item">
                <a href="${r.largeImageURL}" class="gallery-link">
                    <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-image" />
                </a>
                <ul class="info">
                    <li class="info-item"><strong>Likes:</strong> ${r.likes}</li>
                    <li class="info-item"><strong>Views:</strong> ${r.views}</li>
                    <li class="info-item"><strong>Comments:</strong> ${r.comments}</li>
                    <li class="info-item"><strong>Downloads:</strong> ${r.downloads}</li>
                </ul>
            </article>`,"")}const h=document.querySelector(".search-form"),l=document.querySelector(".gallery");let a=null;h.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.query.value.trim();o&&(l.innerHTML="",g(o).then(r=>{const{hits:n}=r;if(n.length===0)throw new Error("No images found for this search query.");const e=d(n);l.innerHTML=e,a?a.refresh():a=new c(".gallery a",{captions:!0,captionDelay:250})}).catch(r=>{u.error({title:"Error",message:r.message})}))});
//# sourceMappingURL=index.js.map
