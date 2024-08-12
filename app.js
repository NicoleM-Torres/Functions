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

//#region Simple To Do List

// VARIABLES
let task_arr = [
  "Clean Bathroom",
  "Finish Homework",
  "Make Dinner",
  "Take out Lobo",
  "Workout",
];

// DISPLAY TO CONSOLE
console.log("Initial To-Do List:");
displayTasks();

addTask("Go grocery shopping"); // Add a task
removeTask("Finish Homework"); // Remove an existing task

// ADD TASK AND DISPLAY TO-DO LIST
function addTask(task) {
  // Check if the task is a non-empty string
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
        task_arr.push(task);
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

  // remove task if found on list
  for (let i = 0; i < task_arr.length; i++) {
    if (task_arr[i] === task) {
      task_arr.splice(i, 1); //.splice removed if string is already in the list
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
    console.log(`${i + 1}. ${task_arr[i]}`);
  } //END FOR LOOP
} //END DISPLAY TASK FUNCTION

//#endregion
