import "./style.css";
let folderList = [];
let folderCounter = 0;
let taskId = 0;

import loadDom from "./domLoad";
import { getListDom, createList } from "./getList";
import {
  getTask,
  exportTask,
  setDomFalse,
  clearFolderDiv,
  appendFolderChild,
} from "./getTask";

function targetFolders() {
  const container = document.querySelector(".container");

  container.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("newFolderDiv")) {
      const folders = document
        .querySelectorAll(".newFolderDiv")
        .forEach((el) => el.classList.remove("selectedFolderDiv"));
      for (let i = 0; i < folderList.length; i++) {
        folderList[i].selected = false;
      }
      let targetValue = target.getAttribute("value");
      target.classList.add("selectedFolderDiv");
      folderList[targetValue].selected = true;
      clearFolderDiv();
      appendFolderChild(folderList[targetValue].task);
    }
  });
}

function delTask() {
  const container = document.querySelector(".container");

  container.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("taskDivDel")) {
      let parentNode = target.parentNode;
      let folderIndex = 0;

      const folders = document.querySelectorAll(".newFolderDiv");
      let foldCounter = 0;
      folders.forEach((folder) => {
        if (folder.classList.contains("selectedFolderDiv")) {
          folderIndex = foldCounter;
        }
        foldCounter++;
      });

      const taskDiv = document.querySelectorAll(".tasksDiv");
      let counter = 0;
      taskDiv.forEach((div) => {
        if (div === parentNode) {
          folderList[folderIndex].task.splice(counter, 1);
        }
        counter++;
      });

      parentNode.remove();
    }
  });
}

function isSelected() {
  let varSelected = false;
  folderList.forEach((el) => {
    if (el.selected === true) {
      varSelected = true;
    }
  });
  return varSelected;
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    loadDom();
    const folderButton = document.querySelector(".inputButton");
    const rightTopButton = document.querySelector(".rightTopButton");

    folderButton.addEventListener("click", () => {
      if (folderList.length < 11) {
        getListDom(folderCounter);
        let newFolder = createList();
        newFolder.number = folderCounter + 1;
        folderList.push(newFolder);
        folderCounter++;
      }
    });
    targetFolders();

    rightTopButton.addEventListener("click", () => {
      if (folderList.length > 0 && isSelected()) {
        setDomFalse();
        getTask(taskId);
        let newTask = exportTask();

        folderList.forEach((folder) => {
          if (folder.selected) {
            folder.task.push(newTask);
          }
        });
        taskId++;
      }
    });
    delTask();
  },
  false,
);
