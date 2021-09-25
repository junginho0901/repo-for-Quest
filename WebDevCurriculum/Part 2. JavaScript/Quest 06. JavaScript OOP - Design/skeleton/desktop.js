class Desktop {
    // 프로그램을 실행시켰을때 바탕화면의 기초 세팅을 하기위해서
    #dom
    #icon
	#Folder
    constructor(icon,folder) {
		this.folder=folder;
		this.icon=icon;
        this.#rendering(icon,folder);
    }//아이콘 폴더의 개수를 생성자로 받아서 rendering에 넣고 실행.
    // 화면에 출력해 주는 것
    #rendering(icons,folders) {
        // 렌더링 로직
		//각각 아이콘과 폴더의 개수를 받은만큼 객체를 만들어 내는 항수 기능.
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

    }//아이콘의 설정 

    Drag() {

    }// 드래그 했을 때, 아이콘이 따라 움직여야함.
}

class Folder extends Icon{
    #dom
	#Window
	constructor(){
		this.OpenWindow();
		super.Drag();//드레그의 함수는 공통이므로 상속을 이용해서 따로 메소드를 선언하지 않고 사용.
	}

	OpenWindow(){

	}//폴더 아이코을 더블 클릭 했을 시 보이지 않던 Window가 생겨야 함.(template 속성은 js에서 건들기 전엔 안보임?없음?)
}

class Window {
    #dom
	constructor(){
		this.Drag();
		this.CloseWindow;
	}
	Drag(){

	}//위와 마찬가지
	CloseWindow(){

	}//Window를 없애는 함수를 만들어야함.
}
