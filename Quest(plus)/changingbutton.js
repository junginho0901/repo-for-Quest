
function changeValue(button,body){
    if(button.value=='시작')
    {button.value="종료";
    body.style.backgroundColor="gray";}
    else
    {button.value="시작";
    body.style.backgroundColor="white";}

}

window.onload=function()
{const btn= document.getElementById('changingButton');
const bgclr=document.getElementById('bodyClass');
btn.onclick=function()
{if(btn.value=='시작')
{btn.value="종료"; bgclr.style.backgroundColor="gray";}
else
{btn.value="시작";
bgclr.style.backgroundColor="white";}
}}
