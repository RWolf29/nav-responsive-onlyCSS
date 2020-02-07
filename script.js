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

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("window").style.display = "block";
}