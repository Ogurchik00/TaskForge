
import '../styles/Column.css'

import TaskForm from './TaskForm'
import TaskItem from './TaskItem'

const Column = ({columns, deletColumn, addTaskColumn, deleteTaskColumn, completeTaskColumn}) => {

return (
	<div className='Column'>
		{
			columns.map(({columnId, title, tasks}) => (
				<div 
					className='column-item'
					key={columnId}
				>
					<h3>
						{title}
					</h3>
					<TaskForm columnId={columnId} addTaskColumn={addTaskColumn}/>
					<button
						onClick={() => deletColumn(columnId)}
					>
						Удалить колонку
					</button>
					<ul>
						{tasks.map(({taskId, text, completed}) => <TaskItem 
							key={taskId} 
							columnId={columnId} 
							taskId={taskId} text={text} 
							taskCompleted={completed}
							deleteTaskColumn={deleteTaskColumn} 
							completeTaskColumn={completeTaskColumn}
						/>)}
					</ul>
				</div>
			))
		}
	</div>
)

}

export default Column
