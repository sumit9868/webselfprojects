let cardState=[];


const addButton=document.getElementById('addButton').addEventListener('click',e=>{
    const name=document.getElementById('inputName').value;
    const number=document.getElementById('inputNumber').value;
    const imageUrl=document.getElementById('inputImage').value;
    
    cardState.push({
        name : name,
        number : number,
        imageUrl : imageUrl,
        todelete: false
    })

    paint()
    
})

const paint=function () {
    const html=render(cardState);
    document.getElementById('cards').innerHTML=html;
}

const render=(state)=> {
    return state.reduce((acc,card,index)=>{
        // const 
        if(!card.todelete){
        return acc + `<div ><ul>
        <li class="name">Name: ${card.name}</li>
        <li class="number">Number: ${card.number}</li>
        <li class="image">Image: <image src="${card.image}"></li></ul>
        <button id="deleteButton" data-index="${index}">Delete</button>
        </div>`
        }else return acc
    },'')
    
}


document.getElementById('cards').addEventListener('click',e=>{
    console.log(cardState);
    
    
    const index = e.target.dataset.index
    console.log(index);
    cardState[index].todelete = true;
    paint();
})