const todoList = [];

renderTodoList();

document.querySelector('.js-add-todo-button').addEventListener('click',
    () => {
        addTodo();
    }
)


function renderTodoList() {

    let todoListHTML = '';


    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const name = todo.name;
        const dueDate = todo.dueDate;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button
            " class="delete-button js-delete-todo-button">Delete</button>    
            `;
        todoListHTML += html;
    }


    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        })
    });



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