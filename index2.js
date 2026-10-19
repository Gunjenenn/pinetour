

const word = document.getElementById('word')
const addbutton = document.getElementById('add')
const boxes = document.getElementById('boxes')           

addbutton.innerHTML = 'Add'
addbutton.addEventListener('click', function(){
    const inputvalue = word.value;

    boxes.style.display = 'flex'
    boxes.style.gap= '24px'
    
    
    for( let i=0; i<inputvalue.length; i++){
        const div = document.createElement('div')
         div.style.border= '1px solid black';
          div.style.width='50px'; 
          div.style.height= '50px';
          div.style.display = 'flex'
          div.style.justifyContent='center'
          div.style.alignItems='center'
        div.innerHTML = inputvalue[i]
        boxes.appendChild(div)
    }
    
})