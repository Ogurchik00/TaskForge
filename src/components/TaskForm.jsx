import { useState } from 'react'

import '../styles/TaskForm.css'

const TaskForm = ({columnId, addTaskColumn}) => {

	const [value, setValue] = useState('')
	const handleChange = (e) => {
		setValue(e.target.value)
	}

	const onAddTask = () => {
		addTaskColumn(columnId, value)
		setValue('')
	}

	return (
		<div className='TaskForm'>
			<input 
        type="text" 
				placeholder='введите текст задачи'
				value={value}
				onChange={handleChange}
      />
			<button
				onClick={onAddTask}
			>
				добавить задачу
			</button>
		</div>
	)

}

export default TaskForm