
class Car {
    #body
    #startButton
    #km=0;
    #oil=0;
    constructor(BodyId) {
        this.#body = BodyId;
        this.#startButton = BodyId.querySelector('.startButton');
        this.bindButtonEvents();
        this.pushGasPedal();
        this.pushBreakPedal();
        this.carOiling();
    }

    bindButtonEvents() {
        this.#startButton.addEventListener('click', () => {
            if (this.#startButton.value === '시동 끄기'){
                this.#startButton.value = '시동 켜기';
                console.log("시동을 끕니다.");
                this.closeFunction();
            } else {
                this.#startButton.value = '시동 끄기';
                this.prepareFunction();
                console.log("부르릉");
            }
        })
    }

    prepareFunction() {
        this.#body.querySelector('.gasPedal').style.visibility = 'visible';
        this.#body.querySelector('.break').style.visibility = 'visible'
        this.#body.querySelector('.oiling').style.visibility = 'visible'
    }

    closeFunction() {
        this.#body.querySelector('.gasPedal').style.visibility = 'hidden';
        this.#body.querySelector('.break').style.visibility = 'hidden'
        this.#body.querySelector('.oiling').style.visibility = 'hidden'
    }
    pushGasPedal(){
        
        this.#body.querySelector('.gasPedal').addEventListener('click', () => {
            if(this.#oil<=0){
                console.log("기름이 없습니다.차가 멈춥니다.");
                this.#km=0;
                return;
            }
            this.#km=this.#km+10;
            this.#oil=this.#oil-5;
            console.log("시속"+this.#km+"km입니다.");
            console.log("남은 기름은 "+this.#oil+"L 입니다.");
        })
    }
    pushBreakPedal(){
        this.#body.querySelector('.break').addEventListener('click', () => {
            if(this.#oil<=0){
                console.log("기름이 없습니다.차가 멈춥니다.");
                this.#km=0;
                return;
            }
            this.#km=this.#km-10;
            if(this.#km>=0){
                this.#oil=this.#oil-5;
            console.log("시속"+this.#km+"km입니다.");
            console.log("남은 기름은 "+this.#oil+"L 입니다.");}
            else{
                this.#oil=this.#oil-5;
                console.log("후진중 입니다. 시속"+this.#km+"km");
                console.log("남은 기름은 "+this.#oil+"L 입니다.");
            }
        })
    
    }
    carOiling(){
        this.#body.querySelector('.oiling').addEventListener('click', () => {
            this.#oil=this.#oil+10;
            console.log("주유중입니다. 남은 기름은"+this.#oil+"L입니다.");
        })
    }
   
}
