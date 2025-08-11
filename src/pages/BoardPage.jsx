import { useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../styles/BoardPage.css'

import Board from '../components/features/Board'

const BoardPage = () => {

	const {boardId} = useParams()
	// const navigate = useNavigate()
	
	const board = useSelector(state => 
		state.boards.boards.find(board => board.boardId === boardId)
	)

  return (
		<div>
			<Board boardId={board.boardId} title={board.title} tasks={board.tasks}/>
		</div>
	)
}

export default BoardPage
