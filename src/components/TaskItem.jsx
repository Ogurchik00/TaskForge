import { useDispatch } from 'react-redux'
import { removeTaskFromBoard, toggleTaskInBoard } from '../store/boardsSlice'

import '../styles/TaskItem.css'


const TaskItem = ({boardId, taskId, text, completed}) => {

	const dispatch = useDispatch()

	return (
		<li
			className="TaskItem"
		>
			<p className={`${completed ? 'completed' : ''}`}>
				{text}
			</p>
			<div>
				<button
					onClick={() => dispatch(toggleTaskInBoard({boardId,taskId}))}
				>	
					{completed ? 'вернуть' : 'завершить'}
				</button>
				<button
					onClick={() => dispatch(removeTaskFromBoard({boardId, taskId}))}
				>
					Удалить
				</button>
			</div>
		</li>
        
	)

}

export default TaskItem