import { useState, useEffect } from 'react'

import './styles/App.css'

import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterButtons from './components/FilterButtons'

function App() {

  const [tasks, setTasks] = useState(() => {
    const localTasks = localStorage.getItem('tasks')
   return localTasks ? JSON.parse(localTasks) : []
  })
  
  const [filter, setFilter] = useState('all')

  const handleAddTask = (text) => {
    if(!text) {
      alert('Отсытствует текс задачи')
      return
    }
    setTasks([...tasks, {
      id: Date.now(),
      text: text,
      completed: false,
    }])
  } 


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <>
      <Header/>
      <TaskForm tasks = {tasks}  addTask = {handleAddTask}/>
      <FilterButtons setFilter={setFilter}/>
      <TaskList tasks = {tasks}  setTasks = {setTasks} filter={filter}/>

    </>
  )
}

export default App
