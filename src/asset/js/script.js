$(function(){
	// swipper -->
	const swiper = new Swiper(".swiper", {
		loop: true,
		// ページネーションが必要なら追加
		pagination: {
			el: ".swiper-pagination"
		},
		// ナビボタンが必要なら追加
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
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

		if(fileName != "index"){
			let bread = document.querySelector('.bread');

			let code = '';
	
			data.forEach(el => {
				if(el.name === fileName){
					code = '<ul>';
	
					for(let i = 0; i<el.text.length -1 ;i++){
						code += '<li><a href="' + el.url[i] + '">' + el.text[i] + '</a></li>';
					}
					code += `<li>${el.text[el.text.length-1]}</li></ul>`;
				}
	
				bread.innerHTML = code;
			})
		}
	}
	// <-- パンくずリスト
}

