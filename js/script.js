"use strict";

let ordersArr = [100, 112.2, 301.1];
let discountsArr = [10.0, 0.0, 0.0];

function OrdersSum(order, discount) {

    let sum = 0;

    order.forEach((currentValue, i, order) => {
        if (discount[i] == 0.0 || discount[i] == undefined || discount[i]==null) {
            sum += currentValue;
        } else {
            sum += currentValue - ((currentValue * discount[i]) / 100);
        }
    });

    return sum;
}

console.log(OrdersSum(ordersArr, discountsArr));