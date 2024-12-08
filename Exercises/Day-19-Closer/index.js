// Exercises: Level 1
// Create a closure which has one inner function
// &&
// Exercises: Level 2
// Create a closure which has three inner functions
// const opration = () => {
//   const num1 = 50;
//   const add = () => {
//     const num2 = 100;
//     return num1 + num2;
//   };
//   const sub = () => {
//     const num2 = 20;
//     return num1 - num2;
//   };

//   return {
//     add: add(),
//     sub: sub(),
//   };
// };

// console.log(opration());

// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.
// It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions.
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = () => {
  first_name = "fistum";
  last_name = "helina";
  incomes = [200, 100, 23, 999, 898, 700];
  expenses = [500, 160, 3, 99, 128, 600];

  const totalIncome = () => {
    let totali = 0;
    for (let i = 0; i < incomes.length; i++) {
      totali += incomes[i];
    }
    console.log(`tottal income = ${totali}`);
  };

  const totalExpense = () => {
    let totale = 0;
    for (let i = 0; i < expenses.length; i++) {
      totale += expenses[i];
    }
    console.log(`tottal expense = ${totale}`);
  };

  //   totalExpense;
  //   accountInfo;
  //   addIncome;
  //   addExpense;
  //   accountBalance;

  return {
    a: totalIncome(),
    b: totalExpense(),
  };
};

personAccount();
