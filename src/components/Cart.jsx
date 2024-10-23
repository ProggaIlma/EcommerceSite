import { IconButton, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import CartItem from './CartItem';

const images = [
  '/images/one.jpg',
  '/images/fish.jpg',
  '/images/one.jpg',
  // Add more image paths as needed
];

export default function DrawerBody({ handleDrawerToggle }) {
  return (
    <div className="bg-slate-200">
      <Toolbar className="bg-white">
        <IconButton color="inherit" aria-label="close drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, color: 'black' }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Cart
        </Typography>
      </Toolbar>
      <Divider />

      {/* <div className="flex justify-center items-center flex-col bg-slate-200" >

        <ShoppingBagIcon sx={{ height: '116px', width: '130px', paddingTop: '40px' }} />
        <Typography className="mt-8">Your Shopping Bag is Empty</Typography>
        <Button className="mt-10 text-white bg-black" onClick={handleDrawerToggle}>
          Start Shopping
        </Button>
      
      
      </div> */}
      <div className="p-2 overflow-auto" style={{ height: '430px' }}>
      <CartItem handleDrawerToggle={handleDrawerToggle} />
        <CartItem handleDrawerToggle={handleDrawerToggle} />
        <CartItem handleDrawerToggle={handleDrawerToggle} />
        <CartItem handleDrawerToggle={handleDrawerToggle} />
        <CartItem handleDrawerToggle={handleDrawerToggle} />
        <CartItem handleDrawerToggle={handleDrawerToggle} />
        <CartItem handleDrawerToggle={handleDrawerToggle} />
        <CartItem handleDrawerToggle={handleDrawerToggle} />
        <CartItem handleDrawerToggle={handleDrawerToggle} />
        <CartItem handleDrawerToggle={handleDrawerToggle} />
        <CartItem handleDrawerToggle={handleDrawerToggle} />
        <CartItem handleDrawerToggle={handleDrawerToggle} />
      </div>
      <div className="bg-white flex justify-between pt-3 px-3">
        <div>
          <Typography component="div" className="text-sm">Cart Total:</Typography>
          <Typography component="div" className="text-sm secondary_color">৳ 4161.00</Typography>
        </div>
        <div>
          <Button variant="contained" endIcon={<ChevronRightIcon />} size="large">
            PROCEED
          </Button>
        </div>
      </div>
    </div>
  );
}
