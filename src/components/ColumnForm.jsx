import { useState } from "react"

import '../styles/ColumnForm.css'

const ColumnForm = ({columns, setColumns}) => {

	const [formValue, setFormValue] = useState('')

	const handleChange = (e) => {
		setFormValue(e.target.value)
	}

	const addColumn = () => {
		setColumns([...columns, {
			columnId: crypto.randomUUID(),
    		title: formValue,
    		tasks: [],
		}])
		setFormValue('')
	}

  return (
		<div className="ColumnForm">
			<input 
				type="text" 
				placeholder="Введите название колонки"
				value={formValue}
				onChange={handleChange}
			/>
			<button
				onClick={addColumn}
			>
				Добавить колонку
			</button>
		</div>
	)

}

export default ColumnForm