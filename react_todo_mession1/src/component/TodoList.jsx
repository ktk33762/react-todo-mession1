function TodoList({ todos, removeTodo, toggleTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        onChange={() => toggleTodo(todo.id)}
                        checked={todo.completed} // checked → completed
                    />
                    {JSON.stringify(todo.completed)} / {todo.id} / {todo.todo}
                    <button onClick={() => removeTodo(todo.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
