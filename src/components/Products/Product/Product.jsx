/* eslint-disable react/prop-types */
import React from "react";

import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from "@material-ui/core";

import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
	const classes = useStyles();

	return (
		<Card className={ classes.root }>
			<CardMedia
				className={ classes.media }
				image={ product.media.source }
				title={ product.name }
			/>
			<CardContent>
				<div className={ classes.cardContent }>
					<div className={ classes.cardEntry }>
						<Typography className={ classes.cardTitle } variant="h5" gutterBottom>
							{ product.name }
						</Typography>
						<Typography className={ classes.cardPrice } variant="h5">
							{ product.price.formatted_with_symbol }
						</Typography>
					</div>
					<Typography 
						className={ classes.cardDescription } 
						dangerouslySetInnerHTML={{ __html: product.description }} 
						variant="h2" 
						color="textSecondary" 
					/>
				</div>
			</CardContent>
			<CardActions disableSpacing className={ classes.cardActions }>
				<IconButton aria-label="Add to cart" onClick={ () => onAddToCart( product.id, 1 ) }>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Product;
