import { Button, IconButton } from '@mui/material'
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import React from 'react'

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>

                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
                    <img className="w-full h-full object-cover object-top"
                        src="https://rukminim1.flixcart.com/image/850/1000/xif0q/shirt/8/x/n/s-st27-vebnor-original-imagpgs4aheazzqc.jpeg?q=90"
                        alt="" />
                </div>

                <div className="ml-5 space-y-1">
                    <p className="font-semibold">raisoni shirt</p>
                    <p className="opacity-70">Size: L,White</p>
                    <p className="opacity-70 mt-2">Seller: Unicode</p>

                    <div className="flex space-x-2 items-center pt-3">
                        <p className="opacity-50 line-through">₹500</p>
                        <p className="font-semibold text-lg">
                            ₹400
                        </p>
                        <p className="text-green-600 font-semibold">
                            20% off
                        </p>
                    </div>
                </div>



            </div>

            <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2 ">
                    <IconButton sx={{color:"#8e2de2"}}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className="py-1 px-7 border rounded-sm">3</span>
                    <IconButton sx={{color:"#8e2de2"}}>
                        <AddCircleOutlineIcon />
                    </IconButton>

                </div>
                <div className="flex text-sm lg:text-base mt-5 lg:mt-0">

                    <Button sx={{color:"#8e2de2"}}>
                        Remove
                    </Button>

                </div>
            </div>


        </div>
    )
}

export default CartItem