$(function(){
	// swipper -->
	const swiper = new Swiper(".swiper", {
		loop: true,
		autoplay: true,
		effect: 'fade',
		// ページネーションが必要なら追加
		pagination: {
			el: ".swiper-pagination"
		},
		// ナビボタンが必要なら追加
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
	});
	// <-- swipper
});

window.onload = function(){

	// パンくずリスト -->
	const requestURL = "../asset/js/breadcrumb.json";
	let request = new XMLHttpRequest();
	request.open('GET',requestURL);
	request.responseType = 'json';
	request.send();

	request.onload = function() {
		breadCrumb();
	}

	function breadCrumb(){
		let data = request.response;
		data = JSON.parse(JSON.stringify(data));

		let fileName = window.location.href.split('/').pop().replace('.html','');
		if(fileName == ""){
			let urls = window.location.href.split('/');
			fileName = urls[urls.length -2];
		}

		if(fileName != "index" && fileName !== ""){
			let bread = document.querySelector('.bread');

			let code = '';
	
			data.forEach(el => {
				if(el.name === fileName){
					code = '<ul class="bread__ul">';
	
					for(let i = 0; i<el.text.length -1 ;i++){
						code += '<li class="bread__li"><a class="bread__link" href="' + el.url[i] + '">' + el.text[i] + '</a></li>';
					}
					code += `<li class="bread__li">${el.text[el.text.length-1]}</li></ul>`;
				}
	
				bread.innerHTML = code;
			})
		}
	}
	// <-- パンくずリスト
}

