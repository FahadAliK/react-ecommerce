import React, { useContext } from 'react';
import { CartContext } from '../../../context/cartContext';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../icons';

function CartItem({ title, imageUrl, price, quantity, id, description }) {
	const { increase, decrease, removeProduct } = useContext(CartContext);
	const product = { title, imageUrl, price, quantity, id, description };
	return (
		<div className="cart-item">
			<div className="item-image">
				<img src={imageUrl} alt="product" />
			</div>
			<div className="name-price">
				<h4>{title}</h4>
				<p>${price}</p>
			</div>
			<div className="quantity">
				<p>{`Quantity: ${quantity}`}</p>
			</div>
			<div className="btns-container">
				<button className="btn-increase" onClick={() => increase(product)}>
					<PlusCircleIcon width={'20px'} />
				</button>
				{quantity === 1 && (
					<button className="btn-trash" onClick={() => removeProduct(product)}>
						<TrashIcon width={'20px'} />
					</button>
				)}
				{quantity > 1 && (
					<button className="btn-decrease" onClick={() => decrease(product)}>
						<MinusCircleIcon width={'20px'} />
					</button>
				)}
			</div>
		</div>
	);
}

export default CartItem;
