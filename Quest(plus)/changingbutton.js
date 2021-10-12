function main () {
    const btn = document.getElementById('changingButton');
    const backGroundColor = document.getElementById('bodyClass');
    btn.addEventListener('click', () => {
        if(btn.value === '시작'){
            btn.value = '종료';
            backGroundColor.style.backgroundColor = 'gray';
        } else {
            btn.value = '시작';
            backGroundColor.style.backgroundColor = 'white';
        }
    })
}

main();
