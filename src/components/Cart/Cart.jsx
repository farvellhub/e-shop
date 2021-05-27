import React from "react";
import { Link } from "react-router-dom";

import {
    Container,
    Typography,
    Button,
    Grid
} from "@material-ui/core";

import CartItem from "./CartItem/CartItem";

import useStyles from "./styles";

const Cart = ({ cart, onUpdate, onRemove, onEmpty }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your cart.

            <Link 
                className={ classes.link } 
                to="/"
            >
                Start adding some
            </Link>!
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {
                    cart.line_items.map(( item ) => (
                        <Grid item xs={12} sm={4} key={ item.id }>
                            <CartItem 
                                item={ item }
                                update={ onUpdate }
                                remove={ onRemove }
                            />
                        </Grid>
                    ))
                }
            </Grid>

            <div className={ classes.cardDetails }>
                <Typography variant="h4">
                    Subtotal: { cart.subtotal.formatted_with_symbol }
                </Typography>

                <div>
                    <Button 
                        className={ classes.emptyButton }
                        onClick={ onEmpty }
                        size="large"
                        type="button"
                        variant="contained"
                        color="secondary"
                    >
                        Empty cart.
                    </Button>

                    <Button 
                        className={ classes.checkoutButton }
                        component={ Link }
                        to="/checkout"
                        size="large"
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        Checkout.
                    </Button>
                </div>
            </div>
        </>
    );

    if ( !cart.line_items ) return "Loading...";

    return (
        <Container>
            <div className={ classes.toolbar } />

            <Typography 
                className={ classes.title } 
                variant="h3"
                gutterBottom    
            >
                Your shopping cart.
            </Typography>

            { 
                !cart.line_items.length 
                    ? <EmptyCart /> 
                    : <FilledCart /> 
            }

        </Container>
    );
};

export default Cart;
