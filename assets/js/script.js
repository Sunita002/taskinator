var formE1 = document.querySelector("#task-form")
console.log(buttonEl);

var buttonEl = document.querySelector("#save-task"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 


//comment out old code to add another function on create task handler//
/*var createTaskHandler = function() { 
  var listItemEl = document.createElement("li"); 
  //listItemEl.className = "task-item"; 
  listItemEl.textContent = "This is a new task."; 
  tasksToDoEl.appendChild(listItemEl); 
  }; 

formEl.addEventListener("submit", createTaskHandler);
*/

var createTaskHandler = function(event) {
    event.preventDefault();
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    listItemE1.textContent = "This is a new task";
    tasksToDoEl.appendChild(listItemE1);
};