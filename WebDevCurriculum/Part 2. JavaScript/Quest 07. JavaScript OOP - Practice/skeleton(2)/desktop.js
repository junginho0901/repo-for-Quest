class desktop {
    #dom
    icon
    folder
    btn
    imgbutton
    sizebutton
    constructor(dom, Icons, Folders) {
        this.#dom = dom
        this.icon = []
        this.folder = []
        for (let i = 0; i < Icons; i++) {
            this.icon[i] = new Icon();
            this.makeIcon(this.icon[i]);
        }
        for (let i = 0; i < Folders; i++) {
            this.folder[i] = new Folder();
            this.makeFolder(this.folder[i]);
        }
        this.makeButtons();
        this.changeICon();
    }

    makeIcon(icon) {
        this.#dom.appendChild(icon.getIconDom());
    }
    makeFolder(folder) {
        this.#dom.appendChild(folder.getFolderDom());
    }
    makeButtons(button) {
        this.btn = new Buttons()
        this.sizebutton = this.btn.getSizeButton();
        this.imgbutton = this.btn.getImgButton();
        this.#dom.appendChild(this.sizebutton);
        this.#dom.appendChild(this.imgbutton);
    }

    changeICon() {
        const a = new changeIcon();
        let width
        let height
        this.sizebutton.addEventListener('click', () => {
            width = prompt('가로px을 입력하세요.예시)50px이라면 50');
            height = prompt('세로px을 입력하세요.예시)50px이라면 50');
            if (isNaN(Number(width)) == true && isNaN(Number(height)) == true) { alert("다시 입력해주십시오.") }
            else { a.changeSize(width, height) }
        }
        )
    }
}


class Icon {
    #dom
    constructor() {
        this.prepareIcon();
    }
    getIconDom() {
        return this.#dom;
    }
    prepareIcon() {
        const t = document.querySelector('.template-icon');
        const tmpl = document.importNode(t.content, true);
        this.#dom = tmpl.querySelector('.icon');
    }
}
class Folder {
    #dom
    window

    constructor() {

        this.prepareFolder();

        this.window = new Window();
        this.openWindow();
    }
    getFolderDom() {
        return this.#dom;
    }
    prepareFolder() {
        const t = document.querySelector('.template-folder');
        const tmpl = document.importNode(t.content, true);
        this.#dom = tmpl.querySelector('.icon');
    }
    openWindow() {
        this.#dom.addEventListener('dblclick', () => {
            this.#dom.after(this.window.getWindowDom());
        })
    }
}

class Window {
    #dom
    constructor() {
        this.preapareWindow();
        this.clickXbox();
    }
    getWindowDom() {
        return this.#dom;
    }
    preapareWindow() {
        const t = document.querySelector('.template-window');
        const tmpl = document.importNode(t.content, true);
        this.#dom = tmpl.querySelector('.window');
    }
    clickXbox() {
        const x = this.#dom.querySelector('.xbox');
        x.addEventListener('click', () => { this.#dom.remove() })
    }
}

class Drag {
    #dom
    constructor(dom) {
        this.#dom = dom

    }
    drag() {
    }


}

class Buttons {
    #sizeButtonDom
    #imgButtonDom
    constructor() {
        this.prepareDom();
    }
    prepareDom() {
        const t = document.querySelector('.template-ChangeSize');
        const tmpl = document.importNode(t.content, true);
        this.#sizeButtonDom = tmpl.querySelector('.changeBT');
        this.#imgButtonDom = tmpl.querySelector('.changeIcon');
    }
    getSizeButton() {
        return this.#sizeButtonDom
    }
    getImgButton() {
        return this.#imgButtonDom
    }
}

class changeIcon {

    constructor() {

    }
    changeSize(Width, Height) {
        for (let i = 0; i < document.querySelectorAll('.icon').length; i++) {
            document.querySelectorAll('.icon')[i].style.width = Width + 'px';
            document.querySelectorAll('.icon')[i].style.height = Height + 'px';
        }
    }

}
