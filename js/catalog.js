/* global Product, Cart */

'use strict';

const cart = localStorage.cart ? new Cart(JSON.parse(localStorage.cart)) : new Cart([]);



// Set up an empty cart for use on this page.
state.cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  const selectElement = document.getElementById('items');
  for (let i in state.allProducts) {
let options = document.createElement('option');
options.textContent = state.allProducts[i].name;
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
  state.cart.saveToLocalStorage();
  Cart.updateCounter();
  updateCartPreview();

}
let selectedItem;
let selectedQuantity;

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {

selectedItem = document.getElementById('items').name;
selectedQuantity = document.getElementById('quantity').quantity;
cart.addItem(selectedItem, selectedQuantity);


  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
Cart.updateCounter = function () {
    document.getElementById('itemCount').textContent = '(' + cart.items.length + ')';
  };

  if(cart.items){
    Cart.updateCounter();
    for(let i = 0; i < cart.items.length; i++){
        updateCartPreview(cart.items[i]);
    }
  }

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  let cartContents = document.getElementById('cartContents');
  let heading = document.createElement('h2');
  heading.textContent = selectedQuantity + ' ' + selectedItem;
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