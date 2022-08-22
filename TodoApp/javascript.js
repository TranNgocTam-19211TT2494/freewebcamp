let form = document.getElementById('form');
let textInput = document.getElementById('textInput');
let dataInput = document.getElementById('dateInput');
let textarea = document.getElementById('textarea');
let msg = document.getElementById('msg');
let tasks = document.getElementById('tasks');
let add = document.getElementById('add');
let data = [];



form.addEventListener('submit', function(e) {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    msg.innerHTML = "Task cannot be blank";
  } else {
    acceptData();
    add.setAttribute('data-bs-dismiss', 'modal');
    add.click();

    (() => {
      add.setAttribute('data-bs-dismiss', '');
    })();
  }
}

let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dataInput.value,
    description: textarea.value
  });

  localStorage.setItem('data', JSON.stringify(data));
  createTasks();
}

let createTasks = () => {
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
      <div id=${y}>
        <span class="fw-bold">${x.text}</span>
        <span class="small text-secondary">${x.date}</span>
        <p>${x.description}</p>

        <span class="options">
          <i onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
          <i onclick="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
        </span>
      </div>
    `);
    
  });
  localStorage.setItem('data', JSON.stringify(data));
  resetForm();
}

let resetForm = () => {
  textInput.value = "";
  dataInput.value= "";
  textarea.value = "";
}

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);

  localStorage.setItem('data', JSON.stringify(data));
}

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  dataInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;
  if (selectedTask) {
    deleteTask(e);
  } else {
    
  }
}