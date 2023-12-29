import { Avatar, Box, Grid, Rating } from '@mui/material';
import React from 'react'

const ProductReviewCard = () => {
    return (
        <div className="">
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar
                            className="text-white"
                            sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
                        >
                            S
                        </Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className="space-y-2">
                        <div className="">
                            <p className="font-semibold text-lg">shamit</p>
                            <p className="opacity-70">April 5, 2023</p>
                        </div>
                        <div>


                            <Rating
                                value={4.5}
                                name="half-rating"
                               readOnly
                            />

                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eum voluptatibus nobis minima consectetur laborum voluptate exercitationem
                        </p>
                    </div>
                </Grid>
            </Grid>
            <div className="col-span-1 flex"></div>
        </div>

    )
}

export default ProductReviewCard