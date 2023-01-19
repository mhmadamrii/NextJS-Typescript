import React, { useState, ChangeEvent } from 'react'
import { Button } from 'antd'

interface TodoList {
  taskInterface: string
  deadlineInterface: number
}

const Todo: React.FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todo, setTodo] = useState<TodoList[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task') {
      setTask(e.target.value)
    } else if (e.target.name === 'deadline') {
      setDeadline(Number(e.target.value))
    }
  }

  const handleSubmit = (): void => {
    // const newTask = { taskName: task, deadline: deadline }
    const newTask = {task, deadline}
    setTodo([...todo, newTask])
  }

  console.log(todo)
  return (
    <>
      <div style={{ width: 500, margin: '30px auto', textAlign: 'center' }}>
        <div>
          <input
            type="text"
            name="task"
            placeholder="Task"
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            placeholder="Deadline"
            onChange={handleChange}
          />
          <br />
          <Button onClick={handleSubmit}>submit</Button>
        </div>
        <div>todo list</div>
      </div>
    </>
  )
}

export default Todo
