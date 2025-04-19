
// Shop page JavaScript

// Filter variables
let currentFilters = {
  categories: [],
  minPrice: null,
  maxPrice: null,
  sort: 'featured'
};

// Initialize the shop page
function initShop() {
  setupCategoryFilters();
  setupPriceFilter();
  setupSortFilter();
  setupResetFilters();
  
  // Apply initial filters
  applyFilters();
}

// Setup category filter checkboxes
function setupCategoryFilters() {
  const categoryFiltersContainer = document.getElementById('category-filters');
  
  if (!categoryFiltersContainer) return;
  
  // Create a checkbox for each category
  CATEGORIES.forEach(category => {
    const checkbox = document.createElement('div');
    checkbox.className = 'filter-checkbox';
    
    checkbox.innerHTML = `
      <input type="checkbox" id="category-${category.id}" name="category" value="${category.id}">
      <label for="category-${category.id}">${category.name}</label>
    `;
    
    categoryFiltersContainer.appendChild(checkbox);
    
    // Add event listener to checkbox
    const input = checkbox.querySelector('input');
    input.addEventListener('change', () => {
      if (input.checked) {
        currentFilters.categories.push(category.id);
      } else {
        currentFilters.categories = currentFilters.categories.filter(id => id !== category.id);
      }
      
      applyFilters();
    });
  });
}

// Setup price range filter
function setupPriceFilter() {
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  const applyButton = document.getElementById('price-filter-btn');
  
  if (!minPriceInput || !maxPriceInput || !applyButton) return;
  
  applyButton.addEventListener('click', () => {
    currentFilters.minPrice = minPriceInput.value ? Number(minPriceInput.value) : null;
    currentFilters.maxPrice = maxPriceInput.value ? Number(maxPriceInput.value) : null;
    
    applyFilters();
  });
}

// Setup sort filter
function setupSortFilter() {
  const sortSelect = document.getElementById('sort-select');
  
  if (!sortSelect) return;
  
  sortSelect.addEventListener('change', () => {
    currentFilters.sort = sortSelect.value;
    applyFilters();
  });
}

// Setup reset filters button
function setupResetFilters() {
  const resetButton = document.getElementById('reset-filters');
  
  if (!resetButton) return;
  
  resetButton.addEventListener('click', () => {
    // Reset checkboxes
    const checkboxes = document.querySelectorAll('.filter-checkbox input');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    
    // Reset price inputs
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    
    if (minPriceInput) minPriceInput.value = '';
    if (maxPriceInput) maxPriceInput.value = '';
    
    // Reset sort
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) sortSelect.value = 'featured';
    
    // Reset filter state
    currentFilters = {
      categories: [],
      minPrice: null,
      maxPrice: null,
      sort: 'featured'
    };
    
    applyFilters();
  });
}

// Apply all filters and update product display
function applyFilters() {
  let filteredProducts = [...PRODUCTS];
  
  // Apply category filter
  if (currentFilters.categories.length > 0) {
    filteredProducts = filteredProducts.filter(product => {
      const categoryId = product.category.toLowerCase();
      return currentFilters.categories.includes(categoryId);
    });
  }
  
  // Apply price filter
  if (currentFilters.minPrice !== null) {
    filteredProducts = filteredProducts.filter(product => product.price >= currentFilters.minPrice);
  }
  
  if (currentFilters.maxPrice !== null) {
    filteredProducts = filteredProducts.filter(product => product.price <= currentFilters.maxPrice);
  }
  
  // Apply sorting
  switch (currentFilters.sort) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      // In a real app, you would sort by date
      // Here we'll just reverse the array as an example
      filteredProducts.reverse();
      break;
    default:
      // 'featured' - no specific sorting
      break;
  }
  
  // Update the product grid
  renderProducts(filteredProducts);
  
  // Update product count
  const productCountElement = document.getElementById('product-count');
  if (productCountElement) {
    productCountElement.textContent = `Showing ${filteredProducts.length} products`;
  }
}

// Render the product grid
function renderProducts(products) {
  const productGrid = document.getElementById('product-grid');
  
  if (!productGrid) return;
  
  // Clear current products
  productGrid.innerHTML = '';
  
  if (products.length === 0) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = 'No products match your filters. Try adjusting your criteria.';
    productGrid.appendChild(noResults);
    return;
  }
  
  // Render each product
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    productCard.innerHTML = `
      <a href="product.html?id=${product.id}" class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <button class="product-wishlist" aria-label="Add to wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
      </a>
      <div class="product-content">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating">
          ${generateStarRating(product.rating)}
          <span>(${product.reviews})</span>
        </div>
        <div class="product-price">
          <div class="price">${formatPrice(product.price)}</div>
          <button class="add-to-cart" aria-label="Add to cart" onclick="addToCart(${product.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </button>
        </div>
      </div>
    `;
    
    productGrid.appendChild(productCard);
    
    // Add event listeners for wishlist button
    const wishlistButton = productCard.querySelector('.product-wishlist');
    wishlistButton.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent navigation to product page
      wishlistButton.classList.toggle('active');
      
      if (wishlistButton.classList.contains('active')) {
        wishlistButton.querySelector('svg').setAttribute('fill', 'currentColor');
        showToast(`Added ${product.name} to your wishlist`, 'success');
      } else {
        wishlistButton.querySelector('svg').setAttribute('fill', 'none');
        showToast(`Removed ${product.name} from your wishlist`, 'info');
      }
    });
  });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initShop);
