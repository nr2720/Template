export default function loadDom() {
  //identify container
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  //top and bottom
  const top = document.createElement("div");
  top.classList.add("top");
  const page = document.createElement("div");
  page.classList.add("page");
  container.appendChild(top);
  container.appendChild(page);

  //top text

  const logo = document.createElement("h2");
  logo.classList.add("logo");
  logo.textContent = "To do ✅";
  top.appendChild(logo);

  //page left & right

  const pageLeft = document.createElement("div");
  pageLeft.classList.add("pageLeft");

  const pageRight = document.createElement("div");
  pageRight.classList.add("pageRight");

  page.appendChild(pageLeft);
  page.appendChild(pageRight);

  //page left input & text box

  const pageLeftInputDiv = document.createElement("div");
  pageLeftInputDiv.classList.add("pageLeftInputDiv");
  pageLeft.appendChild(pageLeftInputDiv);

  const folderDiv = document.createElement("div");
  folderDiv.classList.add("folderDiv");
  pageLeft.appendChild(folderDiv);

  //pageLeftInputDiv

  const inputFolder = document.createElement("input");
  inputFolder.classList.add("inputFolder");

  const inputButton = document.createElement("button");
  inputButton.classList.add("inputButton");
  inputButton.textContent = "Ajouter";

  pageLeftInputDiv.appendChild(inputFolder);
  pageLeftInputDiv.appendChild(inputButton);

  //folder div

  const folderContainer = document.createElement("div");
  folderContainer.classList.add("folderContainer");
  folderDiv.appendChild(folderContainer);

  //right section

  const rightTop = document.createElement("div");
  rightTop.classList.add("rightTop");
  const rightBottom = document.createElement("div");
  rightBottom.classList.add("rightBottom");

  pageRight.appendChild(rightTop);
  pageRight.appendChild(rightBottom);

  //right top

  const rightTopInput = document.createElement("input");
  rightTopInput.classList.add("rightTopInput");

  const rightTopInputDate = document.createElement("input");
  rightTopInputDate.classList.add("rightTopInputDate");
  rightTopInputDate.setAttribute("type", "date");

  const rightTopInputUrgent = document.createElement("SELECT");
  rightTopInputUrgent.classList.add("rightTopInputUrgent");

  const urgentOption = document.createElement("option");
  urgentOption.value = "Urgent";
  urgentOption.innerHTML = "Urgent";
  const nonUrgentOption = document.createElement("option");
  nonUrgentOption.value = "Non Urgent";
  nonUrgentOption.innerHTML = "Non Urgent";

  rightTopInputUrgent.appendChild(urgentOption);
  rightTopInputUrgent.appendChild(nonUrgentOption);

  const rightTopButton = document.createElement("button");
  rightTopButton.classList.add("rightTopButton");
  rightTopButton.textContent = "Add";

  rightTop.appendChild(rightTopInput);
  rightTop.appendChild(rightTopInputDate);
  rightTop.appendChild(rightTopInputUrgent);
  rightTop.appendChild(rightTopButton);
}
