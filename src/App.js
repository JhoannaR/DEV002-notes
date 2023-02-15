//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Puedo renombfrar BrowserRouter as Router. Route permite definir una ruta(al cambiar la url). Routes es el padre de Route
//import './App.css';

import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';


export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<HomePage/>}></Route>
      <Route path='/signup' element = {<SignupPage/>}></Route>
      <Route path='/signin' element = {<SigninPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}