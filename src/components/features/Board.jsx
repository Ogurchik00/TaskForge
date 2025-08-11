
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { removeBoard, addTaskOnBoard } from "../../store/boardsSlice"

import '../../styles/Board.css'

import TextAddInputCustom from "../ui/TextAddInputCustom"

import TaskItem from "./TaskItem"

const Board = () => {
	const {boardId} = useParams()
	const {colorBg, title} = useSelector(state => state.boards.boards.find((board) => board.boardId === boardId))

	const dispatch = useDispatch()



	if(!boardId) return <div>Доска не найдена</div>

  return (
		<div 
			className="Board"
			style={{
				backgroundColor: colorBg,
			}}
		>
			<div className="boardHeader">
				<span className="boardTitle">
					{title}
				</span>
				<button>
					вернуться к списку досок	
				</button>					
				<button>
					добавить колонку
				</button>
			</div>
			<div className="boardMain">

			</div>
			<div className="boardFooter">

			</div>
		</div>
	)
}

export default Board
