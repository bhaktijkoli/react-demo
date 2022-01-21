const fs = require('fs')
const path = require('path');
const faker = require('@faker-js/faker');
const categories = require('../src/data/categories.json');
const sizes = require('../src/data/sizes.json')
const products = [];
for (let i = 0; i < 50; i++) {
  products.push({
    name: faker.commerce.productName(),
    price: parseInt(parseInt(faker.commerce.price(10, 2000)).toFixed(0)),
    company: faker.company.companyName(),
    highlight: faker.datatype.boolean(),
    category: categories[Math.floor(Math.random() * categories.length)].label,
    size: sizes[Math.floor(Math.random() * sizes.length)],
    images: [
      faker.image.fashion(),
      faker.image.fashion(),
      faker.image.fashion(),
    ]
  })
}
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'products.json'), JSON.stringify(products))
