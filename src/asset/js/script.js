$(function(){
	// swipper -->
	const swiper = new Swiper(".swiper", {
		loop: true,
		autoplay: {delay:4000},
		speed: 500,
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
};

	// --> ハンバーガーメニュー
	class MobleMenu {
		constructor(){
			this.DOM = {};
			this.DOM.btn = document.querySelector('.l-header__hamburger');
			this.DOM.header = document.querySelector('.l-header');
			this.eventType = this._getEventType();
			this._addEvent();
		}
	
		_getEventType(){
			const isTouchCapable = "ontouchstart" in window ||
			(window.DocumentTouch && document instanceof DocumentTouch);
	
			return isTouchCapable ? "touchstart" : "click";
		}
		_toggle() {
			this.DOM.header.classList.toggle('menu-open');
		}
		_addEvent() {
			this.DOM.btn.addEventListener(this.eventType,this._toggle.bind(this));
		}
	}
	
	new MobleMenu();
	// <-- ハンバーガーメニュー