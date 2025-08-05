import { useState, useEffect } from 'react'

import './styles/App.css'

import Header from './components/Header'
import ColumnForm from './components/ColumnForm'
import Column from './components/Column'

function App() {

  

  const [columns, setColumns] = useState(() => {
    const localColumns = localStorage.getItem('columns')
    return localColumns ? JSON.parse(localColumns) : []
  })

  const deletColumn = (columnId) => {
    setColumns(columns.filter(column => column.columnId !== columnId))
  }
  
  const addTaskColumn = (columnId, taskText) => {
    setColumns(() => columns.map((column)=> columnId === column.columnId? {
        ...column,
        tasks: [
          ...column.tasks,
          {
            taskId: crypto.randomUUID(),
            text: taskText,
            completed: false
          }
        ]
      } : column)
    )
  }

  const deleteTaskColumn = (columnId, taskId) => {
    setColumns(() => columns.map((column)=> columnId === column.columnId ? {
      ...column,
      tasks: column.tasks.filter(task => task.taskId !== taskId),
      
    } : column)
  )
  }

  const completeTaskColumn = (columnId, taskId) => {
    setColumns(() => columns.map((column)=> columnId === column.columnId ? {
      ...column,
      tasks: column.tasks.map(task => task.taskId === taskId ? {...task, completed: !task.completed} : task)
      
    } : column))
  }


  useEffect(() => {
    localStorage.setItem('columns', JSON.stringify(columns))
  }, [columns])

  return (
    <>
      <Header/>
      <ColumnForm columns={columns} setColumns={setColumns}/>
      <Column columns={columns} deletColumn={deletColumn} addTaskColumn={addTaskColumn} deleteTaskColumn={deleteTaskColumn} completeTaskColumn={completeTaskColumn}/>

    </>
  )
}

export default App
