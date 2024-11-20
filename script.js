// let a = document.getElementById("one");
// a.style.visibility = "hidden";

// function add() {
//   let inputField = document.getElementById("text"); // Get the input field
//   let taskContainer = document.getElementById("one"); // Get the task container div

//   if (inputField.value.trim() !== "") { // Only add if the input is not empty
//     // Create a new div for each task
//     let newTaskDiv = document.createElement("div");
//     newTaskDiv.className = "task"; // Add a class for styling if needed

//     // Create an h2 element to display the task text
//     let taskText = document.createElement("h2");
//     taskText.textContent = inputField.value;

//     // Create a checkbox for the task
//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.className = "task-checkbox"; // Optional class for styling

//     // Append the task text and checkbox to the new task div
//     newTaskDiv.appendChild(taskText);
//     newTaskDiv.appendChild(checkbox);

//     // Append the new task div to the task container
//     taskContainer.appendChild(newTaskDiv);

//     // append the task array in to id ta
//     let v= document.getElementById('ta');

//     // Show the task container div
//     a.style.visibility = "visible";

//     // Clear the input field
//     inputField.value = "";
//   }
// }

let a = document.getElementById("one");
a.style.visibility = "hidden";

let taskCount = 0; // Counter for total tasks
let completedCount = 0; // Counter for completed tasks

function add() {
  let inputField = document.getElementById("text"); // Get the input field
  let taskContainer = document.getElementById("one"); // Get the task container div

  if (inputField.value.trim() !== "") {
    // Only add if the input is not empty
    taskCount++; // Increment the task counter

    // Create a new div for each task
    let newTaskDiv = document.createElement("div");
    newTaskDiv.className = "task"; // Add a class for styling if needed

    let del = document.createElement("h3");
    del.className = "delu";
    del.textContent = `Delete`;

    del.onclick = function () {
      taskContainer.removeChild(newTaskDiv); // Remove the task div from the container
      taskCount--; // Decrement task counter
      completedCount--;

      document.getElementById("ta").textContent = `Task: ${taskCount}`;
      document.getElementById("complete").textContent = `Completed: ${completedCount}`;
    };

    // Create an h2 element to display the task text
    let taskText = document.createElement("h2");
    taskText.textContent = inputField.value;

    // Create a checkbox for the task
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox"; // Optional class for styling

    // Event listener to track when the task is completed
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        completedCount++; // Increment completed tasks counter
      } else {
        completedCount--; // Decrement if unchecked
      }
      document.getElementById("complete").textContent = `Completed: ${completedCount}`;
    });

    // Append the task text and checkbox to the new task div
    newTaskDiv.appendChild(taskText);
    newTaskDiv.appendChild(del);
    newTaskDiv.appendChild(checkbox);

    // Append the new task div to the task container
    taskContainer.appendChild(newTaskDiv);

    // Update the task count display
    document.getElementById("ta").textContent = `Task: ${taskCount}`;

    // update the done button

    // Show the task container div
    a.style.visibility = "visible";

    // Clear the input field
    inputField.value = "";
  }
}

function don() {
  console.log("done button work properly");
  let u = document.getElementById("a2");
  let y = document.getElementById("a1");
  let g = document.getElementById("one");
  let but = document.getElementById("but");
  let pp = document.getElementById("pp1");
  pp.style.visibility = "visible";
  but.style.visibility = "hidden";
  g.style.visibility = "hidden";
  y.style.visibility = "hidden";
  u.style.visibility = "hidden";
  document.getElementById(
    "p1"
  ).textContent = `Your score is ${completedCount}/${taskCount}`;
}

//close the web page
function reload() {
  location.reload();
}

// end task
