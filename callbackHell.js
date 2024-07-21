const cart = ["Shoes", "Pants", "Kurta"]

api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet();
        });
    });
})

// above code is a example of callback hell as there are many callback functions -> this structure is also known as pyramid of doom 