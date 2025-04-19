
// Cart page functionality

// Render the cart page
function renderCartPage() {
  const cartContentElement = document.getElementById('cart-content');
  
  if (!cartContentElement) return;
  
  // Check if cart is empty
  if (cart.items.length === 0) {
    cartContentElement.innerHTML = `
      <div class="empty-cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <a href="shop.html" class="button primary">Start Shopping</a>
      </div>
    `;
    return;
  }
  
  // Calculate totals
  const subtotal = cart.getTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;
  
  // Render cart with items
  cartContentElement.innerHTML = `
    <div class="cart-grid">
      <div class="cart-items-container">
        <div class="cart-items">
          ${cart.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
              <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
              </div>
              <div class="cart-item-content">
                <h3 class="cart-item-title">${item.name}</h3>
                <div class="cart-item-category">${item.category}</div>
                <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
              </div>
              <div class="cart-item-actions">
                <div class="quantity-control">
                  <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                  <span class="quantity-value">${item.quantity}</span>
                  <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                </div>
                <button class="remove-item" data-id="${item.id}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                  Remove
                </button>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="cart-actions">
          <a href="shop.html" class="button outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Continue Shopping
          </a>
          
          <button id="clear-cart" class="button outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            Clear Cart
          </button>
        </div>
      </div>
      
      <div class="cart-summary">
        <h2>Order Summary</h2>
        
        <div class="summary-row">
          <span>Subtotal</span>
          <span id="subtotal">${formatPrice(subtotal)}</span>
        </div>
        
        <div class="summary-row">
          <span>Shipping</span>
          <span id="shipping">${shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
        </div>
        
        <form class="promo-form">
          <input type="text" placeholder="Promo code" id="promo-code">
          <button type="submit" class="button outline" id="apply-promo">Apply</button>
        </form>
        
        ${shipping > 0 ? `
          <div class="free-shipping-notice">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <p>Add ${formatPrice(50 - subtotal)} more to qualify for free shipping</p>
          </div>
        ` : ''}
        
        <div class="summary-row total">
          <span>Total</span>
          <span id="total">${formatPrice(total)}</span>
        </div>
        
        <button id="checkout-button" class="checkout-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
          Checkout
        </button>
        
        <div class="payment-methods">
          <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa">
          <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard">
          <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="PayPal">
          <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="American Express">
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners
  setupCartEventListeners();
}

// Setup cart event listeners
function setupCartEventListeners() {
  // Increase quantity buttons
  const increaseButtons = document.querySelectorAll('.increase-btn');
  increaseButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.getAttribute('data-id'));
      const cartItem = cart.items.find(item => item.id === productId);
      
      if (cartItem) {
        cart.updateItemQuantity(productId, cartItem.quantity + 1);
        renderCartPage();
      }
    });
  });
  
  // Decrease quantity buttons
  const decreaseButtons = document.querySelectorAll('.decrease-btn');
  decreaseButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.getAttribute('data-id'));
      const cartItem = cart.items.find(item => item.id === productId);
      
      if (cartItem && cartItem.quantity > 1) {
        cart.updateItemQuantity(productId, cartItem.quantity - 1);
        renderCartPage();
      }
    });
  });
  
  // Remove item buttons
  const removeButtons = document.querySelectorAll('.remove-item');
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.getAttribute('data-id'));
      cart.removeItem(productId);
      renderCartPage();
    });
  });
  
  // Clear cart button
  const clearCartButton = document.getElementById('clear-cart');
  if (clearCartButton) {
    clearCartButton.addEventListener('click', () => {
      cart.clearCart();
      renderCartPage();
    });
  }
  
  // Promo code form
  const promoForm = document.querySelector('.promo-form');
  if (promoForm) {
    promoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const promoCodeInput = document.getElementById('promo-code');
      
      if (promoCodeInput && promoCodeInput.value) {
        showToast(`Promo code "${promoCodeInput.value}" applied to your order`, 'success');
        promoCodeInput.value = '';
      } else {
        showToast('Please enter a promo code', 'error');
      }
    });
  }
  
  // Checkout button
  const checkoutButton = document.getElementById('checkout-button');
  if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
      showToast('Checkout process initiated', 'info');
      
      // Simulate checkout process
      setTimeout(() => {
        cart.clearCart();
        showToast('Order placed successfully!', 'success');
        renderCartPage();
      }, 2000);
    });
  }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', renderCartPage);
