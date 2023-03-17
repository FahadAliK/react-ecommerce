import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router';
import { CartContext } from '../../../context/cartContext';
import Layout from '../../../shared/Layout';

function Success({ history }) {
	const { cartItems, clearCart } = useContext(CartContext);
	useEffect(() => {
		if (cartItems.length !== 0) {
			clearCart();
		}
	}, [clearCart, cartItems.length]);
	return (
		<Layout>
			<div className="checkout">
				<h1>Thank you for your order.</h1>
				<p>
					We are currently processing your order and will send you a
					confirmation email shortly.
				</p>
				<div>
					<button
						className="button is-black nomad-btn submit"
						onClick={() => history.push('/shop')}
					>
						Continue Shopping
					</button>
				</div>
			</div>
		</Layout>
	);
}

export default withRouter(Success);
