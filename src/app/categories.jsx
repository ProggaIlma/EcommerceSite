
"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Catcard from '@/components/Catcard';
import { Typography,Button,Divider } from '@mui/material';



export default function Category() {
    return (
        <Box sx={{ flexGrow: 1}} class='m-4 mt-10 bg-white'>
        
            <Box sx={{ py: 3 }}>
            <Grid container columns={24}>

                <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Egg Boilers'} img={'/images/egg.jpg'}/>
                </Grid>
                <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Coffee and Accessories'} img={'/images/cake.jpg'}/>
                </Grid> 
                <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Egg Boilers'} img={'/images/cake.jpg'}/>
                </Grid>
                 <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Egg Boilers'} img={'/images/egg.jpg'}/>
                </Grid>
                 <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Egg Boilers'} img={'/images/egg.jpg'}/>
                </Grid>
                 <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Coffee and Accessories'} img={'/images/egg.jpg'}/>
                </Grid>
                <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Coffee and Accessories'} img={'/images/egg.jpg'}/>
                </Grid>
                 <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Chain & Link Bracelets'} img={'/images/egg.jpg'}/>
                </Grid>
                <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Egg Boilers'} img={'/images/egg.jpg'}/>
                </Grid>
                <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Egg Boilers'} img={'/images/egg.jpg'}/>
                </Grid> 
                <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Egg Boilers'} img={'/images/egg.jpg'}/>
                </Grid>
                 <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Egg Boilers'} img={'/images/egg.jpg'}/>
                </Grid>
                 <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Egg Boilers'} img={'/images/egg.jpg'}/>
                </Grid>
                 <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Egg Boilers'} img={'/images/egg.jpg'}/>
                </Grid>
                <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Egg Boilers'} img={'/images/egg.jpg'}/>
                </Grid>
                 <Grid size={{ xs: 12, md:  3 }}>
                    <Catcard catname={'Egg Boilers'} img={'/images/egg.jpg'}/>
                </Grid>
            </Grid></Box>
        </Box>
    );
}