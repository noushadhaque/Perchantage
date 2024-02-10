// expected perchantage calculator
document.getElementById('cal-btn').addEventListener('click', function(){
    const amountInput = document.getElementById("amount-input").value;
    const perchanInput = document.getElementById("perchan-input").value;

    const calculation = amountInput * perchanInput / 100;
    
    document.getElementById('result').innerText = calculation;
})

// perchantage calulator
document.getElementById('per-cal').addEventListener('click', function(){
    const oldInput = document.getElementById('old-input').value;
    const newInput = document.getElementById('new-input').value;

    const firstCal = newInput - oldInput;
    const secondCal = firstCal / oldInput;
    const finalCal = secondCal * 100;
    
    document.getElementById('output').innerText = finalCal;
})