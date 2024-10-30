
"use client";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useContext } from 'react';
import { CartContext } from '@/shared/CartContext/CartCtx';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '0px',
  backgroundColor:  '#ffffff',
  '&:hover': {
    backgroundColor: '#ffffff',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '75%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '60%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',backgroundColor:'#e0f2f1',
  alignItems: 'center',
  justifyContent: 'center',
  right:'0'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000000',fontSize:"14px",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Appbar({top,toggleDrawer}) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
         
            <LoginIcon />
          
        </IconButton>
        <p>Login</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
         
            < ExitToAppIcon/>
         
        </IconButton>
        <p>Sign Up</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <HelpOutlineIcon />
        </IconButton>
        <p>Help & Support</p>
      </MenuItem>
    </Menu>
  );
  

  return (
    <Box sx={{ flexGrow: 1,boxShadow:'none' }}>
      <AppBar position="fixed" sx={{boxShadow:'none',top: { sm: '0px', md: top } ,transition: 'top 0.3s'}}>
        <Toolbar className='w-full'>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
           
          >
            APEXCART
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:"#3f51b5"}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search in Apexcart"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Badge badgeContent={cartItems.length} color="secondary">
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
             // onClick={handleProfileMenuOpen}
              color="inherit"
              onClick={()=>{
                toggleDrawer( true);
              }}
            >
              <ShoppingCartOutlinedIcon />
            </IconButton></Badge>
          </Box>


          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
        
         
      
     
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
