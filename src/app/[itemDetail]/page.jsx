import CustomPaging from '@/components/ProductDetailCarousal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import ProductInfo from './productInfo';
import RecomItemcard from '@/components/RecomItemcard';
import { Typography } from '@mui/material';
import AddRecomItemcard from '@/components/AddRecomItemcard';
import ProductTabs from './tabs/productTabs';

const ItemDetail = () => {
  const images = ['/images/bskt1.jpg', '/images/bskt2.jpg', '/images/bskt3.jpg'];

  return (
    <div className="mt-20 p-5">
      <Box sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} className="flex justify-end">
            <Typography sx={{ backgroundColor: '#025043' }} className=" text-white py-2 px-3 rounded-xl uppercase bold text-sm">
              {' '}
              Recommended for you{' '}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <CustomPaging images={images} />
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <ProductInfo />
          </Grid>

          <Grid size={{ xs: 12, lg: 2 }}>
          <Grid container spacing={2}>
          
              <AddRecomItemcard image={'/images/cake.jpg'} />
           </Grid>
          </Grid>
       


        <Grid size={{ xs: 12 }} className="flex flex-col justify-center items-center w-full">
          <ProductTabs/>
        </Grid>
      


        
          <Grid size={{ xs: 12 }} className="flex justify-start">
            <Typography sx={{ color: '#025043' }} className=" py-2 uppercase bold text-lg">
              {' '}
              Customers Also Viewed{' '}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 3, lg: 2 }}>
            <AddRecomItemcard image={'/images/egg.jpg'} />
          </Grid>{' '}
          <Grid size={{ xs: 12, md: 3, lg: 2 }}>
            <AddRecomItemcard image={'/images/bskt1.jpg'} />
          </Grid>{' '}
          <Grid size={{ xs: 12, md: 3, lg: 2 }}>
            <AddRecomItemcard image={'/images/bskt2.jpg'} />
          </Grid>{' '}
          <Grid size={{ xs: 12, md: 3, lg: 2 }}>
            <AddRecomItemcard image={'/images/cake.jpg'} />
          </Grid>{' '}
          <Grid size={{ xs: 12, md: 3, lg: 2 }}>
            <AddRecomItemcard image={'/images/bskt3.jpg'} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ItemDetail;
