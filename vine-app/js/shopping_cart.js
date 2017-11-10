"use strict";
if (document.readyState === 'complete' || document.readyState !== 'loading') {
    eventHandler();
} else {
    document.addEventListener('DOMContentLoaded', eventHandler);
}


function getCartData() {
    return JSON.parse(localStorage.getItem('vine-app_cart'));
}

function setCartData(data) {
    localStorage.setItem('vine-app_cart', JSON.stringify(data));
    return true;
}

function clearCartData() {
    localStorage.removeItem('vine-app_cart');
    document.getElementsByClassName('shopping_cart')[0].innerHTML = "";
}

function Show_Shopping_Cart() {
    
            var cart_data = getCartData();
            if (cart_data) {
    
                var cart = document.getElementsByClassName('shopping_cart')[0];
                var item_div, item_name, item_year, item_count, item_total, item_price;
                for (var item in cart_data) {
                    item_div = document.createElement('div');
    
                    item_name = document.createElement('p');
                    item_name.textContent = cart_data[item][0];
    
                    item_price = document.createElement('p');
                    item_price.textContent = cart_data[item][1];
    
                    item_year = document.createElement('p');
                    item_year.textContent = cart_data[item][2];
    
                    item_count = document.createElement('p');
                    item_count.textContent = cart_data[item][3];
    
                    item_total = document.createElement('p');
                    item_total.textContent = cart_data[item][1][0] + cart_data[item][1].slice(1) * cart_data[item][3];
    
                    item_div.appendChild(item_name);
                    item_div.appendChild(item_year);
                    item_div.appendChild(item_price);
                    item_div.appendChild(item_count);
                    item_div.appendChild(item_total);
    
                    cart.appendChild(item_div);
    
    
                }
            } else {
                alert("Shopping cart is empty");
            }
        }

        Show_Shopping_Cart();

function eventHandler() {

    document.getElementById('clear_cart').addEventListener('click', clearCartData);
}