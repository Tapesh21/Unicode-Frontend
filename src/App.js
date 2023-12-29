
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Customer/Components/Cart/Cart';
import Checkout from './Customer/Components/Checkout/Checkout';
import Header from './Customer/Components/Header/Header';
import Order from './Customer/Components/Order/Order';
import OrderDetails from './Customer/Components/Order/OrderDetails';
import ProductDetails from './Customer/Components/ProductDetails/ProductDetails';
import Products from './Customer/Components/Products/Products';
import CustomerRoutes from './Routers/CustomerRoutes';
//import HomePage from './Pages/HomePage';
//import Header from './Customer/Components/Header/Header';
//import HomePage from './Pages/HomePage';

function App() {
  return (
   <div>

    <Routes>
      <Route path='/*' element={<CustomerRoutes/>}></Route>
    </Routes>
    <Header/>
    <div>
      {/*<HomePage/>*/}
       {/*<Products/>*/}
       {/*<ProductDetails/>*/}
       {/*<Cart/>*/}
       {/* <Checkout/>*/}
      {/* <Order/>*/}
       {/*<OrderDetails/>*/}
    </div>
   </div> 

  );
}

export default App;
