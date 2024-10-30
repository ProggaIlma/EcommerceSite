"use client";
import CustomPaging from '@/components/ProductDetailCarousal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import ProductInfo from './productInfo';
import { Typography } from '@mui/material';
import AddRecomItemcard from '@/components/AddRecomItemcard';
import ProductTabs from './tabs/productTabs';


const ItemDetail = () => {
  const images = ['/images/bskt1.jpg', '/images/bskt2.jpg', '/images/bskt3.jpg'];

  const products = [
    {
      id: 1,
      price: 149,
      title: 'NESTLE NESCAFE Classic Instant Coffee Jar 100g',
      image:'/images/bskt1.jpg'
    },
    {
      id: 2,
      price: 299,
      title: 'Lipton Green Tea Bags - 25 Bags',
      image:'/images/bskt2.jpg'
    },
    {
      id: 3,
      price: 499,
      title: 'Tata Tea Premium, 1 kg',
      image:'/images/bskt3.jpg'
    },
    {
      id: 4,
      price: 199,
      title: 'Bru Gold Instant Coffee, 100g',
      image:'/images/cake.jpg'
    },
    {
      id: 5,
      price: 249,
      title: 'Twinings Pure Camomile Tea, 25 Bags',
      image:'/images/egg.jpg'
    },
    {
      id: 6,
      price: 99,
      title: 'Society Tea 250g',
      image:'/images/cake.jpg'
    },
    {
      id: 7,
      price: 349,
      title: 'TGL Co. Himalayan Green Tea Loose Leaf, 100g',
      image:'/images/egg.jpg'
    },
    {
      id: 8,
      price: 599,
      title: 'Lavazza Espresso Italiano Ground Coffee, 250g',
      image:'/images/egg.jpg'
    },
    {
      id: 9,
      price: 129,
      title: 'Wagh Bakri Premium Leaf Tea, 500g',
      image:'/images/bskt2.jpg'
    },
    {
      id: 10,
      price: 179,
      title: 'Tetley Ginger, Mint & Lemon Green Tea, 100g',
      image:'/images/bskt2.jpg'
    }
  ];
  return (
    <div className="mt-20 p-5">
      <Box sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} className="flex justify-end">
            <Typography  className="bg_secondary_color text-white py-2 px-2 ml-2 rounded-xl uppercase bold text-sm">
              {' '}
              Recommended for you{' '}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <CustomPaging images={images} />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <ProductInfo />
          </Grid>

        
          
          <Grid  size={{ xs: 12, md: 2 }}><AddRecomItemcard  product={products[0]}/></Grid>
          
       


        <Grid size={{ xs: 12 }} className="flex flex-col justify-center items-center w-full">
          <ProductTabs/>
        </Grid>
      


        
          <Grid size={{ xs: 12 }} className="flex justify-start">
            <Typography sx={{ color: '#025043' }} className=" py-2 uppercase bold text-lg">
              {' '}
              Customers Also Viewed{' '}
            </Typography>
          </Grid>
         
          {products.map((product,index)=>
           ( <Grid  size={{ xs: 12, md: 3, lg: 3 }} key={index}><AddRecomItemcard  product={product}/></Grid>)
        
          )}
        
        </Grid>
      </Box>
    </div>
  );
};

export default ItemDetail;
