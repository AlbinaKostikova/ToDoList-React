import { useState } from 'react'
import { Form } from '../components/Form/Form'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ToDo } from '../models/todo-item'

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([])

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    }
    setTodos([...todos, newToDo])
  }
  const updateTodo = (toDoItem: ToDo) => {
    const newTodos = todos.map(todo => {
      if (todo.id === toDoItem.id) {
        todo.isDone = !todo.isDone
      }
      return todo
  })
    setTodos(newTodos)
  }
  const deleteTodo = (toDoItem: ToDo) => {
    const newTodos = todos.filter(todo => todo.id !== toDoItem.id)
    setTodos(newTodos)
  }
  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updateToDo={updateTodo} deleteToDo={deleteTodo} />
    </>
  )
}
