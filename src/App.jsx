import './App.css'
import { Routes, Route } from "react-router-dom"

import Cart from './pages/Cart';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {

  return (
    <div className="App">


  
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path='/profile' element={<Error />} />
  </Routes>
    </div>
  )
}

export default App
