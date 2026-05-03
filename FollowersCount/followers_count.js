let count = 0; // Initialize count to 0

function increaseCount() {
  count++;

  displayCount(); // Display the count
  checkCountValue(); //checck count value and display message
  //resetCount();
}

function displayCount() {
  document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
  //document.getElementById("resetDisplay").innerHTML = count;
}
function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}
function resetCount() {
    count = 0; // Reset the internal value
    alert("Click ok to reset your followers to zero")
    displayCount();
}

