const chai = require('chai')
const expect = chai.expect

const accTypeChecker = require('../index')

const accountBalanceHistoryTest1 = [
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

  const accountBalanceHistoryTest2 = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 97 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 229 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 145 },
      },
    }
  ]

describe("accTypeChecker accountTypeChecker()", () => {
    
    it("returns A when the balance varies month by month", () => {
        expect(accTypeChecker(accountBalanceHistoryTest2)).to.be.equals("A")
	})	

    it("returns B when the balance amount goes down by the same value each month", ()=> {
        expect(accTypeChecker(accountBalanceHistoryTest1)).to.be.equals("B")
    })
})
