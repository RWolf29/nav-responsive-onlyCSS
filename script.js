li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
    li[i].onclick = (e) => {
        removeActive();
        li[i].classList.add('active');
    }        
}

function removeActive(){
    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove('active');        
    }
}