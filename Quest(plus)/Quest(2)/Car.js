
class Car{
    constructor(){
        this.MakeButton();
        this.DeleteButton();
        this.StartingButton();
        this.OffButton();
    }
    startButton=document.getElementById('startButton');
    offButton=document.getElementById('offButton');
    StartingButton(){
        startButton.addEventListener('click',function(){this.MakeButton(this.offButton);})
        startButton.addEventListener('click',function(){this.DeleteButton(this.startButton);})
    }
    OffButton(){
        offButton.addEventListener('click',function(){this.MakeButton(this.startButton);})
        offButton.addEventListener('click',function(){this.DeleteButton(this.offButton);})
    }
    MakeButton(Button){
        if(Button.style.visibility==='hidden'){
        Button.style.visibility='visible';}
    }
    DeleteButton(Button){
        if(Button.style.visibility==='visible'){
        Button.style.visibility='hidden';}
    }
  
}
inhoCar = new Car();

