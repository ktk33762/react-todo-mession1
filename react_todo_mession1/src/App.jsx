import { useState } from 'react'
import TodoForm from './component/TodoForm.jsx'
import TodoList from './component/TodoList.jsx'

const initialTodos = [
    { id: 1, todo: ' 공부하기', completed: false },
    { id: 2, todo: '컴포넌트 분리 연습', completed: true },
    { id: 3, todo: 'TodoList 만들기', completed: false },
]

function App() {
    const [todos, setTodos] = useState(initialTodos)
    const [nextId, setNextId] = useState(4)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target

        setTodos([...todos, { id: nextId, todo: form.todo.value, completed: false }])
        setNextId(nextId + 1)
        form.reset() // 폼 입력후 입력창 초기화
    }

    const removeTodo = (seletedId) => {
        const filterTodos = todos.filter((todo) => todo.id !== seletedId)
        setTodos(filterTodos)
    }

    const toggleTodo = (seletedId) => {
        const updateTodos = todos.map((todo) =>
            todo.id === seletedId ? { ...todo, completed: !todo.completed } : todo,
        )
        setTodos(updateTodos)
    }

    return (
        <>
            <TodoForm onSubmit={handleOnSubmit} />
            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </>
    )
}

export default App
