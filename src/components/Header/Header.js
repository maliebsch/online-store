import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import styles from './Header.module.css';

const Header = () => {
  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">MyOnlineStore</Typography>
        <div className={styles.basket}>
          <Button color="inherit">
            <ShoppingCartOutlinedIcon id={styles.basketIcon} />
            Basket
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
