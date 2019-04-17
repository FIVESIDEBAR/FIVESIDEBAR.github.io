var imgs = document.querySelectorAll('.gallery img');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var i = 0;

prev.onclick = function() {

	imgs[i].style.display = 'none';
	i--;
	if (i < 0) {
		i = imgs.length-1;
	}
	imgs[i].style.display = 'block';
}

next.onclick = function() {

	imgs[i].style.display = 'none';
	i++;
	if (i >= imgs.length) {
		i = 0;
	}
	imgs[i].style.display = 'block';
}
