class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	#dom = document.getElementsByClassName(desktop);
	#Icon
	#Folder

	constructor(dsktops,folders,icons){
		this.#Makedsktop(dsktops)
		this.#rendering(folders,icons)
	}
	#Makedsktop(num) {
		if(num>2)
		{
			alert('데스크탑이 너무 많습니다.');
		}
		else if (num<=0) 
		{
			alert('데스크탑 개수가 올바르지 않습니다.')
		}
		else if(num==1)
		{
			//화면 100% 데스크탑 1개 생성
			this.#dom
		}
		else if(num==2)
		{
			//화면을 브라우저 5:5로 맞추고 데스크탑 2개 생성
		}
	}
	#rendering(fold,icn)
	{
		for(i=0;i<fold;i++)
		{
			//설정한 폴더 개수만큼 객체 생성
		}
		for(i=0;i<icn;i++)
		{
			//설정한 아이콘 개수만큼 객체 생성
		}
	}

}

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};
