const child = document.querySelector('.l-header');
const cb = function(entries, observer){
	entries.forEach((entry)=>{
		if(entry.isIntersecting){
			entry.target.classList.add('inview');
		}else{
			entry.target.classList.remove('inview');
		}
	});
}

const options = {
	root: null,
	rootMargin: "-100px 0px 0px 0px",
	threshold: 1
}
const io = new IntersectionObserver(cb, options);
io.observe(child);
