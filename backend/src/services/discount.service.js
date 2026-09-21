export const calculateDiscount = (price, discountPercentage) => {
    const discountAmount = (price * discountPercentage) / 100;

    const finalPrice = price - discountAmount;

    return {
        originalPrice: price,
        discountPercentage,
        discountAmount,
        finalPrice
    };
};