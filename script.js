const countvalue = document.querySelector('#counter');

const increment = () => {
    let value = parseInt(countvalue.innerText);
    value += 1;
    countvalue.innerText = value;
};

const decrement = () => {
    let value = parseInt(countvalue.innerText);
    if (value > 0)
        value -= 1;
    countvalue.innerText = value;
};