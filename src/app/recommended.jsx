
"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import RecomItemcard from '@/components/RecomItemcard';
import { Typography,Button,Divider } from '@mui/material';



export default function Recom() {
    return (
        <Box sx={{ flexGrow: 1}} className='my-5 bg-white'>
        
            <Box sx={{ py: 3 }}>
            <Grid container spacing={2} >
                <Grid size={{ xs: 6, md: 2 }}>
                    <RecomItemcard />
                </Grid>
                <Grid size={{ xs: 6, md: 2 }}>
                    <RecomItemcard />
                </Grid> 
                <Grid size={{ xs: 6, md: 2 }}>
                    <RecomItemcard />
                </Grid>
                 <Grid size={{ xs: 6, md: 2 }}>
                    <RecomItemcard />
                </Grid>
                 <Grid size={{ xs: 6, md: 2 }}>
                    <RecomItemcard />
                </Grid>
                 <Grid size={{ xs: 6, md: 2 }}>
                    <RecomItemcard />
                </Grid>
            </Grid></Box>
        </Box>
    );
}
