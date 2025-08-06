import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addTaskOnBoard } from '../store/boardsSlice'

import '../styles/TaskForm.css'

const TaskForm = ({boardId}) => {

	const [text, setText] = useState('')
	const handleChange = (e) => {
		setText(e.target.value)
	}

	const dispatch = useDispatch()

	const onAddTask = () => {
		dispatch(addTaskOnBoard({boardId, task:{
			taskId: nanoid(),
			text: text,
			completed: false,
		}}))
		setText('')
	}

	return (
		<div className='TaskForm'>
			<input 
        type="text" 
				placeholder='введите текст задачи'
				value={text}
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