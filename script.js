alert('welcome to the budget calculator')

let budgetButton = document.getElementById('budget_button');

let expenseButton = document.getElementById('expense_button');


budgetButton.addEventListener("click", addBudget);

expenseButton.addEventListener('click', addExpense);

function addBudget() {
    alert('you selected the Add Budget button');
    let budgetValue = document.getElementById('budget');
    let budgetInput = document.getElementById('budget_input_value');
    budgetValue.innerHTML = budgetInput.value;

    calculateBalance();
}

function addExpense() {
    alert('you selected the Add expense button');

    let expenseTextInput = document.getElementById('expense_det').value;
    let expenseValueInput = document.getElementById('expense_input_value').value;

    addToExpenseList();



    //displayTotalExpense();

    //calculateBalance();



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
}
