import { updateIncrement, getCounter, setCounter, getSaveInfo } from './main.js';

let buttonList;
let buttonData;

fetch('./buttonData.json').then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
}).then(data => {
    init(data);
})
.catch(error => {
    console.error('Error fetching buttonData.json:', error);
});

function init(data) {
    buttonList = document.querySelectorAll('.updateBtn');
    buttonData = data;
    checkSaveInfo();

    Array.from(buttonList).forEach(button => {
        button.addEventListener('click', () => {
            if (getCounter() < buttonData[button.id].cost) return;
            setCounter(buttonData[button.id].cost * -1);
            buttonData[button.id].level++;
            let partialInc = Math.floor(buttonData[button.id].level/10)/2;
            let increment = buttonData[button.id].amount + Math.floor(buttonData[button.id].amount * partialInc);

            updateIncrement(increment);
            buttonData[button.id].total += increment;
            if (buttonData[button.id].level%10 === 0) {
                buttonData[button.id].cost += Math.floor(buttonData[button.id].cost * 1.15);
            }

            updateText(button);
        });
    });
}

function updateText(button) {
    document.getElementById(button.id).querySelector('.cost').textContent = buttonData[button.id].cost;
    document.getElementById(button.id).querySelector('.level').textContent = buttonData[button.id].level;
    document.getElementById(button.id).querySelector('.amount_total').textContent = buttonData[button.id].total;

    let nextPartialInc = Math.floor((buttonData[button.id].level + 1)/10)/2;
    let nextIncrement = buttonData[button.id].amount + Math.floor(buttonData[button.id].amount * nextPartialInc);
    document.getElementById(button.id).querySelector('.next_inc').textContent = nextIncrement;
}

function checkSaveInfo() {
    let saveInfo = getSaveInfo();
    if (saveInfo) {
        Object.entries(saveInfo).forEach(([key, value]) => {
            if (buttonData[key]) {
                buttonData[key].total = value.total;
                buttonData[key].level = value.level;
                buttonData[key].cost = value.cost;
                updateText(document.getElementById(key));
            }
        });
    } 
}

export function getButtonData() {
    return buttonData;
}