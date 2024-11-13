const form =document.getElementById('loanCalculator');
form.addEventListener('submit', calculateLoan);


function calculateCompoundFactor(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
}

function calculateLoan(event){

    event.preventDefault();

    const loanAmt= document.getElementById('loanAmt').value;
    const interestRate =document.getElementById('interestRate').value;
    const loanTerm = document.getElementById('loanTerm').value;

    const monthlyInterestRate = interestRate/100/12;
    const numberOfPayments = loanTerm*12;

    const compoundFactor = calculateCompoundFactor(1 + monthlyInterestRate, numberOfPayments);

    const monthlyPayment = (loanAmt * monthlyInterestRate * compoundFactor) / (compoundFactor - 1);

    
    const result= document.getElementById('result');
   // newParagraph.textContent=`Monthly Payment : ${monthlyLoan}`;
    result.textContent=`Monthly Payment: $${monthlyPayment}`;
}

