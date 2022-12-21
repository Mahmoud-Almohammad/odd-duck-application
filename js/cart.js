/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  cart.updateCounter();
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
let tableBody = document.querySelector('#cart tbody');

for(let i in cart.items){
   let itemsRows = document.createElement('tr');

   let deleteLink = document.createElement('td');
   deleteLink.textContent = 'x';
   deleteLink.setAttribute('a', '');
   deleteLink.id = i;
   deleteLink.classList.add('remover');

   let itemQuantity = document.createElement('td');
   itemQuantity.textContent = cart.items[i].quantity;

   let itemName = document.createElement('td');
   itemName.textContent = cart.items[i].product;
     
   tableBody.appendChild(itemsRows);
   itemsRows.appendChild(deleteLink);
   itemsRows.appendChild(itemQuantity);
   itemsRows.appendChild(itemName);

}
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
event.preventDefault();

if (event.target.classList.contains('remover')){
cart.removeItem(parseInt(event.target.id));
}
    cart.saveToLocalStorage();
    renderCart();
}
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

// This will initialize the page and draw the cart on screen
renderCart();