// Ensure cart is accessible
let checkoutCart = [];

// Load cart and display order summary
document.addEventListener('DOMContentLoaded', function() {
    // Wait for script.js to load, then sync cart
    setTimeout(function() {
        // Load cart using script.js function if available
        if (typeof loadCartFromStorage === 'function') {
            loadCartFromStorage();
        }
        
        // Get cart from script.js global variable
        if (typeof window.cart !== 'undefined' && window.cart.length > 0) {
            checkoutCart = window.cart;
        } else {
            // Fallback: load from localStorage
            try {
                const savedCart = localStorage.getItem('benichem_cart');
                if (savedCart) {
                    checkoutCart = JSON.parse(savedCart);
                    // Sync with script.js
                    if (typeof window.cart !== 'undefined') {
                        window.cart = checkoutCart;
                    }
                }
            } catch (e) {
                console.error('Error loading cart:', e);
            }
        }
        
        // Override script.js functions to update order summary when cart changes
        if (typeof window.updateCartQuantity === 'function') {
            const originalUpdateCartQuantity = window.updateCartQuantity;
            window.updateCartQuantity = function(productId, newQuantity) {
                originalUpdateCartQuantity(productId, newQuantity);
                setTimeout(displayOrderSummary, 100);
            };
        }
        
        if (typeof window.removeFromCart === 'function') {
            const originalRemoveFromCart = window.removeFromCart;
            window.removeFromCart = function(productId) {
                originalRemoveFromCart(productId);
                setTimeout(displayOrderSummary, 100);
            };
        }
        
        // Update cart display using script.js function
        if (typeof updateCartDisplay === 'function') {
            updateCartDisplay();
        }
        
        // Display order summary
        displayOrderSummary();
        
        // Setup payment method toggling
        setupPaymentMethodToggle();
        
        // Setup form validation and submission
        setupFormSubmission();
    }, 200);
});

function setupPaymentMethodToggle() {
    const paymentCard = document.getElementById('paymentCard');
    const paymentCOD = document.getElementById('paymentCOD');
    const cardDetails = document.getElementById('cardDetails');
    
    function updatePaymentMethod() {
        const cardNumber = document.getElementById('cardNumber');
        const cardName = document.getElementById('cardName');
        const expiryDate = document.getElementById('expiryDate');
        const cvv = document.getElementById('cvv');
        
        if (paymentCard && paymentCard.checked) {
            if (cardDetails) cardDetails.style.display = 'block';
            // Make card fields required
            if (cardNumber) cardNumber.required = true;
            if (cardName) cardName.required = true;
            if (expiryDate) expiryDate.required = true;
            if (cvv) cvv.required = true;
        } else {
            if (cardDetails) cardDetails.style.display = 'none';
            // Make card fields not required and clear them
            if (cardNumber) {
                cardNumber.required = false;
                cardNumber.value = '';
            }
            if (cardName) {
                cardName.required = false;
                cardName.value = '';
            }
            if (expiryDate) {
                expiryDate.required = false;
                expiryDate.value = '';
            }
            if (cvv) {
                cvv.required = false;
                cvv.value = '';
            }
        }
    }
    
    if (paymentCard) paymentCard.addEventListener('change', updatePaymentMethod);
    if (paymentCOD) paymentCOD.addEventListener('change', updatePaymentMethod);
    
    // Initialize payment method on page load
    updatePaymentMethod();
    
    // Format card number - only allow digits and spaces
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            if (formattedValue.length > 19) formattedValue = formattedValue.substring(0, 19);
            e.target.value = formattedValue;
        });
        
        // Prevent non-numeric input
        cardNumberInput.addEventListener('keypress', function(e) {
            if (!/[0-9\s]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
        });
    }
    
    // Format expiry date - only allow digits and /
    const expiryDateInput = document.getElementById('expiryDate');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            if (value.length > 5) value = value.substring(0, 5);
            e.target.value = value;
        });
        
        // Validate month
        expiryDateInput.addEventListener('blur', function(e) {
            const value = e.target.value;
            if (value.length === 5) {
                const month = parseInt(value.substring(0, 2));
                if (month < 1 || month > 12) {
                    e.target.setCustomValidity('Please enter a valid month (01-12)');
                } else {
                    e.target.setCustomValidity('');
                }
            }
        });
    }
    
    // CVV - only allow digits
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 4) value = value.substring(0, 4);
            e.target.value = value;
        });
        
        // Prevent non-numeric input
        cvvInput.addEventListener('keypress', function(e) {
            if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
        });
    }
}

