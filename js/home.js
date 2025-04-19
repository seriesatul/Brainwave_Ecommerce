
// Home page specific JavaScript

// Render featured categories
function renderFeaturedCategories() {
  const categoriesContainer = document.getElementById('featured-categories-container');
  
  if (!categoriesContainer) return;
  
  // Only show a subset of categories on the home page
  const featuredCategories = CATEGORIES.slice(0, 4);
  
  // Generate HTML for each category
  featuredCategories.forEach(category => {
    const categoryCard = document.createElement('a');
    categoryCard.href = `pages/categories.html?id=${category.id}`;
    categoryCard.className = 'category-card';
    
    categoryCard.innerHTML = `
      <div class="category-card-image">
        <img src="${category.image}" alt="${category.name}">
      </div>
      <div class="category-card-content">
        <h3>${category.name}</h3>
        <p>${category.itemCount} items</p>
      </div>
    `;
    
    categoriesContainer.appendChild(categoryCard);
  });
}

// Handle newsletter form submission
function setupNewsletterForm() {
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      
      if (emailInput && emailInput.value) {
        // In a real app, you would send this to your API
        console.log('Subscribing email:', emailInput.value);
        
        showToast(`Thank you for subscribing! You'll receive our newsletter at ${emailInput.value}`, 'success');
        emailInput.value = '';
      } else {
        showToast('Please enter your email address', 'error');
      }
    });
  }
}

// Initialize home page functionality
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedCategories();
  setupNewsletterForm();
});
