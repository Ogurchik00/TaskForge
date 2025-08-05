import '../styles/TaskItem.css'


const TaskItem = ({columnId, taskId, text, taskCompleted, deleteTaskColumn, completeTaskColumn}) => {

	return (
		<li
			className="TaskItem"
		>
			<p className={`${taskCompleted ? 'completed' : ''}`}>
				{
					text
				}
			</p>
      <div>
				<button
					onClick={() => completeTaskColumn(columnId, taskId)}
        >
					Завершить
        </button>
				<button
					onClick={() => deleteTaskColumn(columnId, taskId)}
				>
					Удалить
				</button>
			</div>
		</li>
        
	)

}

export default TaskItem