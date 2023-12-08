import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNavbar from './components/nav'
import Dashboard from './pages/dashboard'
import Cadastro from './pages/cadastro/index'
import Edit from './pages/cadastro/Edit'

const RoutesAPP = () => {
  return (
    <div>

    <BrowserRouter>
        <MyNavbar/>
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/edit' element={<Edit/>}/>

        </Routes>
    </BrowserRouter>


    </div>
  )
}

export default RoutesAPP