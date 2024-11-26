"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { CartContext } from '@/shared/CartContext/CartCtx';
import { useContext, useEffect, useState } from 'react'

 const AddRecomItemcard = ({product})=> {
  const { cartItems, addToCart } = useContext(CartContext);

  return (
   
    <Card sx={{ maxWidth: 545, borderRadius: '10px', boxShadow: 'none' }}>
      
        <CardMedia
          component="img"
          image={product?.image}
          alt="green iguana"
          sx={{ objectFit: "contain",transition: "transform 0.7s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" } }}
        />
        <CardContent>

          <Typography variant="body2"component="div" sx={{ color: 'text.secondary',minHeight:"50px"}} className='text-sm'>

            {product?.title}
          </Typography>
         
          <div className="flex  items-center text-xs">

          <Typography gutterBottom variant="h5" component="div" color='secondary' className='text-lg mr-2'>
            ৳  {product?.price}
          </Typography>
          

<Typography sx={{ mr: 1, textDecoration: 'line-through', color: "#9e9e9e" }} className='text-xs'>৳1200</Typography>

{/* <Typography className='text-xs'>-74%</Typography> */}

          </div>
          <div className="w-full flex items-center justify-center">
          <Button variant="contained" sx={{width:'100%'}} onClick={() => addToCart(product)}>Add to cart</Button>  </div>
        </CardContent>
      
    </Card>
   
  );
}
export default AddRecomItemcard;