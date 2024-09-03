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