function setupFormSubmission() {
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processPayment();
        });
    }
}

function displayOrderSummary() {
    const orderItems = document.getElementById('orderItems');
    const orderTotals = document.getElementById('orderTotals');
    const checkoutContainer = document.getElementById('checkoutContainer');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    
    // Get latest cart from script.js or localStorage
    let cartToUse = [];
    if (typeof window.cart !== 'undefined' && window.cart.length > 0) {
        cartToUse = window.cart;
        checkoutCart = window.cart; // Keep in sync
    } else if (checkoutCart.length > 0) {
        cartToUse = checkoutCart;
    } else {
        // Load from localStorage
        try {
            const savedCart = localStorage.getItem('benichem_cart');
            if (savedCart) {
                cartToUse = JSON.parse(savedCart);
                checkoutCart = cartToUse;
            }
        } catch (e) {
            cartToUse = [];
        }
    }
    
    if (cartToUse.length === 0) {
        checkoutContainer.style.display = 'none';
        emptyCartMessage.style.display = 'block';
        return;
    }
    
    checkoutContainer.style.display = 'grid';
    emptyCartMessage.style.display = 'none';
    
    // Display order items
    orderItems.innerHTML = '';
    cartToUse.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <div class="order-item-info">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-details">Quantity: ${item.quantity} × £${item.price.toFixed(2)}</div>
            </div>
            <div class="order-item-price">£${(item.price * item.quantity).toFixed(2)}</div>
        `;
        orderItems.appendChild(orderItem);
    });
    
    // Calculate totals
    const subtotal = cartToUse.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 0.00; // Free shipping
    const vat = subtotal * 0.20; // 20% VAT
    const total = subtotal + shipping + vat;
    
    orderTotals.innerHTML = `
        <div class="total-row">
            <span>Subtotal:</span>
            <span>£${subtotal.toFixed(2)}</span>
        </div>
        <div class="total-row">
            <span>Shipping:</span>
            <span>£${shipping.toFixed(2)}</span>
        </div>
        <div class="total-row">
            <span>VAT (20%):</span>
            <span>£${vat.toFixed(2)}</span>
        </div>
        <div class="total-row final">
            <span>Total:</span>
            <span>£${total.toFixed(2)}</span>
        </div>
    `;
}

function processPayment() {
    // Get latest cart from script.js
    let cartToUse = [];
    if (typeof window.cart !== 'undefined' && window.cart.length > 0) {
        cartToUse = window.cart;
    } else if (typeof loadCartFromStorage === 'function') {
        loadCartFromStorage();
        if (typeof window.cart !== 'undefined') {
            cartToUse = window.cart;
        }
    } else {
        // Fallback: load from localStorage
        try {
            const savedCart = localStorage.getItem('benichem_cart');
            if (savedCart) {
                cartToUse = JSON.parse(savedCart);
            }
        } catch (e) {
            console.error('Error loading cart:', e);
        }
    }
    
    if (cartToUse.length === 0) {
        if (typeof showNotification === 'function') {
            showNotification('Your cart is empty. Please add items before checkout.');
        } else {
            alert('Your cart is empty. Please add items before checkout.');
        }
        return;
    }
    
    // Validate form
    const form = document.getElementById('checkoutForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Validate card details if payment method is card
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    if (!paymentMethod) {
        alert('Please select a payment method.');
        return;
    }
    
    if (paymentMethod.value === 'card') {
        const cardNumberEl = document.getElementById('cardNumber');
        const cardNameEl = document.getElementById('cardName');
        const expiryDateEl = document.getElementById('expiryDate');
        const cvvEl = document.getElementById('cvv');
        
        if (!cardNumberEl || !cardNameEl || !expiryDateEl || !cvvEl) {
            alert('Card details fields are missing. Please refresh the page.');
            return;
        }
        
        const cardNumber = cardNumberEl.value.replace(/\s/g, '');
        const cardName = cardNameEl.value.trim();
        const expiryDate = expiryDateEl.value;
        const cvv = cvvEl.value;
        
        if (!cardNumber || cardNumber.length < 13 || cardNumber.length > 19) {
            alert('Please enter a valid card number (13-19 digits).');
            cardNumberEl.focus();
            return;
        }
        // Allow hyphens/apostrophes and multi-part names (require at least two words)
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+ [A-Za-zÀ-ÖØ-öø-ÿ' -]+$/i;
        if (!cardName || cardName.trim() === '' || !cardName.match(nameRegex)) {
            alert('Please enter the name on card (first and last name at minimum). Hyphens and apostrophes allowed.');
            cardNameEl.focus();
            return;
        }
        if (!expiryDate || expiryDate.length !== 5 || !expiryDate.match(/^(0[1-9]|1[0-2])\/[0-9]{2}$/)) {
            alert('Please enter a valid expiry date in format MM/YY (e.g., 12/25).');
            expiryDateEl.focus();
            return;
        }
        if (!cvv || cvv.length < 3 || cvv.length > 4 || !cvv.match(/^[0-9]{3,4}$/)) {
            alert('Please enter a valid CVV (3 or 4 digits).');
            cvvEl.focus();
            return;
        }
    }
    
    // Get form values
    const fullNameEl = document.getElementById('fullName');
    const emailEl = document.getElementById('email');
    const phoneEl = document.getElementById('phone');
    const addressEl = document.getElementById('address');
    const cityEl = document.getElementById('city');
    const postcodeEl = document.getElementById('postcode');
    const countryEl = document.getElementById('country');
    
    if (!fullNameEl || !emailEl || !phoneEl || !addressEl || !cityEl || !postcodeEl || !countryEl) {
        alert('Some form fields are missing. Please refresh the page.');
        return;
    }
    
    // Validate name format - allow hyphens/apostrophes and multiple parts but require at least two words
    const fullName = fullNameEl.value.trim();
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+ [A-Za-zÀ-ÖØ-öø-ÿ' -]+$/i;
    if (!fullName.match(nameRegex)) {
        alert('Please enter your full name (first and last name at minimum). Hyphens and apostrophes allowed.');
        fullNameEl.focus();
        return;
    }
    
    // Validate email format
    const email = emailEl.value.trim();
    if (!email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)) {
        alert('Please enter a valid email address (e.g., name.surname@example.com)');
        emailEl.focus();
        return;
    }
    
    // Save order details
    const orderData = {
        items: cartToUse,
        customerInfo: {
            name: fullNameEl.value,
            email: emailEl.value,
            phone: phoneEl.value,
            address: addressEl.value,
            city: cityEl.value,
            postcode: postcodeEl.value,
            country: countryEl.value,
            paymentMethod: paymentMethod.value
        },
        total: (cartToUse.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.20) + 0.00,
        date: new Date().toISOString()
    };
    
    // Store last 4 digits of card number if payment method is card
    if (paymentMethod.value === 'card') {
        const cardNumberEl = document.getElementById('cardNumber');
        const cardNumber = cardNumberEl.value.replace(/\s/g, '');
        const last4Digits = cardNumber.slice(-4);
        orderData.cardNumberMasked = '****-****-****-' + last4Digits;
    }
    
    // Save order to localStorage
    localStorage.setItem('benichem_order', JSON.stringify(orderData));
    
    // Clear cart
    checkoutCart = [];
    if (typeof window.cart !== 'undefined') {
        window.cart = [];
    }
    if (typeof saveCartToStorage === 'function') {
        saveCartToStorage();
    } else {
        localStorage.setItem('benichem_cart', JSON.stringify([]));
    }
    
    // Update cart display
    if (typeof updateCartDisplay === 'function') {
        updateCartDisplay();
    }
    
    // Redirect to confirmation page
    window.location.href = 'order-confirmation.html';
}

// Make functions globally accessible
window.displayOrderSummary = displayOrderSummary;
window.processPayment = processPayment;