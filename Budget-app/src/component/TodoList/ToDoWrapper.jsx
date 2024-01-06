import useState from 'react'
import { TodoForm } from '../TodoList/ToDoForm'
import { EditTodoForm } from '../TodoList/EditToDoForm'
import {v4 as uuidv4} from 'uuid'
import {Todo} from '../TodoList/ToDo';
uuidv4();

export const TodoWrapper =() =>  {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id === id))

    }
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))

    }
    // const editTask = id => {
    //     setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))

    // } 

    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                 // eslint-disable-next-line react/jsx-key
                 <EditTodoForm  />


                    // <EditTodoForm editTodo={editTask} task={todo} />

                ) : (
                    <Todo task={todo} key={index}
                toggleComplete={toggleComplete} deleteTodo={deleteTodo} 
                editTodo={editTodo}/>
                )
                
            ))}

        </div>
    )
}