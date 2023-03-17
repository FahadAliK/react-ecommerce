import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import Layout from '../../shared/Layout';
import StripeCheckout from './StripeCheckout/StripeCheckout';

import './checkout.styles.scss';
import ShippingAddress from './CustomCheckout/ShippingAddress';
import CustomCheckout from './CustomCheckout/CustomCheckout';

function Checkout() {
	const { itemCount, total, cartItems } = useContext(CartContext);
	const [customCheckout, setCustomeCheckout] = useState(false);
	const [shipping, setShipping] = useState(null);
	const addressShown = {
		display: shipping ? 'none' : 'block',
	};
	const cardShown = {
		display: shipping ? 'block' : 'none',
	};
	return (
		<Layout>
			<div className="checkout">
				<h2>Checkout Summary</h2>
				<h3>{`Total Items: ${itemCount}`}</h3>
				<h4>{`Amount to Pay: $${total}`}</h4>
				<label htmlFor="input">Need Stripe checkout ?</label>
				<input
					id="input"
					type={'checkbox'}
					onChange={(e) => setCustomeCheckout(e.target.checked)}
				/>
				{customCheckout && <StripeCheckout />}
				<div style={addressShown}>
					<ShippingAddress setShipping={setShipping} />
				</div>
				<div style={cardShown}>
					<CustomCheckout {...{ shipping, cartItems }} />
				</div>
			</div>
		</Layout>
	);
}

export default Checkout;
