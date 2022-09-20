import React from 'react';
import './Sidebar.scss';
import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

export default function Topbar({ handleOnClick }) {
  return (
    <AppBar position="sticky" className="app-header">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleOnClick}
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { md: 'flex' },
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          EJJB La Cúpula
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
