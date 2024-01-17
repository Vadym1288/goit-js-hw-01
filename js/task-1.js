function makeTransaction(quantity, pricePerDroid) {
    const makeTransaction = (quantity * pricePerDroid);
    console.log(`You ordered ${quantity} droids worth ${makeTransaction} credits!`);
  return makeTransaction;
   }
  makeTransaction(5, 3000)
  makeTransaction(3, 1000)
  makeTransaction(10, 500)