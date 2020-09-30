const data = [
    {
        product_name: "Nail",
        count: 67,
        price_for_all: 364
    },
    {
        product_name: "Hammer",
        count: 43,
        price_for_all: 453
    },
    {
        product_name: "Tile",
        count: 23,
        price_for_all: 553
    }
];

// Подсчитать общее количество товаров и цену
// { count: 133, price: 1370 }

const reducer = (i, j) => i + j;

const countSum = data.map(i => i.count).reduce(reducer);
const priceSum = data.map(i => i.price_for_all).reduce(reducer);
console.log(countSum);
console.log(priceSum);