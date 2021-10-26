class desktop{
    #dom
    #icon
    constructor(dom){
        this.#dom=dom
        this.#icon=new Icon();
        this.makeIcon();
    }

    makeIcon(){
        this.#dom.appendChild(this.#icon.getIconDom());
    }
    
}
class Icon{
    #dom
    constructor(){
        this.prepareIcon();
    }
    getIconDom(){
        return this.#dom;
    }
    prepareIcon(){
        const t = document.querySelector('.template-icon');     // template DOM Select
        const tmpl = document.importNode(t.content, true);         // template 활성화 및 포함
        this.#dom = tmpl.querySelector('.icon');
    }
}