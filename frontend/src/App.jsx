import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import LoginPage from "./pages/loginPage/LoginPage"
import SignUpPage from "./pages/signupPage/SignUpPage"
import AboutPage from "./pages/aboutPage/AboutPage"
import ServicesPage from "./pages/servicesPage/ServicesPage"
import ContatPage from "./pages/contactPage/ContactPage"


import Navbar from "./components/Navbar"


function App() {
  

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-500 to-slate-800 text-white  overflow-hidden">
      
      
    <div className="  ">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContatPage />} />
      </Routes>
    </div>
      
    </div>
  )
}

export default App
