$(function(){new Swiper(".swiper",{loop:!0,autoplay:!0,effect:"fade",pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}),window.onload=function(){let t=new XMLHttpRequest;t.open("GET","../asset/js/breadcrumb.json"),t.responseType="json",t.send(),t.onload=function(){!function(){let n=t.response;n=JSON.parse(JSON.stringify(n));let l=window.location.href.split("/").pop().replace(".html","");{var e;""==l&&(e=window.location.href.split("/"),l=e[e.length-2])}if("index"!=l&&""!==l){let e=document.querySelector(".bread"),t="";n.forEach(n=>{if(n.name===l){t='<ul class="bread__ul">';for(let e=0;e<n.text.length-1;e++)t+='<li class="bread__li"><a class="bread__link" href="'+n.url[e]+'">'+n.text[e]+"</a></li>";t+=`<li class="bread__li">${n.text[n.text.length-1]}</li></ul>`}e.innerHTML=t})}}()}};