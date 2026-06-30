import { getButtonData } from "./button.js";

let saveInfo;
const logon = Math.floor(Date.now() / 1000);

let _counter;
let _counterIncrement;

if (!localStorage.getItem('saveInfo')) {
    saveInfo = {
        counter: 0,
        counterIncrement: 1,
        lastLogon: logon
    }
} else {
    saveInfo = JSON.parse(localStorage.getItem('saveInfo'));
}

init();

function init() {
    _counter = saveInfo.counter + Math.floor((logon - saveInfo.lastLogon) * saveInfo.counterIncrement);
    _counterIncrement = saveInfo.counterIncrement;
    document.getElementsByClassName('counterNum')[0].textContent = _counterIncrement;

    setInterval(updater, 250);
    setInterval(save, 10 * 1000);
}

function updater() {
    _counter += _counterIncrement/4;
    document.getElementById('counter').textContent = Math.floor(_counter);
}

export function updateIncrement(increment) {
    _counterIncrement += increment;
    document.getElementsByClassName('counterNum')[0].textContent = _counterIncrement;
}

export function getCounter() {
    return _counter;
}

export function setCounter(cost) {
    _counter += cost;
}

export function getSaveInfo() {
    return saveInfo;
}

export function save() {
    saveInfo.counter = _counter;
    saveInfo.counterIncrement = _counterIncrement;
    saveInfo.lastLogon = Math.floor(Date.now() / 1000);
    const buttonData = getButtonData();
    Object.entries(buttonData).forEach(([buttonId, data]) => {
        const buttonSave = {
            total: data.total,
            level: data.level,
            cost: data.cost
        }
        saveInfo[buttonId] = buttonSave;
    });
    console.log('saved');
    localStorage.setItem('saveInfo', JSON.stringify(saveInfo));
}