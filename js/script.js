function enlarge(element){
	element.style.transform="scale(1.1, 1.1)";
	element.style.transition="0.6s ease";
	//console.log(element);
}
function reduceBack(element){
	element.style.transform="scale(1.0, 1.0)";
}

function colorThisImage(image){
	image.className="colorOnHover";
}

function greyscaleThisImage(image){
	image.className="greyImage";
}