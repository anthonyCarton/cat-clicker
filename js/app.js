// JavaScript Document

window.addEventListener('load', function() {
	// const BUTTON = document.querySelector('#cat-click');
	// BUTTON.addEventListener('click', function(){
	// 	let countValue = BUTTON.innerText;
	// 	countValue++;
	// 	BUTTON.innerText = countValue;
	// });

	class Cat {
		constructor (name, img) {
			this.name = name;
			this.img = img;
			this.count = 0;
		}
		clicked() {
			this.count++;
			this.button.innerText = this.count;
		}
	}
	let cats = [];
	let init = function (name, img) {
		cats.push(new Cat('bill', 'cat-01.jpg'));
		cats.push(new Cat('ted', 'cat-02.jpg'));

		let container = document.querySelector('#container');
		let fragment = document.createDocumentFragment();

		cats.forEach(function(cat) {
			console.log(cat.name);
			console.log(cat.count);
			console.log(cat.img);
			let x = cats.length;
			let buttonWidth = 1 / x	* 100;

			// create and place button
			let button = document.createElement('button');
			let catsName = document.createElement('h1');
			let catsCount = document.createElement('p');

			button.className = 'cat-clicker';
			button.style.background = 'url(\'img/' + cat.img + '\') no-repeat center';
			button.style.width = `${buttonWidth}%`;
			catsName.innerText = cat.name;
			catsCount.innerText = cat.count;
			container.appendChild(button);
			button.appendChild(catsName);
			button.appendChild(catsCount);

			button.addEventListener('click', function() {
				cat.count++;
				catsCount.innerText = cat.count;
			})
		});
	}();
});
