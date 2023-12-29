import React from 'react'
import AddressCard from '../Address/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarIcon from "@mui/icons-material/Star";

import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
    return (
        <div className='mt-10 px:5 lg:px-20 border'>
            <div className='px-4'>
                <h1 className="font-bold text-xl py-7">Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid className='space-y-5' container>
  {[1,1,1,1,].map((item)=>
     <Grid container
     item
     className="shadow-xl rounded-md p-5 border"
     sx={{ alignItems: "center", justifyContent: "space-between" }}>

     <Grid item xs={6}>

         <div className='flex items-center space-x-4'>
             <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2W8xFVGlz5Q53kKXltM1Eq_P-FyOY67TLHw&usqp=CAU" alt="" />
             <div className="ml-5 space-y-2">
                 <p className="font-semibold">Raisoni shirt</p>
                 <p className="opacity-50 text-xs font-semibold space-x-5">
                     <span>Color: pink</span> <span>Size: L</span>
                 </p>
                 <p>Seller: unicode</p>
                 <p>₹8816 </p>
             </div>

         </div>

     </Grid>

     <Grid item>

         <Box sx={{ color: deepPurple[500] }}
             className="flex items-center cursor-pointer">

             <StarIcon
                 sx={{ fontSize: "2rem" }}
                 className="px-2 text-5xl"
             />
             <span>Rate & Review Product</span>

         </Box>

     </Grid>

 </Grid>)}           

            </Grid>

        </div>
    )
}

export default OrderDetails