import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import styles from './HamburgerMenu.module.css'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const links=[
    {
        name: "Home",
        icon: <HomeIcon/>,
        href: '/'
    },
    {
        name: "About",
        icon: <InfoIcon/>,
        href: '/about'
    },
    {
        name: "Services",
        icon: <HomeRepairServiceIcon/>,
        href: '/services'
    },
    {
        name: "Contact Us",
        icon: <ContactPageIcon/>,
        href: 'contact-us'
    },
    {
        name: "Status",
        icon: <TroubleshootIcon/>,
        href: '/status'
    },
  ]

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((link, index) => (
          <Link key={index} to={link.href}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      {/* <Divider />
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
      </List> */}
    </Box>
  );

  return (
    <div>
        <React.Fragment>
          <MenuIcon onClick={toggleDrawer('right', true)} className={styles.hamburgerMenuIcon}/>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>

    </div>
  );
}
