import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from "react-router-dom";

import Home from './pages/home/home/Home';
import Services from './pages/services/Services';
import Login from './pages/login/Login';
import Blog from './pages/blog/Blog';
import Shipment from './pages/shipment/Shipment';
import NotMatch from './pages/notMatch/NotMatch';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/shipment" element={<Shipment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotMatch />}></Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
