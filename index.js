const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    }
  ]

  const accountTypeChecker = (accountBalanceHistory) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/
  
    // Write your logic here  - No pressure 😁 //
    let result;    
    let amounts =[];
    let diff= 0;

    accountBalanceHistory.sort((a,b)=>a.account.balance.amount-b.account.balance.amount);
    for(let i = 0; i < accountBalanceHistory.length; i++)
    {
        let account = accountBalanceHistory[i].account;
        let balance = account.balance.amount;   
        //console.log("balance",balance); 
        amounts.push(balance-diff); 
        diff = balance;          
    }   
    //console.log("amounts",amounts);
    const toFindDuplicates = amounts => amounts.filter((item, index) => amounts.indexOf(item) !== index)
    const duplicateElements = toFindDuplicates(amounts);
    //console.log("duplicateElements",duplicateElements);
    if(duplicateElements.length === 0) 
    {
        result = true;
    }
    return result ? "A" : "B";    
  };

  let final = accountTypeChecker(accountBalanceHistory);
  console.log(final);

  module.exports = accountTypeChecker;