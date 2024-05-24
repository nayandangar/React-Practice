import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Dynamic router task/Header'
import Home from './Home'
import AuthRout from './AuthRout'
import About from '../../SimpleRout/About'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path="/profile"
            element={<AuthRout Component={<Profile />} />}/>
             
        </Routes>
        </BrowserRouter>
    </div>
  )
}
