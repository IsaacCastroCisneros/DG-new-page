import { useEffect } from 'react'
import React,{ useState } from 'react'
import {Routes,Route,Outlet} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'

export const appContext=React.createContext();

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


  const contextValues=
  {
    
  }


  return (
    <appContext.Provider value={contextValues}>
     <Routes>
        <Route path='/' element={<Layout/>} >
           <Route index element={<Home/>}/>
           <Route path='/curso' >
             <Route path=':id' element={<Product type={'cursos'} />}/>
           </Route>
           <Route path='/diploma'>
             <Route path=':id' element={<Product type={'diplomas'} />}/>
           </Route>
           <Route path='/diplomado'>
             <Route path=':id' element={<Product type={'diplomados'} />}/>
           </Route>
           <Route path='/pasarela-pago'/>
        </Route>
     </Routes>
    </appContext.Provider>
  )
}

export default App
