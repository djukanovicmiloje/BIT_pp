const products = [{ name: "Banana", price: 120.23, date: new Date() }, { name: "Orange", price: 100, date: new Date() }]
 
const productsWithTax = products.map(product => {
 
    const { price: prodPrice } = product;
 
    const newProd = {
        ...product,
        price: Number.parseFloat(prodPrice),
        priceWithTax: prodPrice * 1.2,
        tax: prodPrice * 0.2
    }
 
    return newProd
})
 
console.log(products);
console.log(productsWithTax);