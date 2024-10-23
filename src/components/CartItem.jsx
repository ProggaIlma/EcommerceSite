'use client';

import React, { useState } from 'react';
import { IconButton, Typography, Button , ButtonGroup } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CounterButton from './CounterButton';
import Divider from '@mui/material/Divider';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Toolbar from '@mui/material/Toolbar';

export default function CartItem({handleDrawerToggle}) {
  const [counter, setCounter] = useState(1);

  return (
    <div className='bg-white rounded-lg px-2 pt-2 mb-2'>
      <div className="flex justify-around w-full">
        <img src="images/bskt1.jpg" style={{ height: '70px', width: '70px', borderRadius: '8px' }} />
        <div style={{ width: '80%' }} className='px-1'>
          <Typography className="text-sm">Lux Body Wash Black Orchid Scent & Juniper Oil 245ml</Typography>
         <Typography className="text-sm">৳ 149.00</Typography>
        </div>
        <div className='flex flex-col justify-between items-end'>
            <DeleteOutlineIcon onClick={handleDrawerToggle} className='secondary_color'/>
         
         
            <ButtonGroup size="small" aria-label="Small button group" >
              <Button
              sx={{minWidth:"5px !important"}}
                disableRipple
                disabled={counter >= 20}
                onClick={() => {
                  setCounter((counter) => counter + 1);
                }}
              >
                +
              </Button>
              <Button disableRipple  sx={{minWidth:"15px !important"}}>{counter}</Button>
              <Button
                disableRipple
                sx={{minWidth:"5px !important"}}
                onClick={() => {
                  if (counter > 1) setCounter((counter) => counter - 1);
                }}
              >
                -
              </Button>
            </ButtonGroup>
         
        </div>
      </div>
     
      <div className='mt-1 flex justify-end pb-1'>
    
      <Typography className="text-sm">   ৳ 149.00</Typography>
      </div>
    </div>
  );
}
