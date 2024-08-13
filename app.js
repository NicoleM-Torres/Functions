//#region Grade Calculations

// VARIABLES
let grades_arr = [90, 100, 89, 45, 49, 98, 72];

// CALCULATE GRADE AVERAGE
function calculateAverageGrade(grades) {
  /*'grades' is calling the array -- `sum` stores the total
//`grade` hold the value of the current array element -- 0 is the initial value
//.reduce() is used to sum up all the elements in the grades array*/
  let total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
} //END FUNCTION GRADE AVG

// LETTER GRADE BASED ON AVERAGE
function letterGrade(average) {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
} //END FUNCTION LETTER GRADE

// AVERAGE GRADE CALCULATION
let average = calculateAverageGrade(grades_arr);

// DETERMINE THE LETTER GRADE
let grade = letterGrade(average);

// OUTPUT ARG GRADE AND LETTER GRADE TO CONSOLE
console.log(`Average Grade: ${average.toFixed(2)}`); // toFixed(2) to format the average to two decimal places
console.log(`Letter Grade: ${grade}`);

//#endregion

//#region Bank Account Manager
//VARIABLES
let balance = 1000;
depositMoney(790.98); // Deposit money into acct
withdrawMoney(123.8); // Withdraw money from acct
checkBalance(); // Balance in acct

//DEPOSIT MONEY INTO THE ACCT
function depositMoney(amount) {
  if (amount > 0) {
    balance += amount;
    console.log(`Deposited $${amount}. New balance $${balance}`);
  } else {
    console.log(`Deposit amount must be greater.`);
  } //END OF IF-ELSE STATEMENT
} //END OF depositMoney FUNCTION

