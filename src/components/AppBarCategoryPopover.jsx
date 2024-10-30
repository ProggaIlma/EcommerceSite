'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Typography, ClickAwayListener } from '@mui/material';

export default function MouseHoverPopover({ menuname, menulist }) {
  const HtmlTooltip = styled(({ className, ...props }) => <Tooltip {...props} 
  classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'white',
      color: '#00000099',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      borderRadius:'0px',
    },
    
  }));

  return (
    <div className='flex justify-center items-center'>
      <HtmlTooltip
      placement="bottom-start"
        title={
          <React.Fragment>
            {menulist.map((item, i) => (
              <Typography
                onClick={() => {
                  console.log('edgf');
                }}
                className="text-xs"
                sx={
                  i == menulist.length - 1
                    ? {
                        pt: 1,

                        pb: 1,

                        cursor: 'pointer',
                        color: '#00000099',
                        '&:hover': {
                          color: '#3f51b5',
                        },
                      }
                    : i==0 ?{
                      
                        
                        cursor: 'pointer',
                        color: '#00000099',
                        '&:hover': {
                          color: '#3f51b5',
                        },
                      }: {
                        pt: 1,

                        cursor: 'pointer',
                        color: '#00000099',
                        '&:hover': {
                          color: '#3f51b5',
                        },
                      }
                }
              >
                {item}
              </Typography>
            ))}
          </React.Fragment>
        }
      >
        <Typography className="uppercase cursor-pointer text-xs mr-6 ml-3"
         sx={{ '&:hover': { opacity: '0.8',color:'#e91e63',fontWeight:'bold' },color:'black' }}>
          {menuname}
        </Typography>{' '}
      </HtmlTooltip>
    </div>
    // </ClickAwayListener>
  );
}