import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBoard } from "../store/boardsSlice"

import Board from "./Board"


const BoardList = () => {

	const [boardName, setBoardName] = useState('')
	const handleBoardNameChange = (e) => {
		setBoardName(e.target.value)
	}

	const dispatch = useDispatch()

	const boards = useSelector(state => state.boards.boards)

	const onAddBoard = () => {
		dispatch(addBoard({boardName}))
		setBoardName('')
	}

	return (
		<div>
			<div>
				<input 
					type="text" 
					placeholder="введите название доски"
					value={boardName}
					onChange={handleBoardNameChange}
				/>
				<button
					onClick={onAddBoard}
				>
					создать доску
				</button>
			</div>
				{
					boards.map(({boardId, title, tasks}) => <Board key={boardId} boardId={boardId} title={title} tasks={tasks}/>)
				}
		</div>
	)

}

export default BoardList