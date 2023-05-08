import './App.css';
import HomePage from './HomePage';
import CartPage from './CartPage';
import ProductDetails from "./ProductDetails"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {

return(

<BrowserRouter>
  <Routes>
    <Route index element={<HomePage/>}/>
    <Route path="*" element={<HomePage/>}/>
    <Route path='/details/:id' element={<ProductDetails/>}/>
    <Route path="/cart" element={<CartPage/>}/>
  </Routes>
</BrowserRouter>


)



}

export default App;
