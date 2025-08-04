

const FilterButtons = ({setFilter}) => {


	const handleAll = () => {
		setFilter('all')
	}

	const handleActive = () => {
		setFilter('active')
	}

	const handleCompleted = () => {
		setFilter('completed')
	}

	return (
		<div className="FilterButtons">
			<button className="buttonAll"
				onClick={handleAll}
			>
				Все задачи
			</button>
			<button className="buttonActive"
				onClick={handleActive}
			>
				Активные задачи
			</button>
			<button className="buttonCompleted"
				onClick={handleCompleted}
			>
				завершенные задачи
			</button>
		</div>
	)

}

export default FilterButtons