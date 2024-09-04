//! SIDE NAV BURGER MENU MOBILE
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{
    edge: 'left'

    });
});





// !CAROUSEL
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        indicators: true  // Correctly setting the indicators option
    });
});



// ! SIDE BAR SHOPPING BAG
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the right sidenav for the shopping cart
    var cartElems = document.querySelectorAll('#shopping-cart-sidenav');
    var cartInstances = M.Sidenav.init(cartElems, {
        edge: 'right' //open from right
    });
});

// click to open bag
var shoppingBag = document.getElementById('shopping-bag');
shoppingBag.addEventListener('click', function() {
    var instance = M.Sidenav.getInstance(document.getElementById('shopping-cart-sidenav'));
    instance.open();  
});


//! SHOPPPING CART
// Initialize the shopping cart
let cart = [];  // starts with an empty array

// Function to update the cart display
function updateCartDisplay() {
    const cartSidenav = document.getElementById('shopping-cart-sidenav');
    cartSidenav.innerHTML = ''; // Clear previous items

    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('li'); //creates a li element for each item
        itemElement.innerHTML = `<a href="#!">${item.name} - ${item.price} GBP - Qty: ${item.quantity}</a>`;
        
        const removeButton = document.createElement('a');
        removeButton.href = "#!";
        removeButton.innerHTML = `<i class="material-icons">remove_circle</i>`;
        removeButton.classList.add('remove-item'); 
        removeButton.addEventListener('click', function() {
            removeFromCart(index);
        });
        itemElement.appendChild(removeButton);
        cartSidenav.appendChild(itemElement);

        total += item.price * item.quantity;
    });

    // Add total to the cart
    const totalElement = document.createElement('li');
    totalElement.innerHTML = `<a href="#!">Total: £${total.toFixed(2)}</a>`;
    cartSidenav.appendChild(totalElement);
}

// Function to add item to the cart
function addToCart(name, price) {
    const existingItemIndex = cart.findIndex(item => item.name === name);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1; // Increase quantity if item already in cart
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCartDisplay();
    updateShoppingBagCount();
}

// Function to remove item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from the cart
    updateCartDisplay();
    updateShoppingBagCount();
}

// Function to update the shopping bag item count
function updateShoppingBagCount() {
    const shoppingBag = document.getElementById('shopping-bag');
    const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    shoppingBag.textContent = `shopping bag (${itemCount})`;
}

// Add event listeners to the add-to-cart buttons
document.querySelectorAll('.btn-floating').forEach(button => {
    button.addEventListener('click', function(event) {
        const card = event.target.closest('.card');
        const name = card.querySelector('.card-content p').textContent;
        const priceText = card.querySelector('.card-content p:nth-child(2)').textContent;
        const price = parseFloat(priceText.replace(' GBP', ''));

        addToCart(name, price);
    });
});
