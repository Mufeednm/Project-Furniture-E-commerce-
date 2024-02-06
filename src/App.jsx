import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Signup from './components/Signup'
import Signin from './components/Signin'
import Homepage from './components/Homepage'
import Cart from './components/Cart'
import Payment from './components/Payment'
import Beds from './pages/Beds'
import Chairs from './pages/Chairs'
import Dinigsets from './pages/Diningsets'
import Sofas from './pages/Sofas'
import Table from './pages/Table'
import Wardrobes from './pages/Wardrobes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
<Routes>
      
<Route path='/'element={<Homepage/>} >   </Route>
// <Route path='/Cart'element={<Cart/>} >   </Route>
// <Route path='/Payment'element={<Payment/>} >   </Route>
// <Route path='/Beds'element={<Beds/>} >   </Route>
// <Route path='/Chairs'element={<Chairs/>} >   </Route>
// <Route path='/Diningsets'element={<Dinigsets/>} >   </Route>
// <Route path='/Sofas'element={<Sofas/>} >   </Route>
// <Route path='/Table'element={<Table/>} >   </Route>
// <Route path='/Wardrobes'element={<Wardrobes/>} >   </Route>
<Route path='/Signin'element={<Signin/>} ></Route>
<Route path='/Signup'element={<Signup/>} ></Route>
  
</Routes>

<Footer/>

    </div>
  )
}

export default App