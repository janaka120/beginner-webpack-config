import faker from "faker";

document.querySelector('#main-cart').innerHTML = `<div>Your cart has ${faker.random.number()} items</div>`;