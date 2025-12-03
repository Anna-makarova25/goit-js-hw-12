import{a as w,S as P,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function p(t,a=1){const o="https://pixabay.com/api/",e={key:void 0,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15};return(await w.get(o,{params:e})).data}const m=document.querySelector(".js-btn"),f=document.querySelector(".gallery"),h=document.querySelector(".loader");let B=new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(t){const a=t.map(({webformatURL:r,largeImageURL:o,tags:e,likes:s,views:i,comments:S,downloads:q})=>`
        <li class="gallery-item">
          <a href="${o}">
            <img src="${r}" alt="${e}"/>
          </a>
          <ul class="stats">
  <li class="stats-item">
    <span class="stats-label">Likes</span>
    <span class="stats-value">${s}</span>
  </li>
  <li class="stats-item">
    <span class="stats-label">Views</span>
    <span class="stats-value">${i}</span>
  </li>
  <li class="stats-item">
    <span class="stats-label">Comments</span>
    <span class="stats-value">${S}</span>
  </li>
  <li class="stats-item">
    <span class="stats-label">Downloads</span>
    <span class="stats-value">${q}</span>
  </li>
</ul>
</li>
    `).join("");f.insertAdjacentHTML("beforeend",a),B.refresh()}function E(){f.innerHTML=""}function y(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}function b(){m.classList.remove("hidden")}function u(){m.classList.add("hidden")}const M=document.querySelector(".form"),R=document.querySelector(".js-btn"),$=15;let d,c="",n=0;M.addEventListener("submit",async t=>{if(t.preventDefault(),c=new FormData(t.target).get("search-text").trim(),c===""){l.error({message:"Please enter a search query",position:"topRight"});return}y(),E(),u(),n=1;try{const r=await p(c,n),{hits:o}=r;if(d=Math.ceil(r.totalHits/$),o.length===0){l.error({message:"No images found. Try another query.",position:"topRight"});return}g(o),v()}catch{l.error({message:"Request failed",position:"topRight"})}finally{L(),t.target.reset()}});R.addEventListener("click",async()=>{n+=1,u(),y();try{const t=await p(c,n);g(t.hits),v(),D()}catch{l.error({message:"Failed to load more images. Please try again.",position:"topRight"}),n<d&&b()}finally{L()}});function D(){const t=document.querySelector(".gallery-item");if(!t)return;const a=t.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}function v(){n<d?b():(u(),l.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"}))}
//# sourceMappingURL=index.js.map
