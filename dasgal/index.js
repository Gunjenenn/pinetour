
// 1. Double every number.
const nums = [1, 2, 3, 4, 5];
const numss = nums.map(nums => nums*2 )
console.log(numss)
// Expected: [2, 4, 6, 8, 10]
// your code here


// 2. Turn each temperature into a string with "°C".
const temps = [12, 5, 8, 3, 20];
let celc = temps.map(temps => temps + "°C")
console.log(celc)
// Expected: ["12°C", "5°C", "8°C", "3°C", "20°C"]
// your code here


// 3. Get the length of each word.
const words = ["cat", "hello", "hi", "banana"];
const test = words.map(words => words.length )
console.log(test)


// Expected: [3, 5, 2, 6]
// your code here


// 4. Capitalize the first letter of each word.
const names = ["apple", "banana", "cherry"];
c
// Expected: ["Apple", "Banana", "Cherry"]
// your code here


// 5. Number each task starting from 1:  "<i>. <task>"
//    (hint: map's second parameter is the index)
const tasks = ["wake up", "brush teeth", "code"];
const sum = tasks.map( (tasks, index) => index+1 +'. '+ tasks) 
console.log(sum)
// Expected: ["1. wake up", "2. brush teeth", "3. code"]
// your code here


// 6. Add 10% tax to each price, rounded to a whole number.
const prices = [100, 250, 999, 1500];
const prices1 = prices.map( prices => Math.round(prices+ prices*0.1))
console.log(prices1)
// Expected: [110, 275, 1099, 1650]
// your code here


// 7. Convert each score to "pass" (>= 60) or "fail".
const scores = [45, 88, 60, 30, 72];
const scores1 = scores.map((score, index)=> {
    if( score>=60 ) {
        return 'pass'
    }else {
        return ' fail'
    }
} ); console.log(score)
// } console.log(scores1)
// Expected: ["fail", "pass", "pass", "fail", "pass"]
// your code here

var products = [
  { name: "Milk", price: 2500, category: "dairy", inStock: true },
  { name: "Bread", price: 1200, category: "bakery", inStock: true },
  { name: "Cheese", price: 8000, category: "dairy", inStock: false },
  { name: "Apple", price: 500, category: "fruit", inStock: true },
  { name: "Cake", price: 15000, category: "bakery", inStock: false },
  { name: "Banana", price: 800, category: "fruit", inStock: true }
];

// Use .map() to return an array of just the product names.
// Use .map() to return an array of just the prices.
// Use .map() to return an array of names in UPPERCASE.
// Use .map() to return prices increased by 10% (price * 1.1).
// Use .map() to return an array of strings like "Milk - 2500".

const res = products.map((product, index) => {
    return product.name; 
});

console.log(res); 

const res1 = products.map((product, index)=>{
 return product.price 
})
console.log(res1)


const uppercaseNames = products.map((product, index) => {
  return product.name.toUpperCase();
});

console.log(uppercaseNames);


const increasedPrice = products.map((product, index)=> {
    return Math.floor(product.price * 1.1)
}
); console.log(increasedPrice)

const namesprice = products.map((product, index) => {
    return product.name + " - " + product.price;
});
console.log(namesprice)


var products = [
  { name: "Milk", price: 2500, category: "dairy", inStock: true },
  { name: "Bread", price: 1200, category: "bakery", inStock: true },
  { name: "Cheese", price: 8000, category: "dairy", inStock: false },
  { name: "Apple", price: 500, category: "fruit", inStock: true },
  { name: "Cake", price: 15000, category: "bakery", inStock: false },
  { name: "Banana", price: 800, category: "fruit", inStock: true }
];


// Use .filter() to return only products that are inStock.
// Use .filter() to return only products cheaper than 2000.
// Use .filter() to return only products in the "dairy" category.
// Use .filter() to return products that are NOT in stock.
// Use .filter() to return products priced between 1000 and 10000.

const instock = products.filter((product,index)=>{
    return product.inStock === true 
}); console.log(instock)

const cheaperproduct = products.filter((product, index)=>{
    return product.price < 2000
}); console.log(cheaperproduct)


const dairyProducts = products.filter((product, index) => {
    return product.category === "dairy";
});
console.log(dairyProducts);


const notinstock = products.filter((product,index)=>{
    return product.inStock === false 
}); console.log(notinstock)

const priceproduct = products.filter((product,index)=>{
    return product.price>1000 && product.price < 10000 
}); console.log(priceproduct)
 


