
"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box,Button} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MoreIcon from '@mui/icons-material/MoreVert';
import MouseHoverPopover from './AppBarCategoryPopover';


export default function TopAppbar() {
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
  const kitchenItems = [
    "Stainless Steel Knife Set",
    "Non-Stick Frying Pan",
    "Blender",
    "Wooden Cutting Board",
    "Microwave Oven",
    "Electric Kettle",
    "Measuring Cups and Spoons Set",
    "Glass Mixing Bowls",
    "Toaster",
    "Silicone Spatula Set"
  ]
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
          <Badge badgeContent={4} color="error">
            <LoginIcon />
          </Badge>
        </IconButton>
        <MouseHoverPopover menuname={'Kitchen Appliance'} menulist={kitchenItems}/>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            < ExitToAppIcon/>
          </Badge>
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
      <AppBar position="fixed"  sx={{boxShadow:'none',top: { sm: '0px', md: '56px' } ,transition: 'top 0.3s'}}>
        <Toolbar sx={{minHeight:"50px !important",backgroundColor:"white"}} className='shadow-xl'>
      
        
        
        
          <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
          <MouseHoverPopover menuname={'Home Appliances'} menulist={kitchenItems}/>
          

            <MouseHoverPopover menuname={'Kitchen Appliances'} menulist={kitchenItems}/>


            <MouseHoverPopover menuname={'Kids'} menulist={kitchenItems}/>
          

          <MouseHoverPopover menuname={'Make Up'} menulist={kitchenItems}/>


          <Button className='bg_secondary_color rounded-3xl text-white mr-2 px-5 py-2 text-xs'>Clearance Sale</Button>
          <Button className='bg_primary_color rounded-3xl text-white mr-2 px-5 text-xs py-2'>Buy 1 Get 1</Button>
          <Button className='bg-purple-950 rounded-3xl text-white mr-2 px-5 text-xs py-2'> Anniversary Sale</Button>

           
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
