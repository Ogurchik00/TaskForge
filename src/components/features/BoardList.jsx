import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import '../../styles/BoardList.css'

import BoardCreate from "./BoardCreate"

const BoardList = () => {

	const [activeAddBoard, setActiveAddBoard] = useState(false)

	const boardCreateActive = () => {
		setActiveAddBoard(!activeAddBoard)
	}

	const boards = useSelector(state => state.boards.boards)

	return (
		<div className="BoardList">
			<BoardCreate 
				boardCreateActive={boardCreateActive} 
				activeAddBoard={activeAddBoard}
			/>
			<div className="wrapper">
				<div className="addBoard">
					<button
						onClick={boardCreateActive}
					>
						Добавить доску
					</button>
				</div>
				<div className="boardList-items">
					{
						boards.map(({boardId, title, colorBg, colorText}) => (
							<Link 
								to={`/board/${boardId}`} 
								key={boardId} 
								className="Link">
							<div	
								className={`bordList-item `}
								style={{
									backgroundColor: colorBg,
								}}
							>	
								<p 
									className="bordList-item-title"
									style={{
										color: colorText,
									}}	
								>
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