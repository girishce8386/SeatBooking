document.addEventListener("DOMContentLoaded", function() {
    const seatMap = document.querySelector(".seat-map");
  
    // Number of rows and columns in the stadium
    const numRows = 10;
    const numCols = 10;
  
    // Create seats dynamically
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.setAttribute("data-row", i + 1);
        seat.setAttribute("data-col", j + 1);
        seatMap.appendChild(seat);
      }
    }
  
    // Handle seat selection
    seatMap.addEventListener("click", function(event) {
      if (event.target.classList.contains("seat")) {
        event.target.classList.toggle("selected");
        const row = event.target.getAttribute("data-row");
        const col = event.target.getAttribute("data-col");
        console.log(`Seat selected - Row: ${row}, Column: ${col}`);
        // You can implement further logic for seat booking here
      }
    });
  });
  