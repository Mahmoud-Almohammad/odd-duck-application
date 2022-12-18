/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}
 
function clearCart() {
    let tableRows = document.querySelectorAll('#cart tbody tr');

    for(let i = 0; i <= tableRows.length; i++){
        if(tableRows[i]){
            tableRows[i].remove();
        }
    }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
let tableBody = document.getElementsByTagName('tbody');

for(let i in Cart.items){
    itemsRows = document.createElement('tr');
    tableBody.appendChild(itemsRows);

let deleteLink;
let itemQuantity;
let itemName;
    for(let j = 0; j < 3; i++){
        deleteLink = document.createElement('td');
        deleteLink[j].itemsRows[i].textContent = 'x';
        deleteLink.id = i;

itemQuantity = document.createElement('td');
itemQuantity[j].itemsRows[i].textContent = cart.items[i].quantity;

itemName = document.createElement('td');
itemName[j].itemsRows[i].textContent = cart.items[i].product;
        
        
    }
    tableRows.appendChild(deleteLink);
    tableRows.appendChild(itemQuantity);
    tableRows.appendChild(itemName);

}
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
event.preventDefault();
console.log(event);

if(cart.items !== null){
    cart.removeItem(parseInt(event.target.id))
    Cart.prototype.saveToLocalStorage();
    renderCart();
}
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();