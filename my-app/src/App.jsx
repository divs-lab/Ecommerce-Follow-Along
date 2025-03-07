
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/login'
import { Signup } from './components/signup'
import { Home } from './page/Home'
import {ProductForm, Productform} from './components/productform'
import { Productcardseller } from './components/productcardforseller'
import {SingleCard} from './components/singlecard'
import {CreateAddress} from './components/address';
import Cart from './page/cart'
import SelectAddress from './page/selectAddress'
import OrderConfirmation from './page/orderConfirmation'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/productform" element={<ProductForm/>} />
      <Route path="/my-product" element={<Productcardseller/>}/>
      <Route path="/products/:id" element={<SingleCard/>}/>
      <Route path="/address" element={<CreateAddress/>}/>
      <Route path="/selectAddress" element={<SelectAddress/>}/>
      <Route path="/order-confirm" element={OrderConfirmation}/>
    </Routes>
    </>
  )
}

export default App
