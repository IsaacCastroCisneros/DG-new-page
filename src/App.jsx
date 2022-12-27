import React from 'react'
import {Routes,Route,Outlet} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Notification from './components/Notification/Notification'
import MobMenu from './components/NavBar/components/MobMenu/MobMenu'
import Layer from './components/NavBar/components/Layer/Layer'
import Pasarela from './pages/Pasarela/Pasarela'
import Programas from './pages/Programas/Programas'
import NewPopUp from './components/PopUp/NewPopUp'

function App() 
{
  function Layout()
  {
    return(
      <>
        <Navbar/>
        <Notification/>
        {/* <PopUp /> */}
        <NewPopUp/>
        <Layer/>
        <MobMenu/>
        <Outlet/>
      </>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cursos">
          <Route index element={<Programas type={"cursos"} />} />
          <Route path=":id" element={<Product type={"cursos"} />} />
        </Route>
        <Route path="/diplomas">
          <Route index element={<Programas type={"diplomas"} />} />
          <Route path=":id" element={<Product type={"diplomas"} />} />
        </Route>
        <Route path="/diplomados">
          <Route index element={<Programas type={"diplomados"} />} />
          <Route path=":id" element={<Product type={"diplomados"} />} />
        </Route>
        <Route path="/pasarela-pago" element={<Pasarela />} />
      </Route>
    </Routes>
  );
}

export default App
