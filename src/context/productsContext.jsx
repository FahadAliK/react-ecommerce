import React, { createContext, useState } from 'react';
import SHOP_DATA from '../shop';

export const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
	const [products] = useState(SHOP_DATA);
	return (
		<ProductsContext.Provider value={{ products }}>
			{children}
		</ProductsContext.Provider>
	);
}
