const faker = require('faker')
const { writeFile } = require('fs')

let counter = 0

const data = []

while(counter < 100) {
    let product = {
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription()
    }

    data.push(product)

    counter++
}

const rawData = JSON.stringify(data, 0, 2)

writeFile('./src/fakeData.json', rawData, 'utf-8', console.error)