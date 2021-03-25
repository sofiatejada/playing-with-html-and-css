// 1. create variables for each element we need to interact with

const greetingInput = document.getElementById('greeting-input');
const changeButton = document.getElementById('change-button');
const greetingDisplay = document.getElementById('greeting-display');




// 2. add listeners for events we care about

changeButton.addEventListener ('click', () => {
    
    // 3. inside those listeners: do the action
    console.log(greetingInput.value);
    greetingDisplay.textContent = greetingInput.value;
});

    

