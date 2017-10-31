var urlOffset = {
	'about': -60,
	'experience': -100,
	'sideprojects': -135
}

function scrollToDiv( classToScrollTo=null ){
	if( classToScrollTo ){
		var element = document.getElementsByClassName( classToScrollTo )[0];
		if(element){
			var offset = urlOffset[classToScrollTo] || 0;
			window.scrollTo( 0, findPos(element) + offset);
		} else
			window.location.href = '/#' + classToScrollTo;
	} else {
		window.scrollTo(0, 0);
	}
	return true;
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return curtop;
    }
}

window.onload = function (){
	if(window.location.hash && window.location.hash.length > 0)
		scrollToDiv( window.location.hash.substr(1) );
}
