
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/login'
import { Signup } from './components/signup'
import { Home } from './page/Home'
import {Productform} from './components/productform'
import { Productcardseller } from './components/productcardforseller'
import {SingleCard} from './components/singlecard'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/productform" element={<Productform/>} />
      <Route path="/my-product" element={<Productcardseller/>}/>
      <Route path="/products/:id" element={<SingleCard/>}/>
    </Routes>
    </>
  )
}

export default App
