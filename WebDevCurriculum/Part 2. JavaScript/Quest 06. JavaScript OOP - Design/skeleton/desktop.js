class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(Ico,Folde,Windo){
		this.Ico=Ico;
		this.Folde=Folde;
		this.Windo=Windo;
	}
	ShowWindow(){
	Folde.ondblclick=function(){Windo.style.display='block';};
	}
};
let Ic=document.getElementById('Icon1');
let Fold=document.getElementById('Folder1');
let Wind=document.getElementById('Window1');
let Deskt=new Desktop(Ic,Fold,Wind);
Deskt.ShowWindow();

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};
