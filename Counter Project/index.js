document.addEventListener("DOMContentLoaded", function() {
    let counterDisplay = document.querySelector('.counter-number'); // select the element where count is displayed
    let plusButton = document.querySelector('.plus'); // select the plus button
    let minusButton = document.querySelector('.minus'); // select the minus button

    let count = 0;

    updateDisplay();

    plusButton.addEventListener("click", () => {
        count++;
        updateDisplay();
    });

    minusButton.addEventListener("click", () => {
        
        if (count > 0) {
            count--;
          updateDisplay();  
        } else {
            alert("Counter can't be less than 0!");
        }
       
    });

    function updateDisplay() {
        counterDisplay.textContent = count; // update the text content to display count
        console.log(count); // log count to console for debugging
    }

    
});
