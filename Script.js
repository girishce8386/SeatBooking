// Seat data - replace this with actual seat data
const totalSeats = 100;
const seatPrice = 50;
let selectedSeats = [];
let totalPrice = 0;

// Generate seat layout dynamically
const seatMap = document.querySelector('.seat-map');

for (let i = 1; i <= totalSeats; i++) {
  const seat = document.createElement('div');
  seat.classList.add('seat');
  seat.textContent = i;
  seat.addEventListener('click', () => selectSeat(i, seat));
  seatMap.appendChild(seat);
}

// Function to select/deselect seats
function selectSeat(seatNumber, seatElement) {
  if (selectedSeats.includes(seatNumber)) {
    selectedSeats = selectedSeats.filter(seat => seat !== seatNumber);
    seatElement.classList.remove('selected');
  } else {
    selectedSeats.push(seatNumber);
    seatElement.classList.add('selected');
  }

  updateSelectedSeats();
}

// Update selected seats and total price
function updateSelectedSeats() {
  const selectedSeatsDisplay = document.getElementById('selected-seats');
  const totalPriceDisplay = document.getElementById('total-price');

  selectedSeatsDisplay.textContent = selectedSeats.join(', ');
  totalPrice = selectedSeats.length * seatPrice;
  totalPriceDisplay.textContent = totalPrice;
}

// Checkout button functionality (simulated redirection)
const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click', () => {
  if (selectedSeats.length > 0) {
    // Simulated payment redirection
    alert(`Redirecting to payment gateway. Total amount: $${totalPrice}`);
    // Replace the alert with actual payment gateway integration code
  } else {
    alert('Please select at least one seat to proceed to checkout.');
  }
});
