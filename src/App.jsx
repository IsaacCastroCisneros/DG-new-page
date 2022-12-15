import React from 'react'
import {Routes,Route,Outlet} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Notification from './components/Notification/Notification'
import MobMenu from './components/NavBar/components/MobMenu/MobMenu'
import Layer from './components/NavBar/components/Layer/Layer'

function App() 
{
  function Layout()
  {
    return(
      <>
        <Navbar/>
        <Notification/>
        <Layer/>
        <MobMenu/>
        <Outlet/>
      </>
    )
  }

  return (
     <Routes>
        <Route path='/' element={<Layout/>}>
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
  )
}

export default App
