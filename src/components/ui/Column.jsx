import { useDispatch } from 'react-redux'
import { removeColumnOnBoard, addTaskOnColumn } from '../../store/boardsSlice'


import '../../styles/Column.css'

import TextAddInputCustom from './TextAddInputCustom'
import TaskItem from './TaskItem'

const Column = ({boardId, columnId, title, tasks}) => {

	const dispatch = useDispatch()

	const removeColumn = (boardId, columnId) => {
		dispatch(removeColumnOnBoard({boardId, columnId}))
	}

  return (
		<div className='Column'>
			<div className='column-title'>
				{title ?? 'Я колонка'}
			</div>
			<div className='column-addTask'>
				<TextAddInputCustom 
					cb={addTaskOnColumn} 
					data={{boardId, columnId}} 
					textButton={'добавить'} 
					textPlaceholder={'задачу'}
				/>
			</div>
			<div className='column-tasks'>
				{
					tasks.map(({taskId, text, completed, priority}) => 
					<TaskItem
						key={taskId} 
						boardId={boardId} 
						columnId={columnId} 
						taskId={taskId} 
						text={text}
						completed={completed}
						priority={priority}
					/>
				)
				}
			</div>
			<div className='removeColumn'>
				<button
					onClick={()=> removeColumn(boardId, columnId)}
				>
					Удалить
				</button>
			</div>
		</div>
	)

}

export default Column

