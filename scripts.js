
const todosApp = {
    data() {
        return {
            todos: [],
            newTodo: {
                done: false,

            }
        }
    },
    methods: {
        addTodo: function() {
            if(this.newTodo.text) {

                this.todos.push(this.newTodo)
                this.newTodo = {
                    done: false,
                } 
        }else {
            alert('adicione algum texto')
        }
        localStorage.setItem('todo', JSON.stringify(this.todos))
    }
    },
    created() {
       this.todos = localStorage.getItem('todo') ?  JSON.parse(localStorage.getItem('todo')) : this.todos
    },
    updated() {
        localStorage.setItem('todo', JSON.stringify(this.todos))
    },

}


Vue.createApp(todosApp).mount('#app')
