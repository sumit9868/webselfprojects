
var intervalId;
var listId=document.getElementById('list');
var t=50;
function start_counter() {
    intervalId=setInterval(count,1000);
}

function count() {
    if(t<0){
        clearInterval(intervalId);
    }else{
listId.innerText=t--;
    }
}