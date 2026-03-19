function TodoStats({ todos }) {
    const total = todos.length
    const completed = todos.filter((todo) => todo.completed).length // 완료된 할일 개수
    const remaining = todos.filter((todo) => !todo.completed).length // 남은 할일 개수

    return (
        <>
            <p>
                전체 {total}개 / 완료 {completed}개 / 남은 할일 {remaining}개
            </p>
            {remaining === 0 && total > 0 && <p> 모든 할일을 완수했습니다!</p>}
            {/* 남은 할일 0개, 전체 할일 0개 이상일 시 메세지 출력 */}
        </>
    )
}

export default TodoStats
