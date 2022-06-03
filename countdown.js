
function countdown() {
    let today = new Date().getTime();
    let tomorrow = new Date('Jun 05, 2022 15:00:00').getTime();
    let dueDate = tomorrow - today;
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let years = days * 365;
    
  let daysToDisplay = Math.floor(dueDate / days), hoursToDisplay = Math.floor(dueDate % days / hours), minutesToDisplay = Math.floor(dueDate % hours / minutes), secondsToDisplay = Math.floor(dueDate % minutes / seconds);
    
  document.querySelector('.days').textContent = daysToDisplay;
  document.querySelector('.hours').textContent = hoursToDisplay;
  document.querySelector('.minutes').textContent = minutesToDisplay;
  document.querySelector('.seconds').textContent = secondsToDisplay;
  
  let timeUp = document.getElementById('time-up');
  let counter = document.querySelector('.counter');
  let happyB = document.querySelector('.happy-b');
  
  
    if (daysToDisplay <= 0 & hoursToDisplay <= 0 & minutesToDisplay <= 0 & secondsToDisplay <= 0) {
      counter.style.display = "none";
      timeUp.style.display = "block";
      
    }
  }
  
  setInterval(countdown, 1000);

  // function invertDigitDesc(n) {
  //   return (n + "").split("").reverse().join("");
    
  // }

  // console.log(invertDigitDesc(112234556678));
  