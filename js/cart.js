
// Cart functionality

class ShoppingCart {
  constructor() {
    this.items = [];
    this.init();
  }
  
  // Initialize cart from local storage
  init() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
      try {
        this.items = JSON.parse(savedCart);
        this.updateCartCount();
      } catch (error) {
        console.error('Error parsing cart data:', error);
        this.items = [];
      }
    }
  }
  
  // Save cart to local storage
  saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(this.items));
    this.updateCartCount();
  }
  
  // Update cart count in navbar
  updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      const totalItems = this.getTotalItems();
      cartCount.textContent = totalItems;
      cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
  }
  
  // Get total number of items in cart
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }
  
  // Get total price of cart
  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  
  // Add item to cart
  addItem(product, quantity = 1) {
    // Check if product exists
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        category: product.category
      });
    }
    
    this.saveCart();
    showToast(`Added ${product.name} to your cart`, 'success');
  }
  
  // Update item quantity
  updateItemQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    
    if (item) {
      item.quantity = quantity;
      
      if (item.quantity <= 0) {
        this.removeItem(productId);
      } else {
        this.saveCart();
      }
    }
  }
  
  // Remove item from cart
  removeItem(productId) {
    const itemIndex = this.items.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
      const itemName = this.items[itemIndex].name;
      this.items.splice(itemIndex, 1);
      this.saveCart();
      showToast(`Removed ${itemName} from your cart`, 'info');
    }
  }
  
  // Clear cart
  clearCart() {
    this.items = [];
    this.saveCart();
    showToast('Your cart has been cleared', 'info');
  }
}

// Initialize shopping cart
const cart = new ShoppingCart();

// Add to cart function for product pages
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  
  if (product) {
    cart.addItem(product, quantity);
  } else {
    console.error(`Product with ID ${productId} not found`);
  }
}
