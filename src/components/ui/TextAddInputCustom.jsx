import { useState } from "react";

import '../../styles/TextAddInputCustom.css'

import TextAddInput from "./TextAddInput";

const TextAddInputCustom = ({cb, data, textPlaceholder, textButton}) => {

	const [priority, setPriority] = useState('C')

	const [activeId, setActiveId] = useState(null)

	const buttons = [
		{id: 1, priority: 'A'},
		{id: 2, priority: 'B'},
		{id: 3, priority: 'C'},
	]

	const onPriority = (priority, buttonId) => {
		setActiveId(buttonId)
		setPriority(priority)
	}

	const resetActivePriority = () => {
		setActiveId(null)
		setPriority('C')
	}

	return (
		<div className="TextAddInputCustom">
			<TextAddInput
				cb={cb}
				data={{...data, priority}}
				textPlaceholder={textPlaceholder}
				textButton={textButton}
				resetActivePrioriti={resetActivePriority}
			/>
			<div className="SelectPriority">
				{
					buttons.map(({id, priority})=> 
						<div
							key={id}
							className={`priority ${priority} ${activeId === id ? 'active' : ''}`}
							onClick={()=>onPriority(priority, id)}
						>
						</div>
					)
				}
			</div>
		</div>
	)
  
}

export default TextAddInputCustom
