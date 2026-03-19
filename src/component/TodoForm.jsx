function TodoForm({ onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="todo" />
            <button type="submit">등록</button>
        </form>
    )
}

export default TodoForm
