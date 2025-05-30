import { TasksInterface } from "../interfaces/TasksInterface";

export function addTask(task: TasksInterface): void {
  let newArr: TasksInterface[] = [];
  let storedTasks = localStorage.getItem("tasks");
  if (storedTasks !== null) {
    newArr = JSON.parse(storedTasks);
  }

  newArr.push(task);
  localStorage.setItem("tasks", JSON.stringify(newArr));
}
