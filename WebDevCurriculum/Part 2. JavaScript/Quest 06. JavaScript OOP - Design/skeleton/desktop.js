class Desktop {
    // 프로그램을 실행시켰을때 바탕화면의 기초 세팅을 하기위해서
    #dom
    #icon
	#Folder
    constructor(icon,folder) {
		this.folder=folder;
		this.icon=icon;
        this.#rendering(icon,folder);
    }//아이콘 폴더의 개수를 생성자로 받아서 rendering에 넣고 실행. for 문으로 객체 생성?
    // 화면에 출력해 주는 것
    #rendering(icons,folders) {
        // 렌더링 로직
		//각각 아이콘과 폴더의 개수를 받은만큼 객체를 만들어 내는 항수 기능.
		this.#icon=new Icon();
		this.#Folder=new Folder();
    }
}
class Drag{
	// 드래그 기능 클래스를 따로 만듬
	constructor(){
		this.dragfunc();
	}
	dragfunc(){

	}
}

// 아이콘의 기능이 뭘까?: 드래그
class Icon {
    #dom
    constructor() {
		this.#rendering();
		this.drag= new Drag();//드래그 클래스의 객체를 만들어서 각각의 클래스에 넣음-클래스 합성
    }
    #rendering(){

    }//아이콘의 설정 
	
}

class Folder{
    #dom
	#Window//윈도우를 연결해서 폴더 더블클릭 시 윈도우가 열리게
	constructor(){
		this.#OpenWindow();
		this.drag= new Drag()
	}
	#OpenWindow(){

	}//폴더 아이콘을 더블 클릭 했을 시 보이지 않던 Window가 생겨야 함.(template 속성은 js에서 건들기 전엔 안보임?없음?)
}

class Window {
    #dom
	constructor(){
		this.drag= new Drag()
		this.#CloseWindow();
	}
	
	#CloseWindow(){

	}//버튼x를 누르면 Window를 없애는 함수를 만들어야함.
}
