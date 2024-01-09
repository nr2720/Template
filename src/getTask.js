export function setDomFalse() {
  const tasksDiv = document.querySelectorAll(".tasksDiv");
  tasksDiv.forEach((div) => {
    div.removeAttribute("selected");
  });
}

export function getTask(taskId) {
  //identifiant
  const rightTopInput = document.querySelector(".rightTopInput");
  const rightTopInputDate = document.querySelector(".rightTopInputDate");
  const rightTopInputUrgent = document.querySelector(".rightTopInputUrgent");
  const rightBottom = document.querySelector(".rightBottom");

  //append les bon vieux child dans ca

  if (rightTopInput.value === "") {
    return;
  }

  const tasksDiv = document.createElement("div");
  tasksDiv.classList.add("tasksDiv");
  tasksDiv.setAttribute("selected", "true");
  tasksDiv.setAttribute("id", taskId);

  const tasksH2 = document.createElement("h4");
  tasksH2.classList.add(".tasksH3");
  tasksH2.textContent = rightTopInput.value;

  const urgentH4 = document.createElement("h4");
  urgentH4.classList.add("urgentH4");
  const option =
    rightTopInputUrgent.options[rightTopInputUrgent.selectedIndex].value;
  urgentH4.textContent = "Type : " + option;

  const taskDivDel = document.createElement("button");
  taskDivDel.classList.add("taskDivDel");
  taskDivDel.textContent = "X";

  const dateH4 = document.createElement("h4");
  dateH4.classList.add("dateH4");
  dateH4.textContent = "Deadline : " + rightTopInputDate.value;

  rightBottom.appendChild(tasksDiv);
  tasksDiv.appendChild(tasksH2);
  tasksDiv.appendChild(urgentH4);
  tasksDiv.appendChild(dateH4);
  tasksDiv.appendChild(taskDivDel);
}

export function exportTask() {
  function Object(task, type, deadline) {
    this.task = task;
    this.type = type;
    this.deadline = deadline;
  }

  let objectTask;
  let objectType;
  let objectDeadline;

  const tasksDiv = document.querySelectorAll(".tasksDiv");
  tasksDiv.forEach((div) => {
    if (div.hasAttribute("selected")) {
      objectTask = div.childNodes[0].textContent;
      objectType = div.childNodes[1].textContent;
      objectDeadline = div.childNodes[2].textContent;
    }
  });
  let taskObj = new Object(objectTask, objectType, objectDeadline);
  return taskObj;
}

export function clearFolderDiv() {
  const rightBottom = document.querySelector(".rightBottom");
  rightBottom.innerHTML = "";
}

export function appendFolderChild(array) {
  const rightBottom = document.querySelector(".rightBottom");
  const folderContent = array;

  for (let i = 0; i < folderContent.length; i++) {
    const task = folderContent[i].task;
    const type = folderContent[i].type;
    const deadline = folderContent[i].deadline;

    const tasksDiv = document.createElement("div");
    tasksDiv.classList.add("tasksDiv");

    const tasksH2 = document.createElement("h4");
    tasksH2.classList.add(".tasksH3");
    tasksH2.textContent = task;

    const urgentH4 = document.createElement("h4");
    urgentH4.classList.add("urgentH4");
    urgentH4.textContent = type;

    const dateH4 = document.createElement("h4");
    dateH4.classList.add("dateH4");
    dateH4.textContent = deadline;

    const taskDivDel = document.createElement("button");
    taskDivDel.classList.add("taskDivDel");
    taskDivDel.textContent = "X";

    rightBottom.appendChild(tasksDiv);

    tasksDiv.appendChild(tasksH2);
    tasksDiv.appendChild(urgentH4);
    tasksDiv.appendChild(dateH4);
    tasksDiv.appendChild(taskDivDel);
  }
}
