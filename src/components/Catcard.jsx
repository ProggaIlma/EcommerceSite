"use client";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function Catcard({catname,img}) {
  return (
    <Card sx={{  borderRadius: '0px', boxShadow: 'none',minHeight:"148.5px",
    borderTop:"1px solid #e2e2e2",borderRight:"1px solid #e2e2e2" }}>
      <CardActionArea className="flex flex-col">
        <CardMedia
        
          component="img"
          image={img}
          alt="green iguana"
          sx={{ objectFit: "contain" ,width:'80px',height:'80px',paddingTop:"15px"
          }}
        />
        <CardContent>

         <div className='text-center' style={{height:"20px"}} >
        {catname}

         </div>

     
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
