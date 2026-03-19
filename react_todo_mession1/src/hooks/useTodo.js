import { useEffect, useState } from 'react'

const initialTodos = [
    { id: 1, todo: '공부하기', completed: false },
    { id: 2, todo: '컴포넌트 분리 연습', completed: true },
    { id: 3, todo: 'TodoList 만들기', completed: false },
]

export default function useTodo() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos')
        if (saved) {
            return JSON.parse(saved) // localStorage에 저장된 값이 있으면 그걸 사용
        } else {
            return initialTodos // 없으면 초기 데이터 사용
        }
    })

    const [nextId, setNextId] = useState(() => {
        const saved = localStorage.getItem('nextId')
        if (saved) {
            return JSON.parse(saved) // localStorage에 저장된 nextId가 있으면 그걸 사용
        } else {
            return 4 // 없으면 4부터 시작
        }
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        localStorage.setItem('nextId', JSON.stringify(nextId))
    }, [todos, nextId])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target

        if (!form.todo.value.trim()) {
            alert('할일을 입력해주세요!')
            return
        }

        setTodos([...todos, { id: nextId, todo: form.todo.value, completed: false }])
        setNextId(nextId + 1)
        form.reset()
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

    return { todos, handleOnSubmit, removeTodo, toggleTodo }
}
