// Existing tasks
const tasks = [
  { id: 1, title: "Gym", description: "Work those muscles", status: "todo" },
  { id: 2, title: "Study", description: "Work those brains", status: "doing" },
  { id: 3, title: "Sleep", description: "Rest that bod", status: "done" }
];

// Maximum number of tasks allowed
const MAX_TASKS = 6;

// Function to add new tasks (up to 3)
function addTasks() {
  while (tasks.length < MAX_TASKS) {
    const title = prompt("Enter task title:");
    if (!title) {
      alert("Task title cannot be empty.");
      continue;
    }

    const description = prompt("Enter task description:");
    if (!description) {
      alert("Task description cannot be empty.");
      continue;
    }

    let status = prompt("Enter task status (todo, doing, done):").toLowerCase();
    if (!["todo", "doing", "done"].includes(status)) {
      alert("Invalid status. Please enter todo, doing, or done.");
      continue;
    }

    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      title,
      description,
      status
    };

    tasks.push(newTask);
  }

  alert("There are enough tasks on your board, please check them in the console.");
}

// Function to filter completed tasks
function getCompletedTasks() {
  return tasks.filter(task => task.status === "done");
}

// Run the program
addTasks();

// Console output
console.log("All tasks:", tasks);
console.log("Completed tasks:", getCompletedTasks());
