"use client";

import React, { useEffect } from 'react';
import TopAppbar from '@/components/TopAppbar';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import "./globals.css";
import Slide from '@mui/material/Slide';
import Appbar from '@/components/Appbar';
import Footer from '@/components/Footer';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function RootLayout(props) {
  const { children } = props;

  const [top, settop] = React.useState('25px')

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
       if(currentScrollTop < lastScrollTop) settop('25px')
         else settop('0px');
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
    };
 
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  function HideOnScroll(props) {

    const { children, window } = props;

    let trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (

      <Slide appear={false} direction="down" in={!trigger}>
        {children ?? <div />}
      </Slide>
    );
  }
///////////Drawer///////////
const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
          
            <HideOnScroll {...props}>
              <AppBar>
                <TopAppbar />
              </AppBar>
            </HideOnScroll>
            <Appbar top={top} toggleDrawer={toggleDrawer}/>
            <Button onClick={toggleDrawer(true)} sx={{marginTop:"100px"}}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
            {children}
           
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Footer></Footer>
      </body>


    </html>

  );
}



















// import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from '../../theme';
// import Appbar from '@/components/Appbar'
// import TopAppbar from '@/components/TopAppbar';
// import * as React from 'react';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Slide from '@mui/material/Slide';
// import { Typography } from '@mui/material';

// function HideOnScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   // const trigger = useScrollTrigger({
//   //   target: window ? window() : undefined,
//   // });

//   return (
//     <Slide appear={false} direction="down" >
//       {children ?? <div />}
//     </Slide>
//   );
// }
//  export default function RootLayout(props) {
//    const { children } = props;
//    return (
//      <html lang="en">
//        <body>
//           <AppRouterCacheProvider options={{ enableCssLayer: true }}>
//           <ThemeProvider theme={theme}>
//           <HideOnScroll {...props}>
//           <AppBar>
//           <Toolbar>
//             <Typography variant="h6" component="div">
//               Scroll to hide App bar
//             </Typography>
//           </Toolbar>
//         </AppBar>
//       </HideOnScroll>
//       <Toolbar />
//             {/* <Appbar/> */}
//               {children}
//           </ThemeProvider>
//           </AppRouterCacheProvider>
//        </body>
//      </html>
//    );
//  }
