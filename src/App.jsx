import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles/App.css'

import Header from './components/features/Header'
import BoardList from './components/features/BoardList'
import BoardPage from './pages/BoardPage'


function App() {

  const theme = useSelector(state => state.theme.mode)

  return (
    <div data-theme={theme}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<BoardList/>}/>
        <Route path='/board/:boardId' element={<BoardPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
