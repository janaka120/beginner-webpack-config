import {mount as productsMount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartShow';

console.log('Container!');

const elProduct = document.querySelector('#main-products');
if(elProduct) {
    productsMount(elProduct);
}

const elCart = document.querySelector('#main-cart');
if(elCart) {
    cartMount(elCart);
}