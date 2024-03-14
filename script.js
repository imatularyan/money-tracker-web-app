// Expenses array to store each expense
let expenses = [];
// Variable to keep track of the total amount of all expenses
let totalAmount = 0;

// Initializing variables to select HTML elements for interaction
const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const expenseTableBody = document.getElementById("expense-table-body");
const totalAmountCell = document.getElementById("total-amount");

// Adding an event listener for the Add button
addBtn.addEventListener("click", function () {
  // Getting values from the form inputs
  const category = categorySelect.value;
  const amount = Number(amountInput.value);
  const date = dateInput.value;

  // Validations for category, amount, and date inputs
  if (category === "") {
    alert("Please select a category");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }
  if (date === "") {
    alert("Please select a date");
    return;
  }

  // Adding the new expense to the expenses array
  expenses.push({ category, amount, date });

  // Updating the total amount
  totalAmount += amount;
  totalAmountCell.textContent = totalAmount;

  // Creating a new row in the expense table
  const newRow = expenseTableBody.insertRow();

  // Inserting cells for category, amount, date, and the delete button
  const categoryCell = newRow.insertCell();
  const AmountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  // Creating the delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    // Finding the index of the expense to delete
    let expenseIndex = expenses.indexOf(expense);
    expenses.splice(expenseIndex, 1);

    // Updating the total amount after deletion
    totalAmount -= expense.amount;
    totalAmountCell.textContent = totalAmount;

    // Removing the row from the table
    expenseTableBody.removeChild(newRow);
  });

  // Adding the expense details to the table cells
  const expense = expenses[expenses.length - 1];
  categoryCell.textContent = expense.category;
  AmountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
});

for (const expense of expenses) {
  // Updating the total amount
  totalAmount += amount;
  totalAmountCell.textContent = totalAmount;

  // Creating a new row in the expense table
  const newRow = expenseTableBody.insertRow();

  // Inserting cells for category, amount, date, and the delete button
  const categoryCell = newRow.insertCell();
  const AmountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  // Creating the delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    // Finding the index of the expense to delete
    let expenseIndex = expenses.indexOf(expense);
    expenses.splice(expenseIndex, 1);

    // Updating the total amount after deletion
    totalAmount -= expense.amount;
    totalAmountCell.textContent = totalAmount;

    // Removing the row from the table
    expenseTableBody.removeChild(newRow);
  });

  // Adding the expense details to the table cells
  const expense = expenses[expenses.length - 1];
  categoryCell.textContent = expense.category;
  AmountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
}
