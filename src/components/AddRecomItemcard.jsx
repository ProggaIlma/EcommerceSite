"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Buttons from './Buttons';

export default function AddRecomItemcard({image}) {
  return (
    <Card sx={{ maxWidth: 545, borderRadius: '0px', boxShadow: 'none' }}>
      
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
          sx={{ objectFit: "contain" }}
        />
        <CardContent>

          <Typography variant="body2" sx={{ color: 'text.secondary' }} className='text-sm'>

            NESTLE NESCAFE Classic Instant Coffee Jar 100g
          </Typography>
         
          <div className="flex items-center text-xs">

          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#f57224' }} className='text-lg mr-2'>
            ৳399
          </Typography>
            <Typography className="text-xs grey">-74%</Typography>
          </div>
          <div className="w-full flex items-center justify-center">
          <Buttons width={'100%'}/>  </div>
        </CardContent>
      
    </Card>
  );
}
