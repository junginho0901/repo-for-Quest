
function changeValue(button,body){
    if(button.value=='시작')
    {button.value="종료";
    body.style.backgroundColor="gray";}
    else
    {button.value="시작";
    body.style.backgroundColor="white";}

}

const btn= document.getElementById('changingButton');
const bgclr=document.getElementById('bodyClass');
btn.addEventListener('click',asd);
function asd(){alert("1231");}