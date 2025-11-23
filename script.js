//Javascript Functionality

// Storing product data into the products array
    const products = {
    0: { id: 0, name: "Lavender Bath and Body Oil", price: 2500.99, image: "Images/Bath oil.jpg" },
    1: { id: 1, name: "Golden Hour Tumeric Scrub", price: 1200.20, image: "Images/tumeric scrub.jpg" },
    2: { id: 2, name: "Soy Milk & Rice Body Cleanser Set", price: 1000.99, image: "Images/body wash.jpg" },
    3: { id: 3, name: "Bubble Relaxing Facial Cleansing Oil", price: 1300.55, image: "Images/face.jpg" },
    4: { id: 4, name: "Watermelon Glow Sleeping Mask", price: 1200.55, image: "Images/face mask.jpg" },
    5: { id: 5, name: "Dr. Pepti Peptide Volume Waterglow Serum", price: 1000.00, image: "Images/face serum.jpg" },
    6: { id: 6, name: "HAAN Hand Cream Collection", price: 1000.20, image: "Images/hand cream collection.jpg" },
    7: { id: 7, name: "LondonTown Nature Blend", price: 850.00, image: "Images/foot scrub.jpg" },
    8: { id: 8, name: "Hyda Spa Foot Bath Massager", price: 14880.95, image: "Images/foot bath massager.jpg" },
    9: { id: 9, name: "Respire", price: 500.00, image: "Images/deoderant.jpg" },
    10: { id: 10, name: "Disco", price: 600.25, image: "Images/euc. deoderant.jpg" },
    11: { id: 11, name: "Modern Botany", price: 540.99, image: "Images/mist deoderant.jpg" },
    12: { id: 12, name: "Lily of the Valley Perfume Oil", price: 350.00, image: "Images/lily of the valley fragrance.jpg" },
    13: { id: 13, name: "Lavender Esscence", price: 400.90, image: "Images/lavender fragrance.jpg" },
    14: { id: 14, name: "Haute Sauce - Strawberry Glaze Edible Fragrance", price: 578.99, image: "Images/strawberry scent.jpg" },
    15: { id: 15, name: "Haute Sauce - Vanilla Coco Edible Fragrance", price: 530.99, image: "Images/coconut fragrance.jpg" }
};


    // Event Handling - Login Form Validation

   function validateLoginForm()
   { //Storing Variables and Constants
    const username=document.getElementById('loginUsername').value;

    const password= document.getElementById('loginPassword').value;

    let validResponse= true;

    // Clear previous errors
    document.getElementById('loginUsernameError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';

    // Username Validation
    if (!username) // If input box is empty 
    {
        document.getElementById('loginUsernameError').textContent='Username or email is required'; //Error Message

        validResponse= false;
    }

    //Password Validation
    if (!password)
    {
        document.getElementById('loginPasswordError').textContent='Password is required'; //Error Message

        validResponse= false;

    } else if (password.length < 6) 
        {
            document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters'; //Error Message

            validResponse= false;
        }

    // Success Message
    if (validResponse) 
        {
        alert('Login successful!');
        window.location.href = "index.html"; // Redirect to homepage
        }

    return validResponse;
    }
    
    // Event Listener for Login Form Submission
    document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('validateLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop page reload
            validateLoginForm(); // Run validation
        });
    }
});
   
   // IA2: Event Handling - Registration form setup
    function validateRegistrationForm()
    {
        // Storing Variables and Constants
        const firstName = document.getElementById('firstName').value;

        const lastName = document.getElementById('lastName').value;

        const dob = document.getElementById('dob').value;

        const email = document.getElementById('email').value;

        const username = document.getElementById('regUsername').value;

        const password = document.getElementById('regPassword').value;

        const confirmPassword = document.getElementById('confirmPassword').value;

        let validResponse = true;

        // Clear previous errors
        document.getElementById('firstNameError').textContent = ''; 
        document.getElementById('lastNameError').textContent = '';
        document.getElementById('dobError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('regUsernameError').textContent = '';
        document.getElementById('regPasswordError').textContent = '';
        document.getElementById('confirmPasswordError').textContent = '';   

        // First Name Validation
        if (!firstName) 
        {
            document.getElementById('firstNameError').textContent = 'First name is required'; //Error Message

            validResponse = false;
        }

        // Last Name Validation
        if (!lastName) 
        {
            document.getElementById('lastNameError').textContent = 'Last name is required'; //Error Message

            validResponse = false;
        }

        // Date of Birth Validation
        if (!dob) 
        {
            document.getElementById('dobError').textContent = 'Date of birth is required'; //Error Message

            validResponse = false;
        }
            
        // Email Validation 
       if (!email) 
        {
            document.getElementById('emailError').textContent = 'Email is required'; //Error Message

            validResponse = false;
        }
        // Username Validation
        if (!username) 
        {
            document.getElementById('regUsernameError').textContent = 'Username is required'; //Error Message

            validResponse = false;

        } else if (username.length < 3) 
            {
                document.getElementById('regUsernameError').textContent = 'Username must be at least 3 characters';//Error Message

                validResponse = false;
            }

        // Password Validation
        if (!password) 
        {
            document.getElementById('regPasswordError').textContent = 'Password is required'; //Error Message

            validResponse = false;
        } else if (password.length < 6) {
            document.getElementById('regPasswordError').textContent = 'Password must be at least 6 characters'; //Error Message

            validResponse = false;
        }

        // Confirm Password Validation
        if (!confirmPassword) 
        {
            document.getElementById('confirmPasswordError').textContent = 'Please confirm your password'; //Error Message

            validResponse = false;

        } else if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match'; //Error Message

            validResponse = false;
        }

        // Success Message
        if (validResponse) 
        {
            alert('Your Registration was successful! Welcome to Lily of the Valley Spa.');
        
            window.location.href = "login.html"; // Redirect to login page
        }

    return validResponse;
}
    // Event Listener for Registration Form Submission
    document.addEventListener('DOMContentLoaded', function() 
    {
        const registerForm = document.getElementById('validateRegistrationForm');
    
        if (registerForm) 
        {
            registerForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop page reload
            validateRegistrationForm(); // Run validation
        });
    }
});

