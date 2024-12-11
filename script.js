// Set an interval to call the `setClock` function every 1000 milliseconds (1 second).
setInterval(setClock, 1000)

// Select the clock hand elements from the DOM using their `data-*` attributes.
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

// Function to update the clock hands to reflect the current time.
function setClock() {
  // Get the current date and time.
  const currentDate = new Date()

  // Calculate the rotation ratio for the second hand.
  // This is the fraction of the current second within a minute.
  const secondsRatio = currentDate.getSeconds() / 60

  // Calculate the rotation ratio for the minute hand.
  // This takes into account both the current minute and the fractional progress of the second hand.
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60

  // Calculate the rotation ratio for the hour hand.
  // This considers both the current hour and the fractional progress of the minute hand.
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

  // Apply the calculated rotations to the respective hands.
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

// Function to set the rotation of a given clock hand.
// Takes in the element (clock hand) and the rotation ratio as arguments.
function setRotation(element, rotationRatio) {
  // Use the CSS `--rotation` custom property to apply the rotation.
  // Multiply the ratio by 360 to convert it to degrees.
  element.style.setProperty('--rotation', rotationRatio * 360)
}

// Call `setClock` immediately to initialize the clock hands
// to the correct positions when the page is loaded.
setClock()
