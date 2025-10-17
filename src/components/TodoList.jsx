import React from 'react'
import TodoItem from './TodoItem.jsx'

export default function TodoList({ todos = [], onToggle, onDelete, onEdit }) {
  if (todos.length === 0) {
    return <p className="empty">Chưa có công việc nào. Hãy thêm mới!</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />)
      )}
    </ul>
  )
}
