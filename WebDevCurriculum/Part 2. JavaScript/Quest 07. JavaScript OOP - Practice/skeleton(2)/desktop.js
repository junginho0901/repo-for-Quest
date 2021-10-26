class desktop{
    #dom
    icon
    folder
    
    constructor(dom,Icons,Folders){
        this.#dom=dom
        this.icon=[]
        this.folder=[]
        for(let i=0;i<Icons;i++)
        {
            this.icon[i]=new Icon();
            this.makeIcon(this.icon[i]);
        }
        for(let i=0;i<Folders;i++)
        {
            this.folder[i]=new Folder();
            this.makeFolder(this.folder[i]);
        }
    }

    makeIcon(icon){
        this.#dom.appendChild(icon.getIconDom());
    }
    makeFolder(folder){
        this.#dom.appendChild(folder.getFolderDom());
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
class Folder{
    #dom
    window
   
    constructor(){
       
        this.prepareFolder();
        
        this.window=new Window();
        this.openWindow();
    }
    getFolderDom(){
        return this.#dom;
    }
    prepareFolder(){
        const t = document.querySelector('.template-folder');     // template DOM Select
        const tmpl = document.importNode(t.content, true);         // template 활성화 및 포함
        this.#dom = tmpl.querySelector('.icon');
    }
    openWindow(){
        this.#dom.addEventListener('dblclick',()=>{
            this.#dom.after(this.window.getWindowDom());
        })
    }
}

class Window{
    #dom
    constructor()
    {
        this.preapareWindow();
    }
    getWindowDom(){
        return this.#dom;
    }
    preapareWindow(){
        const t = document.querySelector('.template-window');     // template DOM Select
        const tmpl = document.importNode(t.content, true);         // template 활성화 및 포함
        this.#dom = tmpl.querySelector('.window');
    }
    
}

