const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');

buttons.forEach(function(item) {
    item.onclick = function() {
        if (item.id == 'clear') {
            screen.value = '';
        } else if (item.id == 'delete') {
            let string = screen.value.toString();
            screen.value = string.slice(0, string.length - 1);
        } else if (screen.value != '' && item.id == 'equal') {
            screen.value = eval(screen.value);
        } else if (screen.value == '' && item.id == 'equal') {
            screen.value = 'Empty!';
            setTimeout(function() {
                screen.value = '';
            }, 2000);
        } else {
            screen.value += item.value;
        }
    };    
});
screen.value = '';
screen.disabled = true;


let toggleBtn = document.querySelector('.btn');
let calc = document.querySelector('.calculator');
toggleBtn.addEventListener('click', function(){
    toggleBtn.classList.toggle('dark');
    calc.classList.toggle('dark');
})