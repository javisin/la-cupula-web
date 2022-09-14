import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Sidebar.scss';

export default function Sidebar({ isOpen, handleClose, links }) {
  return (
    <Drawer
      open={isOpen}
      anchor="left"
      variant="temporary"
      transitionDuration={250}
      className="sidebar"
      aria-hidden={!isOpen}
      onClose={handleClose}
    >
      <img src={logo} alt="" />
      <Divider />
      <List role="navigation">
        {links.map((link) => (
          <ListItem key={link.path} disableGutters>
            <NavLink to={link.path} onClick={handleClose}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText>{link.title}</ListItemText>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
