export {};
import { TasksInterface } from "./interfaces/TasksInterface";
import {
  getAllTasks,
  getNewTasks,
  showNewTasks,
  showTasks,
} from "./models/tasks";
import { addTask } from "./storage/tasksStorage";

const response = await getAllTasks();
const newTasks = getNewTasks();

if (newTasks) {
  showNewTasks(newTasks);
}

if (response) {
  showTasks(response);
}

const taskForm = document.getElementById("create-task-form") as HTMLFormElement;
taskForm.addEventListener("submit", async function (e: SubmitEvent) {
  e.preventDefault();

  const taskTitle = document.getElementById("task-title") as HTMLInputElement;
  const taskDescription = document.getElementById(
    "task-description"
  ) as HTMLTextAreaElement;
  const taskDueDate = document.getElementById(
    "task-due-date"
  ) as HTMLInputElement;

  if (
    !taskTitle.value.trim() ||
    !taskDescription.value.trim() ||
    !taskDueDate.value.trim()
  ) {
    alert("All input fields are required");
    return;
  }

  const now = new Date();
  const dueDate = new Date(taskDueDate.value);
  if (dueDate < now) {
    alert("Due date must be in future");
    return;
  }

  const newTask: TasksInterface = {
    title: taskTitle.value,
    description: taskDescription.value,
    due_date: taskDueDate.value,
  };
  addTask(newTask);
  taskTitle.value = "";
  taskDescription.value = "";
  taskDueDate.value = "";
  const newTasks = getNewTasks();

  if (newTasks) {
    showNewTasks(newTasks);
  }
});
