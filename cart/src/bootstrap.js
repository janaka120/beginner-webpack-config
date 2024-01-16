import faker from "faker";

const mount = (el) => {
    el.innerHTML = `<div>Your cart has ${faker.random.number()} items</div>`;
}

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-mode-cart');
    if(el) {
        mount(el);
    }
}

export {mount};
