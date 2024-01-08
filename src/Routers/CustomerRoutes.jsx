import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from "../Pages/HomePage"
import Cart from "../Customer/Components/Cart/Cart"
import Header from '../Customer/Components/Header/Header'
import Products from '../Customer/Components/Products/Products'
import ProductDetails from "../Customer/Components/ProductDetails/ProductDetails"
import Checkout from "../Customer/Components/Checkout/Checkout";
import Order from "../Customer/Components/Order/Order";
import OrderDetails from "../Customer/Components/Order/OrderDetails";


const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <Routes>

        <Route path="/login" element={<HomePage/>}></Route>
     <Route path="/register" element={<HomePage/>}></Route>


                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Products/>}></Route>
                <Route path="/product/:productId" element={<ProductDetails/>}></Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
                <Route path="/account/order" element={<Order />}></Route>
                <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>

                 
        </Routes>
        <div>
            
        </div>
    </div>
  )
}

export default CustomerRoutes