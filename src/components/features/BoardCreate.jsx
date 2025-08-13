
import { useState } from "react"
import { addBoard } from "../../store/boardsSlice"
import { useDispatch } from "react-redux"

import "../../styles/BoardCreate.css"
const colorText = [
	{colorCode:'#d32f2f'},
	{colorCode:'#ff8f00'},
	{colorCode:'#388e3c'},
]

const colorBg = [
	{colorCode:'#ffebee'},
	{colorCode:'#fff8e1'},
	{colorCode:'#e8f5e9'},
]


const BoardCreate = ({boardCreateActive, activeAddBoard}) => {

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [boardColor, setBoardColor] = useState('#e8f5e9')
	const [titleColor, setTitleColor] = useState('')

	const handleChangeDescription = (e) => {
		setDescription(e.target.value)
	}

	const handleChangeTitle = (e) => {
		setTitle(e.target.value)
	}

	const handleBoardColor = (colorCode) => {
		setBoardColor(colorCode)
	}

	const handleTitleColor = (colorCode) => {
		setTitleColor(colorCode)
	}

	const dispatch = useDispatch()

	const createBoard = () => {
		dispatch(addBoard({text: title, description, colorBg: boardColor, colorText: titleColor}))
		setTitle('')
    boardCreateActive()
	}

	return (
		<div className={`BoardCreate ${activeAddBoard ? "" : "active"}`}>
				<input 
					className="boardCreateInfo-input gridCenter"
					type="text" 
					placeholder="Введите название доски"
					value={title}
					onChange={handleChangeTitle}
					autoFocus
				/>
					<div className="colorBoard gridCenter">
						<p>
							Цвет доски
						</p>
						<div className="colorGroop">
							{
								colorBg.map(color =>  
									<div 
										className="color" 
										key={color.colorCode} 
										style={{
											backgroundColor:`${color.colorCode}`
										}}
										onClick={()=>handleBoardColor(color.colorCode)}
									>
									</div>
								)
							}
						</div>
					</div>
					<div className="colorTitle gridCenter">
						<p>
							Цвет заголовка
						</p>
						<div className="colorGroop">
							{
							colorText.map(color =>  
								<div 
									className="color" 
									key={color.colorCode} 
									style={{
										backgroundColor:`${color.colorCode}`
									}}
									onClick={()=>handleTitleColor(color.colorCode)}
								>
								</div>
							)
							}
						</div>
					</div>
				<div 
					className="resultStyle gridCenter"
					style={{
						backgroundColor: `${boardColor}`
					}}
				>
					<p 
						className="boardTitle"
						style={{
							color: `${titleColor}`
						}}
					>
						{title}
					</p>
				</div>
				<textarea 
					name="description" 
					id="descriptionBoard" 
					className="gridCenter"
					placeholder="описание"
					value={description}
					onChange={handleChangeDescription}
					>
						
				</textarea>
				<button
					className="boardCreate-button gridCenter"
					onClick={createBoard}
				>
					Добавить доску
				</button>
				<div 
					className="boardCreate-exit"
					onClick={boardCreateActive}
				>
					<span>exit</span>
				</div>
		</div>
	)
  
}

export default BoardCreate
