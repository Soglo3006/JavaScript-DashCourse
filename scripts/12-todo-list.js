const todoList = [];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';


    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const name = todo.name;
        const dueDate = todo.dueDate;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
            " class="delete-button">Delete</button>    
            `;
        todoListHTML += html;
    }


    document.querySelector('.js-todo-list').innerHTML = todoListHTML;



}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');

    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;

    const name = inputElement.value;

    todoList.push({
        name: name,
        dueDate: dueDate
    });

    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}