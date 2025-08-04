import '../styles/TaskItem.css'


const TaskItem = ({id, text, completed, onTogle, onDelete}) => {

	return (
		<li
			className="TaskItem"
		>
			<p className={`TaskItem-text ${completed ? "completed" : ""}`}>
				{text}
			</p>
      <div>
				<button
					onClick={() => onTogle(id)}
        >
					{completed ? "Вернуть" : "Завершить"} 
        </button>
				<button
					onClick={() => onDelete(id)}
				>
					Удалить
				</button>
			</div>
		</li>
        
	)

}

export default TaskItem