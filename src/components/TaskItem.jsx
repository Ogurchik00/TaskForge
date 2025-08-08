import { useDispatch } from 'react-redux'
import { removeTaskFromBoard, toggleTaskInBoard } from '../store/boardsSlice'

import '../styles/TaskItem.css'


const TaskItem = ({boardId, taskId, text, completed}) => {

	const dispatch = useDispatch()

	return (
		<div
			className="TaskItem"
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
					onClick={() => dispatch(removeTaskFromBoard({boardId, taskId}))}
				>
					Удалить
				</button>
			</div>
		</div>
        
	)

}

export default TaskItem