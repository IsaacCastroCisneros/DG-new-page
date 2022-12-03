import { useState } from 'react'
import {Routes,Route,Outlet} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Home from './pages/Home/Home'


function App() 
{
  function Layout()
  {
    return(
      <>
        <Navbar/>
        <Outlet/>
      </>
    )
  }

  return (
     <Routes>
        <Route path='/' element={<Layout/>} >
           <Route index element={<Home/>}/>
        </Route>
     </Routes>
  )
}

export default App
