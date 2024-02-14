import React from 'react'
import { Routes,Route } from 'react-router-dom'
import DisplayProduct from './pages/DisplayProduct'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Homepage from './components/Homepage'
import Payment from './components/Payment'
import Beds from './pages/Beds'
import Chairs from './pages/Chairs'
import Dinigsets from './pages/Diningsets'
import Sofas from './pages/Sofas'
import Table from './pages/Table'
import Wardrobes from './pages/Wardrobes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Search from './components/Search'
import UserContextprovider from './Globalcontext/UserContextprovider'

const App = () => {
  return (
    <div>
      <Navbar />
      <UserContextprovider>

<Routes>
      
<Route path='/'element={<Homepage/>} >   </Route>
// <Route path='/Payment'element={<Payment/>} >   </Route>
// <Route path='/Beds'element={<Beds/>} >   </Route>
// <Route path='/Chairs'element={<Chairs/>} >   </Route>
// <Route path='/Diningsets'element={<Dinigsets/>} >   </Route>
// <Route path='/Sofas'element={<Sofas/>} >   </Route>
// <Route path='/Table'element={<Table/>} >   </Route>
// <Route path='/Wardrobes'element={<Wardrobes/>} >   </Route>
<Route path='/Signin'element={<Signin/>} ></Route>
<Route path='/Signup'element={<Signup/>} ></Route>
<Route path='/:id'element={<DisplayProduct/>} ></Route>
// <Route path='/Cart'element={<Cart/>} >   </Route>
// <Route path='/Search/:term'element={<Search/>} >   </Route>
  
</Routes>

<Footer/>
      </UserContextprovider>

    </div>
  )
}

export default App