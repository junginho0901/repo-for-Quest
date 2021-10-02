
class Desktop {
	#dom
	#icons
	#folders
	constructor(dom, initIcon) {
		this.#dom = dom;

		this.#icons = [];
		this.#folders = [];
		this.icon = null;

		for(let i = 0 ; i<initIcon.icon; i++) {
			this.icon = new Icon();
		}


	}

	newIcon() {

	}
}


class Icon {
	#dom
	constructor() {

	}

	getDom() {
		return this.#dom;
	}

	moveIcon(coord) {
		this.#dom.style.left = `${coord.x}px`
		this.#dom.style.top = `${coord.y}px`
	}

	prepareDom() {
		const t = document.querySelector('.template-icon');
		const tmpl = document.importNode(t.content, true);
		this.#dom = tmpl.querySelector('.icon');
	}

}

class Folder {
	#dom
	constructor() {

	}
	getDom() {
		return this.#dom;
	}

	moveIcon(coord) {
		this.#dom.style.left = `${coord.x}px`
		this.#dom.style.top = `${coord.y}px`
	}

	prepareDom() {
		const t = document.querySelector('.template-icon');
		const tmpl = document.importNode(t.content, true);
		this.#dom = tmpl.querySelector('.icon');
	}
}

class Window {
	#dom
	#xbox
	constructor(dom) {

	}

	getDom() {
		return this.#dom;
	}
}


function plus(arr) {
	return arr.reduce((acc, curr) => { return acc+curr });
}

function main() {
	const arr = [1,2,3,4,5,6,7,8,9,10];
}