//Cart Functionality
    let cart = JSON.parse(localStorage.getItem('spaCart')) || {};

// Add to Cart Function
    function addToCart(productId) 
    {
        if (cart[productId]) // If product already in cart
            {
                cart[productId].quantity += 1; // Increase quantity
    } else {
            cart[productId] = { // New product added to cart
            product: products[productId],
            quantity: 1 // Initial quantity
        };
    }

// Save to localStorage
    localStorage.setItem('spaCart', JSON.stringify(cart));

// Update cart counter
    updateCartCounter();

// Show confirmation
    alert(`${products[productId].name} added to cart!`);
    
// Update cart display if on cart page
    if (document.getElementById('cart') || document.getElementById('checkout')) //Check if the user is on the cart or checkout page
        {

            updateCartDisplay(); // Refresh cart display

        }
    }

// Update Cart Display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        
        if (Object.keys(cart).length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-cart-icon">🛒</div>
                    <h3>Your cart is empty</h3>
                    <p>Add some spa products to get started!</p>
                    <button class="btn" onclick="window.location.href='Products.html'" style="margin-top: 1rem;">Browse Products</button>
                </div>
            `;
        } else {
            for (const productId in cart) {
                const item = cart[productId];
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.product.image}" alt="${item.product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${item.product.name}';">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.product.name}</div>
                        <div class="cart-item-price">$${item.product.price.toFixed(2)}</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${productId}, ${item.quantity - 1})">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${productId}, ${item.quantity + 1})">+</button>
                        </div>
                    </div>
                    <div>
                        <div class="cart-item-price">$${(item.product.price * item.quantity).toFixed(2)}</div>
                        <button class="btn" onclick="removeFromCart(${productId})" style="margin-top: 0.5rem;">Remove</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemElement);
            }
        }
    }
    
    updateCartTotals();
}
// Update Quantity
    function updateQuantity(productId, newQuantity) 
    {
        if (newQuantity <= 0) // If quantity is zero or less, remove item
            {
                removeFromCart(productId); // Call remove function
    } else {
        cart[productId].quantity = newQuantity; // Update quantity
        localStorage.setItem('spaCart', JSON.stringify(cart));
        updateCartDisplay();
        updateCartCounter();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    delete cart[productId];
    localStorage.setItem('spaCart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartCounter();
    alert('Item removed from cart'); 
}

// Clear Cart
function clearCart() {
    cart = {};
    localStorage.setItem('spaCart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartCounter();
    alert('Cart cleared successfully.');
}

// Update Cart Counter
function updateCartCounter() {
    let totalItems = 0;
    for (const productId in cart) {
        totalItems += cart[productId].quantity;
    }
    
    // Update cart counter in navigation
    const cartCounter = document.getElementById('cartCounter');
    if (cartCounter) {
        cartCounter.textContent = totalItems;
    }
}

// Calculate Cart Totals
function calculateCartTotal() {
    let subtotal = 0;
    
    for (const productId in cart) {
        const item = cart[productId];
        subtotal += item.product.price * item.quantity;
    }
    
    const discount = subtotal * 0.1; // 10% discount
    const tax = (subtotal - discount) * 0.15; // 15% tax on discounted amount
    const total = subtotal - discount + tax;
    
    return {
        subtotal: subtotal,
        discount: discount,
        tax: tax,
        total: total
    };
}

// Update Cart Totals Display
function updateCartTotals() 
{
    const totals = calculateCartTotal();
    
    // Update cart page totals
    const subtotalElement = document.getElementById('subtotal');

    const discountElement = document.getElementById('discount');

    const taxElement = document.getElementById('tax');

    const totalElement = document.getElementById('total');
    
    if (subtotalElement) subtotalElement.textContent = `$${totals.subtotal.toFixed(2)}`; 

    if (discountElement) discountElement.textContent = `$${totals.discount.toFixed(2)}`;

    if (taxElement) taxElement.textContent = `$${totals.tax.toFixed(2)}`;

    if (totalElement) totalElement.textContent = `$${totals.total.toFixed(2)}`;
}

// Initialize Cart on Page Load
document.addEventListener('DOMContentLoaded', function() 
{
    updateCartCounter();
    
    // Update cart display if on cart page
    if (document.getElementById('cartItems')) {
        updateCartDisplay();
    }
});

// Checkout Functionality

document.addEventListener('DOMContentLoaded', function () {
    const checkoutForm = document.getElementById('checkoutForm'); // Get checkout form element
    if (checkoutForm) { // If on checkout page
        checkoutForm.addEventListener('submit', confirmCheckout); // Attach submit event listener

        updateCheckoutDisplay();
        updateCartCounter();

        // Auto-fill payment amount
        const totals = calculateCartTotal();
        const paymentInput = document.getElementById('paymentAmount');
        if (paymentInput) paymentInput.value = totals.total.toFixed(2);
    }
});

// Confirm Checkout
function confirmCheckout(e) {
    e.preventDefault();

    // Clear all previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    let valid = true; // Assume valid until checks fail

    
    // Get form values

    const firstName = document.getElementById('checkoutfirstName').value.trim(); // Trim whitespace
    const lastName  = document.getElementById('checkoutlastName').value.trim();
    const email     = document.getElementById('checkoutEmail').value.trim();
    const address   = document.getElementById('checkoutAddress').value.trim();
    const city      = document.getElementById('checkoutCity').value.trim();
    const zipCode   = document.getElementById('checkoutZipCode').value.trim();
    const payment = Number(document.getElementById('paymentAmount').value) || 0;

    // Validate inputs
    if (!firstName) { document.getElementById('checkoutfirstNameError').textContent = 'First name is required'; valid = false; }
    if (!lastName)  { document.getElementById('checkoutlastNameError').textContent  = 'Last name is required'; valid = false; }
    if (!email || !email.includes('@') || !email.includes('.')) {
        document.getElementById('checkoutEmailError').textContent = 'Please enter a valid email'; valid = false;
    }
    if (!address)   { document.getElementById('checkoutAddressError').textContent = 'Address is required'; valid = false; }
    if (!city)      { document.getElementById('checkoutCityError').textContent = 'City is required'; valid = false; }
    if (!zipCode)   { document.getElementById('checkoutZipCodeError').textContent = 'Zip code is required'; valid = false; }
    if (isNaN(payment) || payment <= 0) { // Invalid payment amount
        document.getElementById('paymentAmountError').textContent = 'Enter a valid payment amount'; valid = false;
    }

    // Cart empty check
    if (Object.keys(cart).length === 0) { // If cart is empty
        alert('Your cart is empty!'); // Alert message
        return;
    }

    // Payment too low
    const total = calculateCartTotal().total;

if (payment < total - 0.01) {   // allows being 1 cent short due to rounding
    document.getElementById('paymentAmountError').textContent = `Payment must be at least $${total.toFixed(2)}`; //Error Message
    valid = false;
}

    // Successful checkout
    if (valid) {
        document.getElementById('orderSuccess').style.display = 'block'; // Show success message only when order is successful
        clearCart(); // Clear cart after successful checkout
        setTimeout(() => window.location.href = 'index.html', 30000); // Redirect after 30 seconds
    }
}

// Update Checkout Display
function updateCheckoutDisplay() {
    const container = document.querySelector('.checkout-items'); // Container for checkout items
    if (!container) return; // Exit if container not found

    container.innerHTML = ''; // Clear existing content

    if (Object.keys(cart).length === 0) { // If cart is empty
        container.innerHTML = '<p style="text-align:center; padding:2rem;">Your cart is empty</p>'; // Display empty message
    } else {
        for (const id in cart) { // Loop through cart items
            const item = cart[id];
            container.innerHTML += ` 
                <div class="checkout-item"> //Checkout item layout
                    <div style="background-image:url('${item.product.image}'); background-size:cover; width:60px; height:60px; border-radius:8px;"></div>
                    <div style="margin-left:15px; flex-grow:1;">
                        <strong>${item.product.name}</strong><br>
                        Qty: ${item.quantity} × $${item.product.price.toFixed(2)}
                    </div>
                    <strong>$${(item.product.price * item.quantity).toFixed(2)}</strong>
                </div>
            `;// End of checkout item layout
        }
    }

    const t = calculateCartTotal(); // Get totals

    // Update totals display
    document.getElementById('checkoutSubtotal').textContent = `$${t.subtotal.toFixed(2)}`;
    document.getElementById('checkoutDiscount').textContent = `$${t.discount.toFixed(2)}`;
    document.getElementById('checkoutTax').textContent = `$${t.tax.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${t.total.toFixed(2)}`;
}