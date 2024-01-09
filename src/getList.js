export function getListDom(number) {
  const folderContainer = document.querySelector(".folderContainer");
  const inputFolder = document.querySelector(".inputFolder");
  let newFolderDiv = document.createElement("div");
  newFolderDiv.classList.add("newFolderDiv");
  newFolderDiv.textContent = inputFolder.value;

  let folderNumber = number;

  newFolderDiv.setAttribute("value", folderNumber);
  folderContainer.appendChild(newFolderDiv);
}

export function createList() {
  const inputFolder = document.querySelector(".inputFolder");
  function Folder(name, task, selected, number) {
    this.name = name;
    this.selected = selected;
    this.task = task;
    this.number = number;
  }

  let newFolder = new Folder(inputFolder.value, [], false);
  inputFolder.value = "";
  return newFolder;
}
