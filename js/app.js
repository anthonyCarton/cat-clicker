// JavaScript Document

window.addEventListener('load', function() {

	class Cat {
		constructor (name, img) {
			this.name = name;
			this.img = img;
			this.count = 0;
		}
	}

	let cats = [];

	let newCat = function(name, img) {
		cats.push(new Cat(name, img));
	};

	newCat('bill', 'cat-01.jpg');
	newCat('ted', 'cat-02.jpg');

	let init = function () {
		let container = document.querySelector('#container');

		cats.forEach(function(cat) {
			let buttonWidth = 1 / cats.length	* 100;

			// create and place button
			let button = document.createElement('button');
			let catsName = document.createElement('h1');
			let catsCount = document.createElement('p');

			button.className = 'cat-clicker';
			button.style.backgroundImage = 'url(\'img/' + cat.img + '\')';
			button.style.width = `${buttonWidth}%`;
			catsName.innerText = cat.name;
			catsCount.innerText = cat.count;
			container.appendChild(button);
			button.appendChild(catsName);
			button.appendChild(catsCount);

			button.addEventListener('click', function() {
				cat.count++;
				catsCount.innerText = cat.count;
			});
		});

		// build clickable list
	}();
});
