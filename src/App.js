import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import Shop from './components/pages/Shop/Shop';
import SingleProduct from './components/SingleProduct/SingleProduct';
import CartPage from './components/pages/CartPage/CartPage';
import Checkout from './components/Checkout/Checkout';
import Canceled from './components/Checkout/StripeCheckout/Canceled';
import Success from './components/Checkout/StripeCheckout/Success';
import SignUp from './components/SignUp/SignUp';

import './App.scss';
import SignIn from './components/SignIn/SignIn';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route exact path="/shop" component={Shop}></Route>
				<Route exact path="/product/:id" component={SingleProduct}></Route>
				<Route exact path="/cart" component={CartPage}></Route>
				<Route exact path="/checkout" component={Checkout}></Route>
				<Route path="/success" component={Success}></Route>
				<Route exact path="/canceled" component={Canceled}></Route>
				<Route exact path="/sign-up" component={SignUp}></Route>
				<Route exact path="/sign-in" component={SignIn}></Route>
				<Route path="*" component={NotFound}></Route>
			</Switch>
		</div>
	);
}

export default App;
