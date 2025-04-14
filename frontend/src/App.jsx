import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Auth, Cart, About, Admin, AccountManagement, OrderFulfillment } from './pages'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Auth />} />
          <Route path="/store" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="/cart" element={<Cart />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/account-management" element={<AccountManagement />} />
          <Route path="/admin/order-fulfillment" element={<OrderFulfillment />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
