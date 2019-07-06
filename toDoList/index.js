let inputBox=document.getElementById('box');
let list=document.getElementById('list');

    list.innerHTML='';
    
var count =0;
function add() {
    
   list.innerHTML+=`<li class="listitem" onclick="strikeFxn(element${count}) id='element${++count}'">${inputBox.value}</li>`;
   inputBox.value='';
}
 
function strikeFxn(id) {    
let listitem=document.getElementById(id);
listitem.innerHTML=`<s>${listitem.outerHTML}</s>`;
};