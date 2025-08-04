import '../styles/TaskList.css'

import TaskItem from './TaskItem'

const TaskList = ({tasks, setTasks, filter}) => {

	const onTogle = (id) => {
		setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
	}

	const onDelete = (id) => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	const filterTask = (() => {
		switch(filter) {
			case 'all': 
				return tasks
			case 'active':
				return tasks.filter(task => !task.completed)
			case 'completed':
				return tasks.filter(task => task.completed)
		}
	})()


	return (
		<ul className='TaskList'>
			{
				filterTask.length ? 	filterTask.map(task => (
					<TaskItem key={task.id} id={task.id} text={task.text} completed={task.completed} setTasks={setTasks} onTogle={onTogle} onDelete={onDelete}/>
				)) : 'Список задач пуст'
      }
		</ul>
	)

}

export default TaskList