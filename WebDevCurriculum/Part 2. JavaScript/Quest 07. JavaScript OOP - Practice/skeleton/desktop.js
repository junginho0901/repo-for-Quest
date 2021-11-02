class Drag{
    #dom
    #select
    constructor(dom)
    {
        this.#dom=dom;
        this.addDragAndDrop();
        console.log(window.getComputedStyle(this.#dom).top,window.getComputedStyle(this.#dom).left)
    }
    addDragAndDrop() {
        // window Drag || Icon Drag
            this.#select = this.#dom;

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