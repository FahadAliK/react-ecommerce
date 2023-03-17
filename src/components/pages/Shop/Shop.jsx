import React, { useContext } from 'react';
import { ProductsContext } from '../../../context/productsContext';
import FeaturedProduct from '../../../shared/featuredProduct';
import Layout from '../../../shared/Layout';
import './shop.styles.scss';

function Shop() {
	const { products } = useContext(ProductsContext);
	const allProducts = products.map((product) => (
		<FeaturedProduct {...product} key={product.id} />
	));
	return (
		<Layout>
			<div className="product-list-container">
				<h1 className="product-list-title">Shop</h1>
				<div className="product-list">{allProducts}</div>
			</div>
		</Layout>
	);
}

export default Shop;
