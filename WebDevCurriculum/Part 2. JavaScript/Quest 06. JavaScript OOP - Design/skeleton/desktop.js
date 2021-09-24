class Desktop {
    // 프로그램을 실행시켰을때 바탕화면의 기초 세팅을 하기위해서
    #dom
    #icon
	#Folder
    constructor(icon,folder) {
        this.#rendering(icon,folder);
		this.folder=folder;
		this.icon=icon;
    }//아이콘 폴더의 개수를 생성자로 받아서 rendering에 넣고 실행.
    // 화면에 출력해 주는 것
    #rendering(icons,folders) {
        // 렌더링 로직
		//각각 아이콘과 폴더의 개수를 받은만큼 객체를 만들어 냄
		this.#icon=new Icon();
		this.#Folder=new Folder();
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
		this.CloseWindow;
	}
	Drag(){

	}
	CloseWindow(){

	}
}
