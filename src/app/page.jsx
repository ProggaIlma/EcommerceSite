import { Typography,Button } from '@mui/material';
import FlashSale from './flashSale'
import Recom from './recommended';
import Category from './categories';
import FullPageCarousel from '@/components/FullPageCarousel';


const images = [
  '/images/one.jpg',
  '/images/fish.jpg',
  '/images/one.jpg',
  // Add more image paths as needed
];

const Home = ()=>{
    return <div className='px-7 mt-15'>
        <div style={{marginTop:"87px"}}>
        <FullPageCarousel images={images} />
        </div>
        
        <Typography sx={{my:2}} className='text-2xl'>Flash Sale</Typography>
        <FlashSale/>

        <Typography sx={{my:2}} className='text-2xl'>Categories</Typography>
        <Category/>
        
        <Typography sx={{mt:4}} className='text-2xl'>Just For You</Typography>
        <Recom/>

        <div className='flex justify-center items-center pb-5'>
        <Button variant="outlined" sx={{width:"400px"}}>Load More</Button>
</div>
      

        </div>
}

export default Home;