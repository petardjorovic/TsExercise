import { TasksInterface } from "./../interfaces/TasksInterface";
import axios from "axios";

export async function getAllTasks(): Promise<void | TasksInterface[]> {
  try {
    const res = await axios.get("/data/tasks.json");
    return res.data;
  } catch (err) {
    console.log("Error: ", err);
    return;
  }
}

export function showTasks(tasks: TasksInterface[]): void {
  const taskListElement = document.getElementById(
    "task-list"
  )! as HTMLDivElement;

  tasks.forEach((task) => {
    const taskDiv: HTMLDivElement = document.createElement("div");

    const taskTitle: HTMLHeadingElement = document.createElement("h2");
    taskTitle.innerText = task.title;
    const taskDescription: HTMLParagraphElement = document.createElement("p");
    taskDescription.innerText = task.description;
    const taskDueDate: HTMLParagraphElement = document.createElement("p");
    taskDueDate.innerText = task.due_date;

    taskDiv.append(taskTitle, taskDescription, taskDueDate);

    taskListElement.append(taskDiv);
  });
}

export const getNewTasks = (): TasksInterface[] | void => {
  let stored: string | null = localStorage.getItem("tasks");
  if (!stored) return;
  return JSON.parse(stored);
};

export const showNewTasks = (tasks: TasksInterface[]) => {
  const newTaskList = document.getElementById(
    "new-task-list"
  ) as HTMLDivElement;

  tasks.forEach((task, i) => {
    const newTaskDiv: HTMLDivElement = document.createElement("div");

    const taskTitle: HTMLHeadingElement = document.createElement("h2");
    taskTitle.innerText = task.title;
    const taskDescription: HTMLParagraphElement = document.createElement("p");
    taskDescription.innerText = task.description;
    const taskDueDate: HTMLParagraphElement = document.createElement("p");
    taskDueDate.innerText = task.due_date;
    const deleteTaskBtn: HTMLButtonElement = document.createElement("button");
    deleteTaskBtn.innerText = "Delete task";
    deleteTaskBtn.addEventListener("click", function () {
      deleteTask(task);
    });

    newTaskDiv.append(taskTitle, taskDescription, taskDueDate, deleteTaskBtn);

    newTaskList.append(newTaskDiv);
  });
};

export const deleteTask = (task: TasksInterface): void => {
  let stored: string = localStorage.getItem("tasks")!;
  let newTasks: TasksInterface[] = JSON.parse(stored);
  let filtered: TasksInterface[] = newTasks.filter((newTask, i) => {
    return (
      newTask.title !== task.title && newTask.description !== task.description
    );
  });
  localStorage.setItem("tasks", JSON.stringify(filtered));
  const newTaskList = document.getElementById(
    "new-task-list"
  ) as HTMLDivElement;
  newTaskList.innerHTML = "";
  const filteredTasks = getNewTasks();

  if (filteredTasks) {
    showNewTasks(filteredTasks);
  }
};
