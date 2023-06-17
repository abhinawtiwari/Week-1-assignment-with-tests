/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  // console.log('transactions are: ', transactions)
  const result = {};
  transactions.forEach(obj => {
    if (obj.category in result) {
      result[obj.category] = result[obj.category] + obj.price;
    } else {
      result[obj.category] = obj.price;
    }
  });

  res = [];
  for (property in result) {
    res.push({ category: property, totalSpent: result[property]});
  }

  return res;
}

module.exports = calculateTotalSpentByCategory;
