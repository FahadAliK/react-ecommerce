import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import { isInCart } from '../helpers';
import './featuredProduct.styles.scss';

function FeaturedProduct({ title, imageUrl, price, history, id, description }) {
	const product = { title, imageUrl, price, id, description };
	const { addProduct, cartItems, increase } = useContext(CartContext);
	return (
		<div className="featured-product">
			<div
				className="featured-image"
				onClick={() => history.push(`/product/${id}`)}
			>
				<img src={imageUrl} alt="product" />
			</div>
			<div className="name-price">
				<h3>{title}</h3>
				<p>$ {price}</p>
				{isInCart(product, cartItems) ? (
					<button
						className="button is-white nomad-btn"
						onClick={() => increase(product)}
					>
						ADD MORE
					</button>
				) : (
					<button
						className="button is-black nomad-btn"
						id="btn-white-outline"
						onClick={() => addProduct(product)}
					>
						ADD TO CART
					</button>
				)}
			</div>
		</div>
	);
}

export default withRouter(FeaturedProduct);
