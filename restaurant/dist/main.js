!function(e){var t={};function n(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(l,a,function(t){return e[t]}.bind(null,a));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class l{constructor(e,t,n){this.meta={name:e,description:t,price:n},this.name=e,this.description=t,this.price=n}get item(){return this.meta}set itemImage(e){this.itemImage=e}createMenuItemCard(){let e=document.createElement("div");e.className="item-card";let t=document.createElement("div"),n=document.createElement("span");n.innerHTML=this.name;let l=document.createElement("span");l.innerHTML=this.description;let a=document.createElement("span");return a.innerHTML=this.price,t.style.display="flex",t.style.justifyContent="space-between",t.appendChild(n),t.appendChild(a),e.appendChild(t),e.appendChild(l),e}}let a=document.getElementById("content"),i=document.createElement("div");i.className="main";const c=e=>{let t=document.createElement("h1");return t.style.font="1.5em bold Helvetica, sans-serif",t.style.padding="10px 0",t.style.textAlign="center",t.innerHTML=e,t},r=()=>{let e=document.createElement("div");e.className="splash";let t=c("the white glyph."),n=document.createElement("h3");n.style.margin="10px 0",n.innerHTML="a local   coffee & tea shop ";let l=document.createElement("img");l.src="../coffee_cup.jfif",l.style.width="200px",l.style.height="200px",l.style.borderRadius="50%",l.style.margin="10px 0",e.style.display="flex",e.style.flexFlow="column wrap",e.style.alignItems="center",d(),e.appendChild(t),e.appendChild(n),e.appendChild(l),i.appendChild(e),a.appendChild(i)};function d(){i.innerHTML=""}let o=document.getElementById("content"),p=document.createElement("header");p.className="nav";const s=(e=[],t="")=>{let n=document.createElement("ul");return n.className=t,e.forEach(e=>{let t=document.createElement("li"),o=document.createElement("a");t.className="tab",o.innerHTML=e,o.href="#",t.addEventListener("click",()=>{"home"===e?r():"contact"===e?(()=>{let e=c("keep in touch."),t=[{tag:"support@thewhiteglyph.com",link:"mailto:support@thewhiteglyph.com",img:"../email.png"},{tag:"@thewhiteglyph",link:"https://www.instagram.com",img:"../insta.png"},{tag:"@thewhiteglyph",link:"https://www.twitter.com",img:"../twitta.png"},{tag:"@thewhiteglyph",link:"https://www.facebook.com/",img:"../facebook.png"},{tag:"las vegas, nv 89139",link:"#",img:"../location.png"}],n=document.createElement("div");n.className="socials-container",t.forEach(e=>{let t=document.createElement("div");t.className="social-card";let l=document.createElement("img");l.src=e.img,l.style.width="4%",l.style.height="4%";let a=document.createElement("a");a.href=e.link,a.innerHTML=e.tag,a.style.margin="0 10px",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.margin="10px 0",t.appendChild(l),t.appendChild(a),n.appendChild(t)}),d(),i.appendChild(e),i.appendChild(n),a.appendChild(i)})():"menu"===e?(()=>{let e=c("menu."),t=new l("coffee","a simple, hot cup of coffee",1.29),n=new l("tea","a simple, hot cup of tea",1.29),r=new l("iced coffee","a cold, refreshing iced coffee",2.29),o=new l("iced tea","a cold, refreshing iced tea",2.29);d(),i.appendChild(e),i.appendChild(t.createMenuItemCard()),i.appendChild(n.createMenuItemCard()),i.appendChild(r.createMenuItemCard()),i.appendChild(o.createMenuItemCard()),a.appendChild(i)})():console.log("no function")}),t.appendChild(o),n.appendChild(t)}),n};(()=>{let e=s(["menu","home","contact"],"tab-list");p.appendChild(e),o.appendChild(p)})(),r()}]);