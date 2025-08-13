import { useDispatch } from 'react-redux'
import { removeTaskFromBoard, toggleTaskInBoard } from '../../store/boardsSlice'

import '../../styles/TaskItem.css'


const TaskItem = ({boardId, columnId, taskId, text, completed, priority}) => {

	const dispatch = useDispatch()

	return (
		<div
			className={`TaskItem ${priority}`}
		>
			<p className={`taskItem-text ${completed ? 'completed' : ''}`}>
				{text}
			</p>
			<div className='taslItem-buttoms'>
				<button
					className='button-complete'
					onClick={() => dispatch(toggleTaskInBoard({boardId,taskId}))}
				>	
					{completed ? 'вернуть' : 'завершить'}
				</button>
				<button
					className='button-remove'
					onClick={() => dispatch(removeTaskFromBoard({boardId, columnId, taskId}))}
				>
					Удалить
				</button>
			</div>
		</div>
        
	)

}

export default TaskItem