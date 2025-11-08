// Real life usecase
// 1 - Data encapsulation / Private variables

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposite(amount) {
      balance += amount;
    },
    withdrawl(amount) {
      balance -= amount;
    },
    printBalance() {
      console.log(balance);
    },
  };
}

let account1 = createBankAccount(1000);
account1.printBalance();
account1.deposite(500);
account1.printBalance();
account1.withdrawl(50);
account1.printBalance();

// Here balance is private — it can’t be accessed directly,
// only via methods that close over it.
