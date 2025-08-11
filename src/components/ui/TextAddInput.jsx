
import { useState } from "react"
import { useItemActions } from "../../hooks/useItemActions"

import '../../styles/TextAddInput.css'

const TextAddInput = ({cb, data, textButton, textPlaceholder, resetActivePrioriti = null}) => {

	const [text, setText] = useState('')

	const handleChange = (e) => {
		setText(e.target.value)
	}

	const onExecute = useItemActions()

	const execute = () => {
		if(text !== '') {
			onExecute(cb, {...data, text})
			setText('')
			resetActivePrioriti('')
			return
		}
		alert('вы не ввели текст')
	}

	return (
		<div className="TextAddInput">
			<input 
				className=""
				type="text" 
				placeholder={`введите ${textPlaceholder}`}
				value={text}
				onChange={handleChange}
			/>
			<button
				className="TextAddInput-button"
				onClick={execute}
			>
				{textButton}
			</button>
		</div>
	)

}

export default TextAddInput