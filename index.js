import{S as n,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();const l="https://pixabay.com/api/",f="46110623-cffeede45492ee1adb33fe3c4";function u(o){const t=new URLSearchParams(o);return console.log("fetchImages urlParams:",t.toString()),fetch(`${l}?key=${f}&${t}`).then(s=>{if(!s.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.json()})}const m={key:"46110623-cffeede45492ee1adb33fe3c4",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true"},g=document.querySelector(".gallery");u(m).then(o=>{const{hits:t}=o,s=t.reduce((r,e)=>r+`<article class="gallery-item">
                <a href="${e.largeImageURL}" class="gallery-link">
                 <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image" />
                 </a>
                 <div class="info">
                <p class="info-item">Likes: ${e.likes}</p>
                <p class="info-item">Views: ${e.views}</p>
                <p class="info-item">Comments: ${e.comments}</p>
                <p class="info-item">Downloads: ${e.downloads}</p>
                </div>
            </article>`,"");g.innerHTML=s;const a=new n(".gallery a",{captions:!0,captionDelay:250});console.log(a)}).catch(o=>{c.error({title:"Sorry, there are no images matching your search query. Please try again!",message:o.message})});
//# sourceMappingURL=index.js.map
