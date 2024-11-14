const button = document.querySelector('#btn');
button.addEventListener('click', handleClick);

function handleClick(event){
    
    console.log('the button works');
    console.log('Event object',event)
    console.log('Event type:',event.type);
    console.log('target element', event.target);
}

// Register a submit event listener on a form
const form = document.getElementById('myForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    console.log(`Submitted name: ${name}`);

    const inputText= document.getElementById('inputText');
    inputText.innerHTML = name;
    nameInput.value='';
}