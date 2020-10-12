function yayAlert(){
    alert('fuckin a');
}

function changeBG(elem, color){
    elem.style.backgroundColor = color;
}

function changeText(txt = 'cool'){
    this.innerHTML = txt;
    console.log(this);
}

let btns = document.querySelectorAll('.content-block > button');
let blocks = document.querySelectorAll('.content-block');
let head = document.querySelector('#header');
let allP = document.querySelectorAll('p');
console.log(allP);

btns.forEach(x => x.addEventListener('click',yayAlert));
blocks.forEach(x => x.addEventListener('mouseover',function(){changeBG(head,'blue')}));
blocks.forEach(x => x.addEventListener('mouseout',function(){changeBG(head,'#9de2f7')}));

allP.forEach(x => x.addEventListener('mouseover',function(){let self = this; changeText.call(self)}));