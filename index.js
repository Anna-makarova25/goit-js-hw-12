import{a as q,S as B,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function p(s,a=1){const o="53335895-4d104a908de65f21952c0d536",r="https://pixabay.com/api/",e={key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15};return(await q.get(r,{params:e})).data}const f=document.querySelector(".js-btn"),h=document.querySelector(".gallery"),y=document.querySelector(".loader");let P=new B(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(s){const a=s.map(({webformatURL:o,largeImageURL:r,tags:e,likes:t,views:n,comments:S,downloads:w})=>`
        <li class="gallery-item">
          <a href="${r}">
            <img src="${o}" alt="${e}"/>
          </a>
          <ul class="stats">
  <li class="stats-item">
    <span class="stats-label">Likes</span>
    <span class="stats-value">${t}</span>
  </li>
  <li class="stats-item">
    <span class="stats-label">Views</span>
    <span class="stats-value">${n}</span>
  </li>
  <li class="stats-item">
    <span class="stats-label">Comments</span>
    <span class="stats-value">${S}</span>
  </li>
  <li class="stats-item">
    <span class="stats-label">Downloads</span>
    <span class="stats-value">${w}</span>
  </li>
</ul>
</li>
    `).join("");h.insertAdjacentHTML("beforeend",a),P.refresh()}function E(){h.innerHTML=""}function L(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}function u(){f.classList.remove("hidden")}function d(){f.classList.add("hidden")}const M=document.querySelector(".form"),$=document.querySelector(".js-btn"),m=15;let v,c,i;M.addEventListener("submit",async s=>{s.preventDefault(),c=new FormData(s.target).get("search-text").trim(),L(),E(),d(),i=1;try{const o=await p(c,i),{hits:r}=o;if(v=Math.ceil(o.totalHits/m),r.length===0){l.error({message:"No images found. Try another query.",position:"topRight"});return}g(r),o.totalHits>m&&u()}catch{l.error({message:"Request failed",position:"topRight"})}finally{b(),s.target.reset()}});$.addEventListener("click",async()=>{i+=1,d(),L();const s=await p(c,i);g(s.hits),b(),u(),D(),I()});function D(){const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}function I(){i<v?u():(d(),l.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"}))}
//# sourceMappingURL=index.js.map
