
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"


import '../../styles/Board.css'
import AddColumn from "../ui/AddColumn"
import Column from "../ui/Column"


const Board = () => {

	const [activeAddColumn, addActiveAddColumn] = useState(false)
	const [activeOption, addActiveOption] = useState(false)

	const onActiveAddColumn = () => {
		addActiveAddColumn(!activeAddColumn)
	}

	const onActiveOption = () => {
		addActiveOption(!activeOption)
	}


	const navigate = useNavigate()
	const {boardId} = useParams()
	const {columns, colorBg, title, description} = useSelector(state => state.boards.boards.find((board) => board.boardId === boardId))
	
	
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
				<div className="boardHeader-control">
					<button
						onClick={() => navigate(-1)}
					>
						вернуться к списку досок	
					</button>					
					<button
						onClick={onActiveAddColumn}
					>
						добавить колонку
					</button>
					<button
						onClick={onActiveOption}
					>
						настроить
					</button>
				</div>
			</div>
			<div className="boardMain">
				<AddColumn boardId={boardId} active={activeAddColumn} setActive={addActiveAddColumn}/>
				<div className="columns">
					{	
						columns.map(({columnId, title, tasks}) => 
						<div 
							className="column1"
							key={columnId}
						>
							<Column boardId={boardId} columnId={columnId} title={title} tasks={tasks} />
						</div>)
					}
				</div>
			</div>
			<div className="boardFooter">
				<span>
					{
						description === '' ? 'описание отсутствует' : description
					}
				</span>
			</div>
		</div>
	)
}

export default Board
