const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied') 
const count = document.getElementById('count');   
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count value
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // Copy selected seats into arr
    // Map through array
    // return a new array

    // ...somthing: carry every values of something
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    //console.log(seatsIndex);

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    // console.log(selectedSeats); // you can check nodelist is increased or decreased whenever you select the seat
    const selectedSeatsCount = selectedSeats.length;

    //console.log(selectedSeatsCount); // check the count of selected seats
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    console.log(selectedSeats);

    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1 ) {
                seat.classList.add('selected');                
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
    
}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value

    setMovieData(e.target.selectedIndex, e.target.value);

    updateSelectedCount();
})

// Seat click event 
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')    
        
        //console.log(e.target);

        updateSelectedCount();
    }
});

// Initial count and total set
updateSelectedCount();


//console.log(typeof ticketPrice);

