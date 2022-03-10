(()=>{"use strict";var t={414:(t,e,n)=>{t.exports=n.p+"assets/heart.1af03272208329adeeaf..svg"}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t=n(414);const e=document.querySelector(".container");function a(n,a){let o="";n.types.forEach((t=>{o+=`${t.type.name} `}));let i=0;a.forEach((t=>{t.item_id===`heart-${n.id}`&&(i=t.likes)})),e.innerHTML+=`\n  <div class="col card-container card-${n.name}">\n    <div class="card h-100">\n      <img src=${n.sprites.other["official-artwork"].front_default} class="card-img-top" alt=${n.name}>\n      <div class="card-body">\n        <div class= "d-flex justify-content-between">\n          <h5 class="card-title d-inline">${n.name}</h5>\n          <div class="d-flex flex-column">\n            <img src="${t}" class="img-fluid d-inline ms-auto heart-${n.id} img-heart" alt="like">\n            <p class="ms-auto heart-${n.id}-likes">${i}</p>\n          </div>\n        </div>\n          <p>This is a description of the pokemon</p>\n          <button type="button" class="btn btn-primary d-block mx-auto mb-2 openComments" data-bs-toggle="modal" data-bs-target="#pokeModal-${n.id}" id="item${n.id}" >Comments</button>\n      </div>\n    </div>\n  </div>\n  <div class="modal fade" id="pokeModal-${n.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\n  \n  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">\n    <div class="modal-content">\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      <div class="modal-body text-center">\n      <img clas="img-fluid" src=${n.sprites.other["official-artwork"].front_default} alt=${n.name}>\n      <h3 class="modal-title" id="exampleModalLabel">${n.name}</h3>\n        <div>\n          <p>Type: <br>${o}</p>\n        </div>\n        <p>Weight: ${n.weight}</p>\n        <p>Height: ${n.height}</p>\n        <div>\n      </div>\n      <div class="displayCommentsSection-item${n.id}">\n      </div>\n      <div>\n        <h5>Add a comment</h5>\n        <input type="text" class="item${n.id}" placeholder="Your name"><br>\n        <textarea class="item${n.id}" name="textarea" rows="5" cols="25" placeholder="Leave your comment"></textarea><br>\n        <button type="button" class="btn btn-primary btn-lg btn-block comment-btn" id="item${n.id}">Comment</button>\n      </div>\n    </div>\n  </div>\n</div>`;Array.from(document.getElementsByClassName("openComments")).forEach((t=>{t.addEventListener("click",(t=>{(async()=>{const e=t.target.id,n=Array.from(await async function(t){const e=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FBTV7LVQNoUbR7Qxl6jA/comments?item_id=${t}`,n=await fetch(e);return await n.json()}(e)),a=n.length;if(0!==a){const t=document.querySelector(`.displayCommentsSection-${e}`);t.innerHTML=`\n          <h5>Comments (${a})</h5> \n        `,n.forEach((e=>{t.innerHTML+=`\n          <p>${e.creation_date} ${e.username} : ${e.comment}</p>\n        `}))}Array.from(document.getElementsByClassName("comment-btn")).forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.id,n=document.querySelector(`input.${e}`),a=document.querySelector(`textarea.${e}`);if(""!==n.value&&""!==a.value){const t=document.querySelector(`.displayCommentsSection-${e}`),o=`${n.value} : ${a.value}`,i=document.createElement("p");i.innerHTML=o,t.appendChild(i),async function(t,e,n){await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FBTV7LVQNoUbR7Qxl6jA/comments",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({item_id:t,username:e,comment:n})})}(e,n.value,a.value),n.value="",a.value=""}}))}))})()}))}));Array.from(document.getElementsByClassName("img-heart")).forEach((t=>{t.addEventListener("click",(t=>{const e=document.querySelector(`.${t.target.classList[4]}-likes`),n=e.textContent.match(/(\d+)/);e.innerHTML=`${Number(n[0])+1} likes`,async function(t){await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FBTV7LVQNoUbR7Qxl6jA/likes",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({item_id:t})})}(t.target.classList[4])}))}))}async function o(){const t=await fetch("https://pokeapi.co/api/v2/pokemon?limit=36"),e=await t.json(),n=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FBTV7LVQNoUbR7Qxl6jA/likes"),o=await n.json();e.results.forEach((t=>{const{url:e}=t;fetch(e).then((t=>t.json())).then((t=>a(t,o)))})),function(t){const e=t.length,n=document.querySelector(".counterItems"),a=document.querySelector(".counterPokemons");n.innerHTML=`Choose between our ${e} pokemons`,a.innerHTML=`(${e})`}(e.results)}window.onload=()=>{o()}})()})();