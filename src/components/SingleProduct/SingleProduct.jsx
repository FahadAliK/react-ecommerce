import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { ProductsContext } from '../../context/productsContext';
import { isInCart } from '../../helpers';
import Layout from '../../shared/Layout';

import './singleProduct.styles.scss';

function SingleProduct({ match, history: { push } }) {
	const { products } = useContext(ProductsContext);
	const { cartItems, addProduct, increase } = useContext(CartContext);
	const { id } = match.params;
	const [product, setProduct] = useState(null);
	useEffect(() => {
		const foundProduct = products.find(
			(item) => Number(item.id) === Number(id)
		);
		//if product does not exist, redirect to shop page.
		if (!foundProduct) {
			return push('/shop');
		}
		setProduct(foundProduct);
	}, [id, products, push]);
	if (!product) {
		return null;
	}
	const { imageUrl, title, price, description } = product;
	return (
		<Layout>
			<div className="single-product-container">
				<div className="product-image">
					<img src={imageUrl} alt="product" />
				</div>
				<div className="product-details">
					<div className="name-price">
						<h3>{title}</h3>
						<p>{price}</p>
					</div>
					<div className="add-to-cart-btns">
						{isInCart(product, cartItems) ? (
							<button
								className="button is-white nomad-btn"
								id="btn-white-outline"
								onClick={() => increase(product)}
							>
								ADD MORE
							</button>
						) : (
							<button
								className="button is-white nomad-btn"
								id="btn-white-outline"
								onClick={() => addProduct(product)}
							>
								ADD TO CART
							</button>
						)}

						<button
							className="button is-black nomad-btn"
							id="btn-white-outline"
						>
							PROCEED TO CHECKOUT
						</button>
					</div>
					<div className="product-description">
						<p>{description}</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default withRouter(SingleProduct);
