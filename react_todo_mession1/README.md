# Todo List App

React를 활용해 만든 할일 관리 애플리케이션입니다.

---

## 기능 목록

- ✅ 할일 추가
- ✅ 할일 삭제
- ✅ 할일 완료 토글 (체크박스)
- ✅ 완료된 할일 중간선 표시
- ✅ 빈 값 입력 방지 (알럿)
- ✅ 중복 할일 등록 방지 (알럿)
- ✅ 전체 / 완료 / 남은 할일 개수 표시
- ✅ 모든 할일 완료 시 메시지 표시
- ✅ localStorage로 새로고침 후에도 데이터 유지

---

## 폴더 구조

```
src/
├── hooks/
│   └── useTodo.js          # 상태 및 비즈니스 로직 (localStorage 포함)
├── component/
│   ├── TodoForm.jsx         # 할일 입력 폼
│   ├── TodoList.jsx         # 할일 목록
│   └── TodoStats.jsx        # 통계 (전체/완료/남은 개수)
├── App.jsx                  # 컴포넌트 조립
├── main.jsx                 # 앱 진입점
└── index.css                # 전역 스타일
```

---

## 컴포넌트 역할

| 파일            | 역할                          |
| --------------- | ----------------------------- |
| `useTodo.js`    | 상태, 로직, localStorage 관리 |
| `App.jsx`       | hook 호출 + 컴포넌트 조립     |
| `TodoForm.jsx`  | 할일 입력 UI                  |
| `TodoList.jsx`  | 할일 목록 렌더링 UI           |
| `TodoStats.jsx` | 통계 및 완료 메시지 UI        |
