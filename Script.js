// JavaScript for seat selection and checkout
const seats = document.querySelectorAll('.seat');

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    calculatePrice();
  });
});

function calculatePrice() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  const totalPrice = selectedSeats.length * 50; // Assuming each seat costs $50
  console.log(`Total Price: $${totalPrice}`);
}

const checkoutBtn = document.getElementById('checkoutBtn');

checkoutBtn.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  if (selectedSeats.length > 0) {
    // You can redirect to the payment page or process payment here
    // For simplicity, let's log a message
    console.log('Redirecting to payment...');
  } else {
    alert('Please select at least one seat to proceed to checkout.');
  }
});
