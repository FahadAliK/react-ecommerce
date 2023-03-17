import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProductsContextProvider from './context/productsContext';
import CartContextProvider from './context/cartContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import UserContextProvider from './context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

root.render(
	<BrowserRouter>
		<ProductsContextProvider>
			<CartContextProvider>
				<Elements stripe={stripePromise}>
					<UserContextProvider>
						<App />
					</UserContextProvider>
				</Elements>
			</CartContextProvider>
		</ProductsContextProvider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
