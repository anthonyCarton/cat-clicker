// JavaScript Document

window.addEventListener('load', function() {
	const BUTTON = document.querySelector('#cat-click');
	BUTTON.addEventListener('click', function(){
		let countValue = BUTTON.innerText;
		countValue++;
		BUTTON.innerText = countValue;
	});	
});
