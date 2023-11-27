function calculate() {
  const income = parseFloat(document.getElementById('income').value);
  const expense1 = parseFloat(document.getElementById('expense1').value);
  const expense2 = parseFloat(document.getElementById('expense2').value);
  const expense3 = parseFloat(document.getElementById('expense3').value);
  const expense4 = parseFloat(document.getElementById('expense4').value);
  const expense5 = parseFloat(document.getElementById('expense5').value);
  const expense6 = parseFloat(document.getElementById('expense6').value);

  const totalExpense = expense1 + expense2 + expense3 + expense4 + expense5 + expense6;

  let balance = income - totalExpense;

  const resultElement = document.getElementById('result');

  if (totalExpense > balance) {
    resultElement.innerHTML = `<div style="background-color:whitesmoke;" ><img src="https://i.pinimg.com/originals/bb/b9/cc/bbb9cc769d570bacc7e4f4f82420aa2d.gif" width="100%" height="250px"> <br>
    TOTAL EXPENSE IS : $${totalExpense.toFixed(2)} <br> BALANCE AMOUNT IS : $0 <br> <h1 style="color:red;"> LIMIT COSTS ⚠️</h1> <br> <h3 style="color:black;">YOU HAVE TO SAVE MONEY</h3></div>`;
  } else {
    resultElement.innerHTML = `<div style="background-color:whitesmoke;" ><img src="https://media.tenor.com/7hq-VrYHlTkAAAAC/tic-tac-keep-it-up.gif" width="100%" height="250px"> <br>  
    TOTAL EXPENSE IS : $${totalExpense.toFixed(2)} <br> BALANCE AMOUNT IS : $${balance.toFixed(2)} <br> <h1 style="color:green;"> HOLD OVER🤝</h1> </div>`;
  }

  // Additional HTML
  resultElement.innerHTML += `<div class="card" style="width: 18rem; background-color:teal; margin-top:150px;">
    <img src="https://img.freepik.com/premium-vector/initial-mortgage-payment-mortgage-loan-low-interest-rate-profitable-purchase-real-estate-vector-flat-illustration_422344-1136.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text text-dark"> Total Expense: $${totalExpense.toFixed(2)} <br>
      Balance: $${balance.toFixed(2)}</p>
    </div>
  </div>`;
}

function logout() {
  window.location = "./index.html";
}
