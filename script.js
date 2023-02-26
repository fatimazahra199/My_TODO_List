const add = document.querySelector("#addTask")
const task_item = document.querySelectorAll('.task_item')
const task_list = document.querySelector('#task_item')
console.log(task_item)
function AddTask() {
  const newTaskInput = document.querySelector('#add_task');
  const newTaskText = newTaskInput.value;
  const newTaskElement = document.createElement('div');
  newTaskElement.classList.add('items');
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox';
  checkbox.id = 'check';
  checkbox.classList.add('check')
  newTaskElement.appendChild(checkbox);
  console.log(checkbox)
    const label = document.createElement('label');
    label.classList.add("label")
  label.textContent = newTaskText;
  newTaskElement.appendChild(label);
  task_list.appendChild(newTaskElement);

}
add.addEventListener('click',  AddTask)


function line_text(){
    const label = document.querySelectorAll('.label')
    const btn_checked = document.querySelectorAll('.check')
    console.log(btn_checked)
    for (i = 0 ; i< btn_checked.length ; i++){
        if(btn_checked[i].checked === true){
         label[i].style.textDecoration = "line-through";
    }
    else{
        label[i].style.textDecoration = "none";
    }
    }
}

task_item.forEach((el) => el.addEventListener('click', line_text))





