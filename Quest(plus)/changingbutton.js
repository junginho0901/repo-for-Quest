const btn = document.getElementById('changingButton');
const backGroundColor = document.getElementById('bodyClass');
function main() {
    btn.addEventListener('click', function(){changeValue(btn,backGroundColor)})
}
main();
function changeValue(button, body) {
    if (button.value == '시작') {
        button.value = "종료";
        body.style.backgroundColor = "gray";
    }
    else {
        button.value = "시작";
        body.style.backgroundColor = "white";
    }

}