import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { auth } from '../../firebase';
import CartIcon from '../CartIcon/CartIcon';
import './header.styles.scss';

function Header() {
	const { user } = useContext(UserContext);
	return (
		<div>
			<nav className="container nav-menu">
				<div className="logo">
					<Link to="/">NOMAD</Link>
				</div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/shop">Shop</Link>
					</li>
					{user ? (
						<li>
							<Link to="/shop" onClick={() => signOut(auth)}>
								Sign Out
							</Link>
						</li>
					) : (
						<li>
							<Link to="/sign-in">Sign In</Link>
						</li>
					)}
				</ul>
				<CartIcon />
			</nav>
		</div>
	);
}

export default Header;
