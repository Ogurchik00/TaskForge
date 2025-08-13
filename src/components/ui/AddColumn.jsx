
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { addColumnOnBoard } from '../../store/boardsSlice'

import '../../styles/AddColumn.css'



const AddColumn = ({boardId, active, setActive}) => {

  const [columnTitle, setColumnTitle] = useState('')

  const handleChangeColumnTitle = (e) => {
    setColumnTitle(e.target.value)
  }

  const dispatch = useDispatch()

  const onAddColumn = (title) => {
    if(title) {
      dispatch(addColumnOnBoard ({boardId, title}))
      setColumnTitle('')
      setActive('')
    }
  }

  return  (
    <div className={`AddColumn ${active ? '' : 'noActive'}`}>
      <input 
        className='addColumn-input'
        type="text"
        placeholder='название колонки'
        value={columnTitle}
        onChange={handleChangeColumnTitle} 
      />
      <button
        onClick={() => onAddColumn(columnTitle)}
      >
        добавить колонку
      </button>
    </div>
  )

}

export default AddColumn
