import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import shoppingBagIcon from '../../assets/online-shopping.png';
import { CartContext } from '../../context/cartContext';
import './cartIcon.styles.scss';

function CartIcon({ history }) {
	const { itemCount } = useContext(CartContext);
	return (
		<div className="cart-container" onClick={() => history.push('/cart')}>
			<img src={shoppingBagIcon} alt="shopping-cart-icon" />
			{itemCount > 0 ? <span className="cart-count"> {itemCount} </span> : null}
		</div>
	);
}

export default withRouter(CartIcon);
