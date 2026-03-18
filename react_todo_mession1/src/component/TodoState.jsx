function TodoStats({ todos }) {
    const total = todos.length
    const completed = todos.filter((todo) => todo.completed).length
    const remaining = todos.filter((todo) => !todo.completed).length

    return (
        <>
            <p>
                전체 {total}개 / 완료 {completed}개 / 남은 할일 {remaining}개
            </p>
            {remaining === 0 && total > 0 && <p> 모든 할일을 완수했습니다!</p>}
        </>
    )
}

export default TodoStats
