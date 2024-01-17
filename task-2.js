function getShippingMessage(country, price, deliveryFee) {
    const getShippingMessage = (price + deliveryFee);
    console.log(`Shipping to ${country} will cost ${getShippingMessage} credits`);
        return getShippingMessage;
    }
    getShippingMessage ("Australia", 120, 50)
    getShippingMessage ("Germany", 80, 20)
    getShippingMessage ("Sweden", 100, 20)