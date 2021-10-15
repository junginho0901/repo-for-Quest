window.onload=function(){
const btn=document.getElementById('changingButton');
const body=document.getElementById('bodyClass');
btn.addEventListener('click',function(){if(btn.value=='시작'){btn.value="종료";
body.style.backgroundColor="gray";}
else
{btn.value="시작";
body.style.backgroundColor="white";}})}




function changeValue(button,body){
    if(button.value=='시작')
    {button.value="종료";
    body.style.backgroundColor="gray";}
    else
    {button.value="시작";
    body.style.backgroundColor="white";}

}