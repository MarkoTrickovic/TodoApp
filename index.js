angular.module('todoApp', [])
    .controller('TodoListController', function () {
        var todoList = this;

        todoList.todos = [
            { text: 'Learn Angular JS', done: false },
            { text: 'Make Web App', done: false }];

        todoList.addTodo = function () {
            todoList.todos.push({ text: todoList.todoText, default: false });
            todoList.todoText = '';
        };

        todoList.remaining = function () {
            var count = 0;
            angular.forEach(todoList.todos, function (todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        todoList.archive = function() {
            var oldTodoList = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodoList, function(todo) {
                if (!todo.done) todoList.todos.push(todo);
            });
        };
    });