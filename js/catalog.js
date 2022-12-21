/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = localStorage.cart ? new Cart(JSON.parse(localStorage.cart)) : new Cart([]);
// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
let options = document.createElement('option');
options.textContent = Product.allProducts[i].name;
selectElement.appendChild(options);
  }
}
// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  cart.updateCounter();
  updateCartPreview(cart.items[cart.items.length - 1]); 
}
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {

let selectedItem = document.getElementById('items').value;
let selectedQuantity = document.getElementById('quantity').value;
cart.addItem(selectedItem, selectedQuantity);
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart


  if(cart.items){
  cart.updateCounter();
    for(let i = 0; i < cart.items.length; i++){
        updateCartPreview(cart.items[i]);
    }
  }

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(item) {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  let quantity = item.quantity;
  let product = item.product;
  let cartContents = document.getElementById('cartContents');
  let heading = document.createElement('h2');
  heading.textContent = quantity + ' ' + product;
  cartContents.appendChild(heading)
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
