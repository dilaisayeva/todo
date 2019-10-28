
class Game {

    constructor() {
        this.todos = [];
        this.filter = "all";

    }
    addnewTodo(text) {

        let a = {
            text: text,
            status: 'active',

        }
        this.todos.push(a);
    }

    removeTodo(index) {
        this.todos.splice(index, 1)
    }

    changeStatus(index) {

        if (this.todos[index].status === 'active')
            this.todos[index].status = 'completed'
        else
            this.todos[index].status = 'active'



    }

    showTodos() {

        $('#divar-kagizi').html('')
        for (let index = 0; index < this.todos.length; index++) {
            let z = this.todos[index];
            let t = "";

            if (z.status !== this.filter && this.filter !== "all") {
                continue;
            }
            if (z.status === 'active')
                t = 'active'
            else
                t = 'completed'
            $('#divar-kagizi').append("<p data-nomre='" + index + "' class='todo-element " + t + "'>" + z.text + "</p><button class='btn-del' data-number='" + index + "'>Delete</button");
        }
    }
}

