import TodoForm from './component/TodoForm.jsx'
import TodoList from './component/TodoList.jsx'
import TodoStats from './component/TodoState.jsx'
import useTodo from './hooks/useTodo.js'

function App() {
    const { todos, handleOnSubmit, removeTodo, toggleTodo } = useTodo()

    return (
        <>
            <TodoForm onSubmit={handleOnSubmit} />
            <TodoStats todos={todos} />
            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </>
    )
}

export default App
