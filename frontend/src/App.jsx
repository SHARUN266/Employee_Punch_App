import { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Landing from './pages/Landingpage/Landing'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'


function App() {
     return (
      <>
      <Navbar/>
      <Login/>
      <Footer/>
      </>
     )
}

export default App
