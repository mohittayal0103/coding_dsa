const cart = ["Shoes", "Pants", "Kurta"];

const promise = createOrder(cart);
console.log(promise);

promise.then(function (orderId) {
  console.log(orderId);
});

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
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return true;
}
