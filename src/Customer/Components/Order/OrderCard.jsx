import { Grid } from '@mui/material'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate= useNavigate();
    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='mt-10 p-5 shadow-lg hover:shadow-2xl border'>
            <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div  className='flex cursor-pointer'>
                        <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2W8xFVGlz5Q53kKXltM1Eq_P-FyOY67TLHw&usqp=CAU" alt="" />
                        <div className="ml-5 space-y-2">
                            <p className="">Raisoni Engeer shirt</p>
                            <p className="opacity-50 text-xs font-semibold space-x-5">
                               Size: L
                            </p>
                        </div>
                    </div>
                </Grid >

                <Grid item xs={2}>
                    <p>₹8816</p>

                </Grid>

                <Grid item xs={4}>
                    {true && 
                    <div>
                        <p>
                        <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-green-600 p-0 mr-2 text-sm"/>
                        <span>
                            Delivered on February 29
                        </span>
                    </p>
                    <p>
                    <p className="text-xs">Your Item Has Been Delivered</p>
                    </p>

                        </div>
                        }

                   { false && <p>
                        <span>

                        </span>
                    </p>
}

                    </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard