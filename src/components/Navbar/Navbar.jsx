import React from "react";
import { Link, useLocation } from "react-router-dom";

import { 
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    MenuItem,
    Menu,
    Typography
} from "@material-ui/core"

import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/shop.png";

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

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

                        Minimal Commerce
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
        </>
    )
}

export default Navbar;
