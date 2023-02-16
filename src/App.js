//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Puedo renombfrar BrowserRouter as Router. Route permite definir una ruta(al cambiar la url). Routes es el padre de Route
//import './App.css';
import './style.css'
import HomePage from './pages/HomePage';
import NotesPage from './pages/NotesPage';


export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<HomePage/>}></Route>
      <Route path='/notes' element = {<NotesPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}