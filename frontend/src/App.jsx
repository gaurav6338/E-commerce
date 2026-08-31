import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Homes from './pages/Homes';
import Login from './pages/Login';
import Order from './pages/Order';
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return ( 
    <div className=' px-4 sm:px-[5vw] md:px-[7vw] lg:px-[7vw] px-4'>
      <ToastContainer/>
      <Navbar />
      <SearchBar className='border border-color-gray-100'/>
      <Routes>
        <Route path='/' element={<Homes/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
