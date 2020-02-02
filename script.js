alert('welcome to the budget calculator')

let budgetButton = document.getElementById('budget_button');

let expenseButton = document.getElementById('expense_button');

let resetButton = document.getElementById('reset_button');

budgetButton.addEventListener("click", addBudget);

expenseButton.addEventListener('click', addExpense);

resetButton.addEventListener('click', reset);

function addBudget() {
    alert('you selected the Add Budget button');
    let budgetValue = document.getElementById('budget');
    let budgetInput = document.getElementById('budget_input_value');
    budgetValue.innerHTML = budgetInput.value;

    calculateBalance();

    budgetInput.value = ''
}

function addExpense() {
    alert('you selected the Add expense button');



    addToExpenseList();



    displayTotalExpense();

    calculateBalance();
    let expenseTextInput = document.getElementById('expense_det');
    let expenseValueInput = document.getElementById('expense_input_value');

    expenseTextInput.value = ''
    expenseValueInput.value= ''





}

function calculateBalance() {
    let budgetValue = document.getElementById('budget');
    let expenseValue = document.getElementById('expense');
    let balanceValue = document.getElementById('balance');
    let _balance = parseFloat(budgetValue.innerHTML) - parseFloat(expenseValue.innerHTML);
    balanceValue.innerHTML = _balance;
}

function addToExpenseList() {
    let expenseTextInput = document.getElementById('expense_det').value;
    let expenseValueInput = document.getElementById('expense_input_value').value;
    let expenseTable = document.getElementById('expense_table')
    let expenseRow = document.createElement('tr');
    let expenseItem = document.createElement('td');
    let expenseItem2 = document.createElement('td');
    let expenseItem3 = document.createElement('td');
    let expenseTextNode = document.createTextNode(expenseTextInput);
    let expenseValueNode = document.createTextNode(expenseValueInput);
    let removeButton = document.createElement('button');
    let buttonText = document.createTextNode('Remove');

    removeButton.appendChild(buttonText);
    expenseItem.appendChild(expenseTextNode);
    expenseItem2.appendChild(expenseValueNode);
    expenseItem3.appendChild(removeButton);

    expenseRow.appendChild(expenseItem);
    expenseRow.appendChild(expenseItem2);
    expenseRow.appendChild(expenseItem3);

    expenseTable.appendChild(expenseRow);

    removeButton.addEventListener('click', deleteExpenseItem);
    function deleteExpenseItem() {
        expenseRow.classList.add("delete");
        //document.getElementById("row1").remove();
        apple = document.getElementsByClassName('delete')
        apple.remove();
        displayTotalExpense();
        calculateBalance();

    }
}

function displayTotalExpense() {
    arr = document.getElementById('expense_table');
    //alert(arr)
    sum = 0;
    for (let i = 1; i < arr.rows.length; i++) {
        sum = sum + parseFloat(arr.rows[i].cells[1].innerHTML);
    }
    let expenseValue = document.getElementById('expense');
    expenseValue.innerHTML = sum;

}

function reset() {
    alert('you have clicked the reset button')
    let budgetValue = document.getElementById('budget');
    let expenseValue = document.getElementById('expense');
    let balanceValue = document.getElementById('balance');
    budgetValue.innerHTML = 0
    expenseValue.innerHTML = 0
    balanceValue.innerHTML = 0

    let expenseTextInput = document.getElementById('expense_det');
    let expenseValueInput = document.getElementById('expense_input_value');
    let budgetInput = document.getElementById('budget_input_value');

    expenseTextInput.value = ''
    expenseValueInput.value= ''
    budgetInput.value = ''

    arr = document.getElementById('expense_table');
    length = arr.rows.length
    for (let i = 1; i < length; i=i+1) {
        arr.deleteRow(1);
    }
}
