
import { useDispatch } from "react-redux"
import { removeBoard } from "../store/boardsSlice"

import '../styles/Board.css'

import TaskForm from "./TaskForm"
import TaskItem from "./TaskItem"

const Board = ({boardId, title, tasks}) => {

	const dispatch = useDispatch()

	const onRemoveBoard = () => {
		dispatch(removeBoard({boardId}))
	}

	if(!boardId) return <div>Доска не найдена</div>

  return (
		<div className="Board">
			<div className="board-header">
				<p className="board-header-title">
					{title}
				</p>
				<div>
					<button
						className="board-button-title"
						onClick={() => 1}
					>
						вернуться к списку досок
					</button>
					<button
						className="board-button-title"
						onClick={onRemoveBoard}
					>
						Удалить доску
					</button>
				</div>
			</div>
			<TaskForm boardId={boardId}/>
			<div className="board-tasks">
				{
					tasks.length ? 	tasks.map(({taskId, text, completed}) => 
					<TaskItem key={taskId} boardId={boardId} taskId={taskId} text={text} completed={completed}/>) 
					: <p className="no-text">Список задач пуст</p>
				}
			</div>
		</div>
	)
}

export default Board