//WITHDRAW MONEY FROM ACCT
function withdrawMoney(amount) {
  if (amount > 0) {
    if (amount <= balance) {
      balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${balance}`);
    } else {
      console.log("Insufficient funds.");
    }
  } else {
    console.log("Withdrawal amount must be greater than zero.");
  }
} //END OF withdrawMOney FUNCTION

//CHECK BALANCE OF ACCT
function checkBalance() {
  console.log(`Current balance: $${balance}`);
}

//#endregion

//#region "Simple" To Do List

// VARIABLES
let task_arr = [
  "Clean Bathroom",
  "Finish Homework",
  "Make Dinner",
  "Take out Lobo",
  "Workout",
];

// DISPLAY TO CONSOLE
console.log("Original To-Do List:");
displayTasks();

addTask("Go grocery shopping"); // Add a task
removeTask("Finish Homework"); // Remove an existing task

// ADD TASK AND DISPLAY TO-DO LIST
function addTask(task) {
  /* Check if the task is a non-empty string,
  typeof operator  -- is used to determine the 
  type of a variable or value.*/
  if (task && typeof task === "string" && task !== "") {
    let isTaskOnList = false;

    // Check for repeated tasks
    for (let i = 0; i < task_arr.length; i++) {
      if (task_arr[i] === task) {
        isTaskOnList = true;
        break;
      } //END IF STATEMENT
    } //END FOR LOOP

    // Add the task if new
    if (!isTaskOnList) {
      task_arr.push(task); //add new task
      console.log("Task added to your list!");
    } else {
      console.log("ERROR: Task already exists.");
    } //END IF ELSE STATEMENT THAT ADDS NEW TASK
  } else {
    console.log("ERROR: Invalid task.");
  } // END IF-ELSE STATEMENT THAT CHECKS STRINGS
  displayTasks();
} // END OF addTask FUNCTION

// REMOVE TASK AND DISPLAY TO-DO LIST
function removeTask(task) {
  let isTaskRemoved = false;

  //REMOVE TASK ON LIST
  /*.splice remove if string is already in the list 
  specifies the number of elements to remove starting 
  from the index */
  for (let i = 0; i < task_arr.length; i++) {
    if (task_arr[i] === task) {
      task_arr.splice(i, 1);
      isTaskRemoved = true;
      break;
    } //END IF STATEMENT
  } //END FOR LOOP

  /*  Display to console based on if the task is on the list
    if it is on the list it will display completed if not it will say 
    not on the list` */

  if (isTaskRemoved) {
    console.log("Task completed!");
  } else {
    console.log("Task not on list.");
  } //END IF-ELSE STATEMENT
  displayTasks();
} // END OF removeTask FUNCTION

// DISPLAY TO-DO LIST
function displayTasks() {
  console.log("To-Do List:");
  for (let i = 0; i < task_arr.length; i++) {
    console.log(`${i + 1}. ${task_arr[i]}`); //numerates each task
  } //END FOR LOOP
} //END DISPLAY TASK FUNCTION

//#endregion

//#region Temp Cheker

let temperature = 90;
let tempUnitChosen = "F"; //Chosen temp Unit

// CONVERT TEMP TO KELVIN
function convertToKelvin(temp, unit) {
  let kelvin;
  if (unit === "C") {
    kelvin = temp + 273.15;
  } else if (unit === "F") {
    kelvin = ((temp - 32) * 5) / 9 + 273.15;
  } else if (unit === "K") {
    kelvin = temp;
  } else {
    console.log("Invalid temp unit");
    return null;
  } //END IF-ELSE STATEMENT
  return kelvin;
} // END OF convertToKelvin FUNCTION

// CONVERT TO CELSIOUS
function convertToCelsius(temp, unit) {
  let celsius;
  if (unit === "F") {
    celsius = ((temp - 32) * 5) / 9;
  } else if (unit === "K") {
    celsius = temp - 273.15;
  } else if (unit === "C") {
    celsius = temp;
  } else {
    console.log("Invalid temp unit");
    return null;
  } //END IF-ELSE STATEMENT
  return celsius;
} // END OF convertToCelsius FUNCTION

// CONVER TEMP TO FAR
function convertToFahrenheit(temp, unit) {
  let fahrenheit;
  if (unit === "C") {
    fahrenheit = (temp * 9) / 5 + 32;
  } else if (unit === "K") {
    fahrenheit = ((temp - 273.15) * 9) / 5 + 32;
  } else if (unit === "F") {
    fahrenheit = temp;
  } else {
    console.log("Invalid temp unit");
    return null;
  } //END IF-ELSE STATEMENT
  return fahrenheit;
} // END OF convertToFahrenheit FUNCTION

// DISPLAY CONVERTED TEMPS BY UNIT CHOSEN
function displayConvertedTemps(temp, unit) {
  let kelvin, celsius, fahrenheit;

  switch (unit) {
    case "C":
      celsius = temp;
      fahrenheit = convertToFahrenheit(temp, unit);
      kelvin = convertToKelvin(temp, unit);
      break;
    case "F":
      fahrenheit = temp;
      celsius = convertToCelsius(temp, unit);
      kelvin = convertToKelvin(temp, unit);

      break;
    case "K":
      kelvin = temp;
      celsius = convertToCelsius(temp, unit);
      fahrenheit = convertToFahrenheit(temp, unit);
      break;
    default:
      console.log("Invalid unit");
      return;
  } //END SWITCH STATEMENT

  console.log(`Original Temperature: ${temp}°${unit}`);
  console.log(`In Kelvin: ${kelvin.toFixed(2)} K`);
  console.log(`In Celsius: ${celsius.toFixed(2)} °C`);
  console.log(`In Fahrenheit: ${fahrenheit.toFixed(2)} °F`);
} // END DISPLAY FUNCTION

//DISPLAY TO CONSOLE
displayConvertedTemps(temperature, tempUnitChosen);

//* KelvinToCelsius conversion:
//* kelvinNum - 273.15

//* celsiusToKelvin:
//* celsiusNum + 273.15

//* fahrenheitToCelsius:
//* (fahrenheit - 32) * 5/9

//* celsiusToFahrenheit:
//* (celsius * 9/5) + 32

//#endregion

//#region PlayList Manager

// VARIABLES
let myPlaylist_arr = []; // Start with an empty playlist

displayPlaylist();

// addSong(1);
addSong("The Search - NF");
addSong("Nameless - Stevie Howie");
addSong("Girl with One Eye - Florence + The Machine");
addSong("Savages - Marina");
addSong("Take Me Back to Eden - Sleep Token");
// removeSong("Savages - Marina");

// ADD SONG
function addSong(song) {
  // Check if the song is a non-empty string
  if (typeof song === "string" && song.trim() !== "") {
    // Add the song to the playlist
    myPlaylist_arr.push(song);
    console.log("Song added!");
  } else {
    console.log("ERROR: Invalid song.");
  }
  displayPlaylist(); // Display the updated playlist
} // END addSong FUNCTION

// REMOVE SONG
function removeSong(song) {
  /* Find the index of the song in the playlist
  indexOf method is used to find the first occurrence
   of a specified value (song parameter) in an array */
  let i = myPlaylist_arr.indexOf(song);

  /*This condition checks if the index is not equal
   to -1, which means the song was found in the playlist. 
   checks if the string was found on the list*/
  if (i !== -1) {
    // Remove the song from the playlist
    myPlaylist_arr.splice(i, 1);
    console.log(`Song ${myPlaylist_arr[i]} removed from playlist.`);
  } else {
    console.log("ERROR: Song not on list.");
  }
  displayPlaylist(); // Display the updated playlist
} // END OF removeSong FUNCTION

// DISPLAY PLAYLIST
function displayPlaylist() {
  // Check if the playlist is empty
  if (myPlaylist_arr.length === 0) {
    console.log("Your playlist is empty.");
  } else {
    console.log("Your Playlist:");
    // Loop through the playlist and display each song
    myPlaylist_arr.forEach((song, i) => {
      console.log(`${i + 1}. ${song}`);
    });
  }
} // END OF displayPlaylist FUNCTION

//#endregion

//#region Daily Temperatures
// VARIABLES
let temperature_arr = [72, 75, 79, 83, 78, 85, 90];

// CALCULATE THE AVG TEMP
function calculateAverageTemp() {
  let sum = 0;

  for (let i = 0; i < temperature_arr.length; i++) {
    sum += temperature_arr[i];
  }

  return sum / temperature_arr.length; // Return the average temperature
} // END calculateAverageTemp FUNCTION

// FIND THE HIGHEST TEMP
function calculateHighestTemp() {
  let highest = temperature_arr[0];

  for (let i = 1; i < temperature_arr.length; i++) {
    if (temperature_arr[i] > highest) {
      highest = temperature_arr[i];
    }
  }

  return highest; // Return the highest temperature
} // END calculateHighestTemp FUNCTION

// FIND THE LOWEST TEMP
function calculateLowestTemp() {
  let lowest = temperature_arr[0];

  for (let i = 1; i < temperature_arr.length; i++) {
    if (temperature_arr[i] < lowest) {
      lowest = temperature_arr[i];
    }
  }

  return lowest; // Return the lowest temperature
} // END calculateLowestTemp FUNCTION

// DISPLAY ALL STATISTICS
function displayAllStats() {
  let average = calculateAverageTemp();
  let highest = calculateHighestTemp();
  let lowest = calculateLowestTemp();

  console.log("Temperature Statistics:");
  console.log(`Average Temperature: ${average.toFixed(2)}`); // Display average with 2 decimal places
  console.log(`Highest Temperature: ${highest}`);
  console.log(`Lowest Temperature: ${lowest}`);
} // END displayAllStats FUNCTION

// CALL displayAllStats TO SHOW ALL STATISTICS
displayAllStats();

//#endregion
