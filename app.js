//define Ui vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
//const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListener();

//load all event listeners
function loadEventListener() {
    //add task event
    form.addEventListener('submit',addTask);
    //remove task event
    taskList.addEventListener('click',removeTask);
    //clear task events
    clearBtn.addEventListener('click',clearTasks);
    //filter task event
  //  filter.addEventListener('keyup', filterTasks);
}

//add task
function addTask(e) { 
    if(taskInput.value === ''){
        alert('Add a task');
    }

    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'colection-list';
    //create text node and apend to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create a new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //clear input
    taskInput.value = '';
 
    e.preventDefault();
}

//remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove(); 
        }
    }

}

//clear task
function clearTasks() {
    //slower
    //taskList.innerHTML = "";

    //faster
    if(confirm('Are you sure? You want to clear all tasks?')){
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild); 
        }
    }
}

//filter task
// function filterTasks(e) {
//     const text = e.target.value.toLowerCase();

//     document.querySelectorAll('.collection-item').forEach(
//         function(task) {
//             const item = task.firstChild.textContent;
//             if (item.toLowerCase().indexOf(text) != -1) {
//                 task.style.display = 'block';
//             } else {
//                 task.style.display = 'none';
//             }
//         }
//     );
// }
