const bill = document.querySelector('#bill');
const cash = document.querySelector('#cash');
const next = document.querySelectorAll('.btn')[0];
const check = document.querySelectorAll('.btn')[1];

const cashDiv = document.querySelectorAll('.input-element')[1];

const message = document.querySelector('.message');
const table = document.querySelector('.overflow-table');
const noOfNotes = document.querySelectorAll('.no-of-notes');

let billAmount;
let cashPaid;
const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

const nextHandler = () => {
    if(Number(bill.value) > 0) {
        billAmount = Number(bill.value);
        cashDiv.classList.remove('hidden');
        check.classList.remove('hidden');
        next.classList.add('hidden');
        message.classList.add('hidden');
    } else {
        message.classList.remove('hidden');
        message.textContent = "Please enter bill above 0!"
        message.classList.add('red-border');
        bill.value = '';
    } 
}

const calculateChange = (changeRequired) => {
    table.classList.remove('hidden');
    for(let i=0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(changeRequired/availableNotes[i]);
        changeRequired %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
        if(numberOfNotes) noOfNotes[i].classList.add('green');
    }
}

const checkHandler = () => {
    if(Number(cash.value) >= billAmount) {
        cashPaid = Number(cash.value);
        const changeRequired = cashPaid - billAmount;
        calculateChange(changeRequired);
        message.classList.remove('hidden');
        message.classList.add('green-border');
        message.innerText = "This the minimum change you need to return 👇";

        // checkalgo(billAmount, cashPaid)
        // update the table
    } else {
        message.classList.remove('hidden');
        message.textContent = "Please pay amount EQUAL or GREATER than your Bill.";
        message.classList.add('red-border');
    }
}


next.addEventListener('click', nextHandler);
check.addEventListener('click', checkHandler);