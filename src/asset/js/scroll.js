document.addEventListener('DOMContentLoaded',function(){

	const headerView = function(el, isIntersecting){
		const header = document.querySelector('.l-header');
		if(isIntersecting){
			header.classList.remove('inview');
		}else{
			header.classList.add('inview');
		}
	}
	const btnView = function(el, isIntersecting){
		const cupbtn = document.querySelector('.c-upbtn');
		if(isIntersecting){
			cupbtn.classList.remove('inview');
		}else{
			cupbtn.classList.add('inview');
		}
	}
	const breadView = function(el, isIntersecting){
		const bread = document.querySelector('.bread');
		if(isIntersecting){
			bread.classList.remove('inview');
		}else{
			bread.classList.add('inview');
		}
	}

	const hv = new scrollObserver('.p-header-trigger',headerView,{once:false});
	const bv = new scrollObserver('.p-upbtn-trigger',btnView,{once:false});
	const brv = new scrollObserver('.c-bread-trigger',breadView,{once:false});

})

class scrollObserver {
	constructor(els, cb, options){
		this.els = document.querySelectorAll(els);
		const defaultOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 1,
			once: true
		};
		this.cb = cb;
		this.options = Object.assign(defaultOptions, options);
		this.once = this.options.once;
		this._init();
	}
	_init(){
		const callback = function(entries, observer){
			entries.forEach((entry)=>{
				if(entry.isIntersecting){
					this.cb(entry.target,true);
					if(this.once){
						observer.unobserve(entry.target);
					}
				}else{
					this.cb(entry.target,false);
				}
			});
		}
		this.io = new IntersectionObserver(callback.bind(this), this.options);
		this.els.forEach(el => this.io.observe(el));
	}

	destory(){
		this.io.disconnect();
	}
}
