import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBoard } from "../store/boardsSlice"
import { Link } from "react-router-dom"

import '../styles/BoardList.css'


const BoardList = () => {

	const [boardName, setBoardName] = useState('')
	const handleBoardNameChange = (e) => {
		setBoardName(e.target.value)
	}

	const dispatch = useDispatch()

	const boards = useSelector(state => state.boards.boards)

	const onAddBoard = () => {
		if(boardName !== '') {
			dispatch(addBoard({boardName}))
			setBoardName('')
		}
	}

	return (
		<div className="BoardList">
			<div className="wrapper">
				<div className="boardList-addBoard">
					<input
						className="boardList-addBoard-input"
						type="text" 
						placeholder="введите название доски"
						value={boardName}
						onChange={handleBoardNameChange}
					/>
					<button
						className="boardList-addBoard-button"
						onClick={onAddBoard}
					>
						создать доску
					</button>
				</div>
				<div className="boardList-items">
					{
						boards.map(({boardId, title}) => (
							<Link 
								to={`/board/${boardId}`} 
								key={boardId} 
								className="Link">
							<div	
								className="bordList-item"
								
							>	
								<p className="bordList-item-title">
									{title}
								</p>
							</div>
						</Link>))
						}
				</div>
			</div>
		</div>
	)

}

export default BoardList