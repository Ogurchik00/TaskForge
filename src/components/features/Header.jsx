import { useDispatch} from "react-redux"
import { toggleTheme } from "../../store/themeSlice"

import '../../styles/Header.css'

const Header = () => {

	const dispatch = useDispatch()

	return (
		<div className='Header'>
			<div className='header-logo'>
				Tasker
			</div>
			<div className='header-control'>
			<button className='toogle-theme'
				onClick={() => dispatch(toggleTheme())}
			>
				сменить тему
			</button>
				<button className='personal-account'>
					личный кабинет
				</button>
				<button className='exit'>
					выйти
				</button>
			</div>
		</div>
	)

}

export default Header
