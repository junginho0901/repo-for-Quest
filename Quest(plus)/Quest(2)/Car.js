
class Car {
    #body
    #startButton
    constructor(BodyId) {
        this.#body = BodyId;
        this.#startButton = BodyId.querySelector('.startButton');
        this.#bindButtonEvents()
    }

    #bindButtonEvents() {
        this.#startButton.addEventListener('click', () => {
            if (this.#startButton.value === '시동 끄기'){
                this.#startButton.value = '시동 켜기';
                this.#closeFunction();
            } else {
                this.#startButton.value = '시동 끄기';
                this.#prepareFunction();
            }
        })
    }

    #prepareFunction() {
        this.#body.querySelector('.gasPedal').style.visibility = 'visible';
        this.#body.querySelector('.break').style.visibility = 'visible'
        this.#body.querySelector('.oiling').style.visibility = 'visible'
    }

    #closeFunction() {
        this.#body.querySelector('.gasPedal').style.visibility = 'hidden';
        this.#body.querySelector('.break').style.visibility = 'hidden'
        this.#body.querySelector('.oiling').style.visibility = 'hidden'
    }
}