// const orders = [
//   { id: 1, customer: "Bat",  item: "Laptop",  qty: 1, price: 1200000, city: "Ulaanbaatar", paid: true },
//   { id: 2, customer: "Sara", item: "Mouse",   qty: 4, price: 25000,   city: "Darkhan",     paid: false },
//   { id: 3, customer: "Tem",  item: "Keyboard",qty: 2, price: 80000,   city: "Ulaanbaatar", paid: true },
//   { id: 4, customer: "Bat",  item: "Monitor", qty: 3, price: 450000,  city: "Erdenet",     paid: true },
//   { id: 5, customer: "Nara", item: "Cable",   qty: 10,price: 8000,    city: "Darkhan",     paid: false },
//   { id: 6, customer: "Sara", item: "Laptop",  qty: 2, price: 1200000, city: "Ulaanbaatar", paid: true }
// ];

// Return an array of order totals (qty * price) for each order.
// Return strings like "Order 1: Laptop x1" for every order.
// Return each order's total, but add 10% tax (qty * price * 1.1).
// Return an array of objects with only { customer, total } for each order (total = qty × price).

const price = orders.map((order,index)=>{
    return order.qty * order.price
}); console.log(price)


const order = orders.map((order,index)=>{
    return "order" + order.id + ": " + order.item + " x" + order.qty
});
console.log(order)


const price1 = orders.map((order,index)=>{
    return Math.round(order.qty * order.price * 1.1)
}); console.log(price1)

const total = orders.map((order, index)=> {
    return order.customer + ':'+  order.qty * order.price});
    console.log(total)

//     Return orders that are unpaid.
// Return orders where the total (qty * price) is over 500000.
// Return orders from Ulaanbaatar that are paid.
// Return orders where qty is 3 or more AND the item is not "Cable".
// Return orders NOT from Darkhan.

// const orders = [
//   { id: 1, customer: "Bat",  item: "Laptop",  qty: 1, price: 1200000, city: "Ulaanbaatar", paid: true },
//   { id: 2, customer: "Sara", item: "Mouse",   qty: 4, price: 25000,   city: "Darkhan",     paid: false },
//   { id: 3, customer: "Tem",  item: "Keyboard",qty: 2, price: 80000,   city: "Ulaanbaatar", paid: true },
//   { id: 4, customer: "Bat",  item: "Monitor", qty: 3, price: 450000,  city: "Erdenet",     paid: true },
//   { id: 5, customer: "Nara", item: "Cable",   qty: 10,price: 8000,    city: "Darkhan",     paid: false },
//   { id: 6, customer: "Sara", item: "Laptop",  qty: 2, price: 1200000, city: "Ulaanbaatar", paid: true }
// ];

const unpaid = orders.filter((order,indexc)=>{
    return order.paid === false
}); console.log(unpaid)


const overprice = orders.filter((order,index)=>{
    return order.qty * order.price > 500000
});
console.log(overprice)

const paidub = orders.filter((order,index)=>{
    return order.city === 'Ulaanbaatar' && order.paid=== true});
    console.log(paidub)

const aa = orders.filter((order,index)=>{
    return order.qty >=3 && order.item==="Cable"
}); console.log(aa)

const notdarkhan = orders.filter((order,index)=>{
    return order.city!== "Darkhan"
});console.log(notdarkhan)











var orders = [
  {
    id: 1,
    customer: { name: "Bat", city: "Ulaanbaatar", vip: true },
    items: [
      { product: "Laptop", qty: 1, price: 1200000 },
      { product: "Mouse",  qty: 2, price: 25000 }
    ],
    paid: true
  },
  {
    id: 2,
    customer: { name: "Sara", city: "Darkhan", vip: false },
    items: [
      { product: "Keyboard", qty: 3, price: 80000 }
    ],
    paid: false
  },
  {
    id: 3,
    customer: { name: "Tem", city: "Ulaanbaatar", vip: false },
    items: [
      { product: "Monitor", qty: 2, price: 450000 },
      { product: "Cable",   qty: 5, price: 8000 }
    ],
    paid: true
  },
  {
    id: 4,
    customer: { name: "Nara", city: "Erdenet", vip: true },
    items: [
      { product: "Laptop", qty: 2, price: 1200000 }
    ],
    paid: true
  },
  {
    id: 5,
    customer: { name: "Bat", city: "Ulaanbaatar", vip: true },
    items: [
      { product: "Cable", qty: 10, price: 8000 }
    ],
    paid: false
  }
];


// Return an array of just the customer names (item.customer.name).
// Return strings like "Bat from Ulaanbaatar" for each order.
// Return an array of how many products are in each order (item.items.length).

const name1 = orders.map((order,index)=>{
    return order.customer.name
});console.log(name1) 


const namefrom = orders.map((order,index)=>{
    return order.customer.name + ' from ' + order.customer.city 
});console.log(namefrom)


const bbb = orders.map((order,index)=>{
    return order.items[1]
});console.log(bbb)




// Return each order's grand total. Each order has multiple items, so inside your .map() you need to sum qty * price across item.items. Return objects like { id, total } 


const orderTotals = orders.map((order, index) => {
  return {
    id: order.id,
    total: order.items.reduce((sum, item) => sum + (item.qty * item.price), 0)
  };
});

console.log(orderTotals);




