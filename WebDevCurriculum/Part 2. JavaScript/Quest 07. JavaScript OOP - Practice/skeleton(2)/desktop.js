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
            this.icon[i] = new Icon(i+1);
            this.makeIcon(this.icon[i]);
           
        }
        for (let i = 0; i < Folders; i++) {
            this.folder[i] = new Folder(i+1);
            this.makeFolder(this.folder[i]);

        }
        this.makeButtons();
        this.changeIcon(dom);
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

    changeIcon(dom) {
        const a = new changeIcon();
        let width
        let height
        let img
        this.sizebutton.addEventListener('click', () => {
            width = prompt('가로px을 입력하세요.예시)50px이라면 50');
            height = prompt('세로px을 입력하세요.예시)50px이라면 50');
            if (isNaN(Number(width)) == true && isNaN(Number(height)) == true) { alert("입력값이 올바르지 않습니다.") }
            else { a.changeSize(dom,width, height) }
        }
        )

        this.imgbutton.addEventListener('click', () => {
            img = prompt('이미지 파일을 입력하세요(같은폴더 내에서만 찾기가 가능합니다.)');
            a.changeImg(dom,img); 
        }
        )
    }
}


class Icon {
    #dom
    #order
    drag
    constructor(i) {
        this.#order=i;
        this.prepareIcon();
        this.drag=new Drag(this.getIconDom())
    }
    getIconDom() {
        return this.#dom;
    }
    prepareIcon() {
        const t = document.querySelector('.template-icon');
        const tmpl = document.importNode(t.content, true);
        this.#dom = tmpl.querySelector('.icon');
        this.#dom.id='icon'+this.#order;
        console.log(this.#dom);
    }
}
class Folder {
    #dom
    window
    #order
    drag
    constructor(i) {
        this.#order=i;
        this.prepareFolder();

        this.window = new Window();
        this.openWindow();
        this.drag=new Drag(this.getFolderDom());
    }
    getFolderDom() {
        return this.#dom;
    }
    prepareFolder() {
        const t = document.querySelector('.template-folder');
        const tmpl = document.importNode(t.content, true);
        this.#dom = tmpl.querySelector('.icon');
        this.#dom.id='icon'+this.#order;
        console.log(this.#dom);
    }
    openWindow() {
        this.#dom.addEventListener('dblclick', () => {
            this.#dom.after(this.window.getWindowDom());
        })
    }
}

class Window {
    #dom
    drag
    constructor() {
        this.preapareWindow();
        this.clickXbox();
        this.drag=new Drag(this.getWindowDom())
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

    changeSize(dom,Width, Height) {
        for (let i = 0; i < dom.querySelectorAll('.icon').length; i++) {
            dom.querySelectorAll('.icon')[i].style.width = Width + 'px';
            dom.querySelectorAll('.icon')[i].style.height = Height + 'px';
        }
    }

    changeImg(dom,img){
        
        for(let i =0;i<dom.querySelectorAll('.only-Icon').length;i++)
        {
            dom.querySelectorAll('.only-Icon')[i].src = img;
        }

    }
}


class Drag{
    #dom
    
    constructor(dom)
    {
        this.#dom=dom;
        this.addDragAndDrop();
        
    }
    addDragAndDrop() {
        // window Drag || Icon Drag
          
        const mouseDownEvent = this.#dom.addEventListener('mousedown', e => {
          
            let pushed = true;
            let mouseCoord = {
                x: e.clientX,
                y: e.clientY
            };
            
          
            const mouseMoveEvent = document.addEventListener('mousemove', e => {
                if (pushed) {
                  
                    const currCoord = {
                        x: Number(window.getComputedStyle(this.#dom).left.replace('px', '')),
                        y: Number(window.getComputedStyle(this.#dom).top.replace('px', ''))
                    };
                   
                   
                    const destCoord = {
                        x: currCoord.x + e.clientX - mouseCoord.x,
                        y: currCoord.y + e.clientY - mouseCoord.y
                    };
                    this.#dom.style.left = `${destCoord.x}px`;
                    this.#dom.style.top = `${destCoord.y}px`;

                  
                    mouseCoord = {
                        x: e.clientX,
                        y: e.clientY
                    };
                 console.log( this.#dom.style.left )
                 console.log( this.#dom.style.top)
                }
            });

            const mouseUpEvent = document.addEventListener('mouseup', () => {
               
                pushed = false;
                this.#dom.removeEventListener('mousemove', mouseMoveEvent);
                this.#dom.removeEventListener('mousedown', mouseDownEvent);
                this.#dom.removeEventListener('mouseup', mouseUpEvent);
            });
        });
    }

    

}