class Desktop {
    // 프로그램을 실행시켰을때 바탕화면의 기초 세팅을 하기위해서
    #dom
    #icon
	#Forder
    constructor(icon,forder) {
        this.#rendering(icon,forder);
		this.forder=forder;
		this.icon=icon;
    }
    // 화면에 출력해 주는 것
    #rendering(icons,forders) {
        // 렌더링 로직
    }
}

// 아이콘의 기능이 뭘까?: 드래그
class Icon {
    #dom
    constructor() {
		this.rendering();
		this.Drag();
    }

    rendering() {

    }

    Drag() {

    }
}

class Folder {
    #dom
	#Window
	constructor(){
		this.Drag();
		this.OpenWindow();
	}
	Drag() {

	}
	OpenWindow(){

	}
}

class Window {
    #dom
	constructor(){
		this.Drag();
	}
	Drag(){

	}
}
