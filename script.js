// Add interactivity for the cart or other elements in the future

// Example function for an alert when navigating to another page
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      alert('You clicked on ' + link.textContent);
    });
  });

  

  // Handling form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Thank you for contacting us, " + name + ". We will get back to you soon!");
      // You can add code here to send the form data to the server
      // e.g., using fetch() to send the form data via AJAX
    } else {
      alert("Please fill out all fields.");
    }
  });
  
  // Update total price when quantity changes
const itemQuantities = document.querySelectorAll('.item-quantity');
const totalPriceElement = document.getElementById('total-price');

itemQuantities.forEach(item => {
  item.addEventListener('input', updateTotalPrice);
});

function updateTotalPrice() {
  let totalPrice = 0;
  const cartItems = document.querySelectorAll('.cart-item');

  cartItems.forEach((item, index) => {
    const price = parseInt(item.querySelector('.item-price').textContent.replace('/- Pkr', '').trim());
    const quantity = parseInt(item.querySelector('.item-quantity').value);
    totalPrice += price * quantity;
  });

  totalPriceElement.textContent = `${totalPrice}/- Pkr`;
}

// Remove item from cart
const removeButtons = document.querySelectorAll('.remove-item');
removeButtons.forEach(button => {
  button.addEventListener('click', removeItemFromCart);
});

function removeItemFromCart(event) {
  const item = event.target.closest('.cart-item');
  item.remove();
  updateTotalPrice(); // Update total after item removal
}

// Script to handle collapsible FAQ answers
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
