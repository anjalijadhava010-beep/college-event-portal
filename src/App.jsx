import Footer from "./components/Footer"
import MyRegistration from "./pages/MyRegistration"
import Register from "./pages/Register"
import EventDetails from "./pages/EventDetails"
import "./App.css"

import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Events from "./pages/Events"


function App(){

  return(

    <>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/events" element={<Events/>}/>
        <Route 
        path="/events/:id" 
        element={<EventDetails/>}
        />
        <Route 
        path="/register" 
        element={<Register/>}
        />
        <Route 
        path="/my-registration"
        element={<MyRegistration/>}
        />
        

      </Routes>
      <footer/>

    </>

  )
}

export default App