import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from "react-router-dom";

import Home from './pages/home/home/Home';
import Services from './pages/services/Services';
import Login from './pages/login/Login';
import Blog from './pages/blog/Blog';
import Shipment from './pages/shipment/Shipment';
import NotMatch from './pages/notMatch/NotMatch';
import ServicesDetails from './pages/home/servicesDetails/ServicesDetails';
import Register from './pages/register/Register';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Navigation from './pages/shared/Navigation';

function App() {

  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/product/:productId" element={<RequireAuth><ServicesDetails /></RequireAuth>}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/shipment" element={<Shipment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotMatch />}></Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
