
import './styles.css';

import { Todo, TodoList} from './classes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';

const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript');

todoList.nuevoTodo(tarea);

console.log(todoList);

