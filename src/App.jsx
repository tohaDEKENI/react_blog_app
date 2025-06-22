import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/HomeComponents'
import AddArticle from './components/showArticle'
import AddArticleElements from './addArticleElements'
import Connection from './components/connectionPage'
import Auth from './components/auth'
import Inscription from './components/Inscription'
import NotFoudPage from './components/notFoudpage'

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Auth><Home /></Auth>} ></Route>
          <Route path='/article/:id' element={<Auth><AddArticle/></Auth>}></Route>
          <Route path='/creeArticle' element={<Auth><AddArticleElements /></Auth>}></Route>
          <Route path="/teste" element={<Connection />}></Route>
          <Route path='/inscription' element={<Inscription/>}></Route>
          <Route path='*' element={<NotFoudPage/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
