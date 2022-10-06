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
import AddProduct from './pages/dashboard/addProduct/AddProduct';
import ManageServices from './pages/dashboard/manageServices/ManageServices';
import Order from './pages/dashboard/order/Order';
import Deshboard from './pages/dashboard/Deshboard';

function App() {

  return (
    <div style={{background: '#000',  color: '#fff', height: '100%'}}>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/product/:productId" element={<RequireAuth><ServicesDetails /></RequireAuth>}></Route>
        <Route path="/addProduct" element={<RequireAuth><AddProduct /></RequireAuth>}></Route>
        <Route path="/manage" element={<RequireAuth><ManageServices /></RequireAuth>}></Route>
        <Route path="/order" element={<RequireAuth><Order /></RequireAuth>}></Route>
        <Route path="/deshboard" element={<RequireAuth><Deshboard /></RequireAuth>}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/shipment" element={<Shipment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotMatch />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
