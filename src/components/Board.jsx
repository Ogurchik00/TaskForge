
import { useDispatch } from "react-redux"
import { removeBoard } from "../store/boardsSlice"

import TaskForm from "./TaskForm"
import TaskItem from "./TaskItem"

const Board = ({boardId, title, tasks}) => {

	const dispatch = useDispatch()

	const onRemoveBoard = () => {
		dispatch(removeBoard({boardId}))
	}

  return (
		<div>
			<p>
				{title}
			</p>
			<button
				onClick={onRemoveBoard}
			>
				Удалить доску
			</button>
			<TaskForm boardId={boardId}/>
			{
				tasks.length ? 	tasks.map(({taskId, text, completed}) => <TaskItem key={taskId} boardId={boardId} taskId={taskId} text={text} completed={completed}/>) : 'Список задач пуст'
			}
		</div>
	)
}

export default Board
