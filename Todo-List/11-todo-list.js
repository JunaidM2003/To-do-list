 const todolist = [
  
];



function renderTodoList(){
let todolistHTML = '';

todolist.forEach(function(todoObject, index){

  const {name, dueDate} = todoObject;

  const html = `
   <div>${name}</div>
   <div>${dueDate}</div>
      <button onclick ="
      todolist.splice(${index}, 1);
      renderTodoList();
      "Class="js-delete">Delete</button>
   `; //generating HTML
  todolistHTML += html;

});



document.querySelector('.js-todo-list')
.innerHTML = todolistHTML;
}


function addTodo(){

  const inputElement = document.querySelector(".js-name-input");
  const inputElementDate = document.querySelector(".js-duedate-input");

  const name = inputElement.value;
  const dueDate = inputElementDate.value;

  todolist.push({
//name: name,
   // dueDate: dueDate,
name,
dueDate
  });

  console.log(todolist);

  inputElement.value = '';
  renderTodoList();

  }
