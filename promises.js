const cart = ["Shoes", "Pants", "Kurta"];

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
        return paymentInfo;
    })
    .then(function(paymentInfo){
        return showOrderSummary(paymentInfo);
    })
    .then(function(orderSummary){
        console.log(orderSummary);
        return orderSummary;
    })
    .then(function(orderSummary){
        return updateWallet(orderSummary);
    })
    .then(function(walletInfo){
        console.log(walletInfo);
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(){
        setTimeout(() => {
            console.log('No matter what i will always show up!');
        }, 2000);
    })

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid!");
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 2000);
    }
  });

  return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            resolve('Payment Successfull!');
          }, 2000)
    })
}

function showOrderSummary(paymentInfo){
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            resolve('Order of 3 producst have been placed.');
          }, 2000)
    })
}

function updateWallet(walletInfo){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('Wallet Balance: 500 Rupees.')
        },2000)
    })
}

function validateCart(cart) {
  return true;
}
