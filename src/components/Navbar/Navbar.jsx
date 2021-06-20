/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { 
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    MenuItem,
    Menu,
    Typography
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/react.png";

import useStyles from "./styles";

const PrimarySearchAppBar = ({ totalItems }) => {
    const [ mobileMoreAnchor, setMobileMoreAnchor ] = useState( null );
    const classes = useStyles();
    const location = useLocation();

    const isMobileMenuOpen = Boolean( mobileMoreAnchor );

    const handleMobileMenuClose = () => setMobileMoreAnchor( null );

    const mobileMenuId = "primary-search-account-menu-mobile";

    const renderMobileMenu = (
        <Menu
            anchorEl={ mobileMoreAnchor }
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            id={ mobileMenuId }
            keepMounted
            open={ isMobileMenuOpen }
            onClose={ handleMobileMenuClose }
        >
            <MenuItem>
                <IconButton
                    component={ Link }
                    to="/cart"
                    aria-label="Show cart items"
                    color="inherit"
                >
                    <Badge
                        badgeContent={ totalItems }
                        color="secondary"
                    >
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                
                <p>Cart</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <AppBar 
                position="fixed" 
                className={ classes.appBar } 
                color="inherit"
            >
                <Toolbar>
                    <Typography 
                        className={ classes.title }
                        component={ Link }
                        to="/"
                        variant="h6" 
                        color="textSecondary"
                    >
                        
                        <img 
                            className={ classes.image } 
                            src={ logo } 
                            alt="Commerce.js" 
                            height="25px" 
                        />

                        React Shop
                    </Typography>

                    <div className={ classes.grow } />

                    {
                        location.pathname === "/" && (
                            <div className={ classes.button }>
                                <IconButton 
                                    component={ Link } 
                                    to="/cart" 
                                    aria-label="Show cart items" 
                                    color="inherit"
                                >
                                    <Badge 
                                        badgeContent={ totalItems } 
                                        color="secondary"
                                    >
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            </div>
                        )
                    }
                    
                </Toolbar>
            </AppBar>
            { renderMobileMenu }
        </>
    );
};

export default PrimarySearchAppBar;
