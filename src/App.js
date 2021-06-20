import React, { useState, useEffect } from "react";

import {
    BrowserRouter as Router, 
    Switch,
    Route 
} from "react-router-dom";

import { commerce } from "./lib/commerce";

import { CssBaseline } from "@material-ui/core";

import {
    Products,
    Navbar,
    Cart,
    Checkout
} from "./components";

const App = () => {
    const [ mobileOpen, setMobileOpen ] = React.useState( false );
    const [ products, setProducts ] = useState([]);
    const [ cart, setCart ] = useState({});
    const [ order, setOrder ] = useState({});
    const [ errorMessage, setErrorMessage ] = useState( "" );

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts( data );
    };

    const fetchCart = async () => {
        setCart( await commerce.cart.retrieve());
    };

    const handleAddToCart = async ( productId, quantity ) => {
        const { cart } = await commerce.cart.add( productId, quantity );

        setCart( cart );
    };

    const handleUpdateCart = async ( productId, quantity ) => {
        const { cart } = await commerce.cart.update( productId, quantity );

        setCart( cart );
    };

    const handleRemoveFromCart = async ( productId ) => {
        const { cart } = await commerce.cart.remove( productId );

        setCart( cart );
    };

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart( cart );
    };

    const refreshCart = async () => {
        const { cart } = await commerce.cart.refresh();

        setCart( cart );
    };

    const handleCaptureCheckout = async ( checkoutTokenId, newOrder ) => {
        try {
            const incomingOrder = await commerce.checkout.capture( checkoutTokenId, newOrder );
            setOrder( incomingOrder );
            refreshCart();

        } catch ( error ) {
            setErrorMessage( error.data.error.message );
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    const handleDrawerToggle = () => setMobileOpen( !mobileOpen );

    return (
        <Router>
            <div style={{ display: "flex" }}>
                <CssBaseline />
                <Navbar
                    totalItems={ cart.total_items }
                    handleDrawerToggle={ handleDrawerToggle }
                />
                <Switch>
                    <Route exact path="/">
                        <Products 
                            products={ products }
                            onAddToCart={ handleAddToCart }
                            handleUpdateCart
                        />
                    </Route>
                    
                    <Route exact path="/cart">
                        <Cart
                            cart={ cart }
                            onUpdate={ handleUpdateCart }
                            onRemove={ handleRemoveFromCart }
                            onEmpty={ handleEmptyCart }
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout
                            cart={ cart }
                            order={ order }
                            error={ errorMessage }
                            onCaptureCheckout={ handleCaptureCheckout }
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;