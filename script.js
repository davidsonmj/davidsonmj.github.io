var pictureEls = document.getElementsByClassName("paratext"), i, len;

document.addEventListener("onclick", HoverFunction());

function HoverFunction() {
	for (i = 0, len = pictureEls.length; i < len; i++) {
    pictureEls[i].style.backgroundColor = 'blue';
	}
}

