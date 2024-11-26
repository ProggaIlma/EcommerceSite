
"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import RecomItemcard from '@/components/RecomItemcard';



export default function Recom() {
    return (
        <Box sx={{ flexGrow: 1}} className='my-5 bg-white'>
        
            <Box sx={{ py: 3 }}>
            <Grid container spacing={2} columns={15}>
                <Grid size={{ xs: 6, md: 3 }}>
                    <RecomItemcard />
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <RecomItemcard />
                </Grid> 
                <Grid size={{ xs: 6, md: 3 }}>
                    <RecomItemcard />
                </Grid>
                 <Grid size={{ xs: 6, md: 3 }}>
                    <RecomItemcard />
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <RecomItemcard />
                </Grid>
            </Grid></Box>
        </Box>
    );
}
