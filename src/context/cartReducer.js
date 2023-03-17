function storeCartItems(cartItems) {
	const cart = cartItems.length > 0 ? cartItems : [];
	localStorage.setItem('cart', JSON.stringify(cart));
}

export function sumItems(cartItems) {
	storeCartItems(cartItems);
	return {
		itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
		total: cartItems.reduce(
			(total, prod) => total + prod.price * prod.quantity,
			0
		),
	};
}
const cartReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_ITEM':
			// check if them is in cart
			const foundItem = state.cartItems.find((item) => item.id === payload.id);
			if (!foundItem) {
				state.cartItems.push({ ...payload, quantity: 1 });
			}
			return {
				...state,
				cartItems: [...state.cartItems],
				...sumItems(state.cartItems),
			};
		case 'INCREASE':
			const increaseIndex = state.cartItems.findIndex(
				(item) => item.id === payload.id
			);
			state.cartItems[increaseIndex].quantity++;
			return {
				...state,
				cartItems: [...state.cartItems],
				...sumItems(state.cartItems),
			};
		case 'DECREASE':
			const decreaseIndex = state.cartItems.findIndex(
				(item) => item.id === payload.id
			);
			const product = state.cartItems[decreaseIndex];
			if (product.quantity > 1) {
				state.cartItems[decreaseIndex].quantity--;
			}
			return {
				...state,
				cartItems: [...state.cartItems],
				...sumItems(state.cartItems),
			};
		case 'REMOVE_ITEM':
			const newCartItems = state.cartItems.filter(
				(item) => item.id !== payload.id
			);
			return {
				...state,
				cartItems: [...newCartItems],
				...sumItems(newCartItems),
			};
		case 'CLEAR_CART':
			localStorage.removeItem('cart');
			return { cartItems: [], itemCount: 0, total: 0 };
		default:
			return state;
	}
};

export default cartReducer;
