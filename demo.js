//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');

//header.style.borderBottom='solid 3px #000';
//var items=document.getElementsByClassName('list-group-item');
//console.log(items[1]);
//items[1].style.fontWeight='bold';
//items[2].style.backgroundColor='green';
//for(let i=0;i<items.length;i++){
    //items[i].style.backgroundColor='green';
//    items[i].style.fontWeight='bold';
//}
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='hello2';
li[1].style.backgroundColor='yellow';
li[1].style.fontWeight='bold';
for(let i=0;i<li.length;i++){
    li[i].style.backgroundColor='white';
}