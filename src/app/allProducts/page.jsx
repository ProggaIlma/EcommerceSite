
"use client";
import * as React from 'react';
import Grid from '@mui/material/Grid2';
import RecomItemcard from '@/components/RecomItemcard';

const AllProducts = () => {

  return (
    <div className="mt-20 pt-6">
   <div class=" text-white text-xl h-[120px] mb-2 md:mb-8 flex justify-center items-center" 
   style={{
    backgroundImage: "url('https://bk.shajgoj.com/storage/2023/02/Rajkonna-catagory-web-banner.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
}}>

   </div>
  
   <Grid container spacing={2} >
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
             
            </Grid>
   
    </div>
  );
};

export default AllProducts;
