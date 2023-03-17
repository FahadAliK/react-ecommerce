import React from 'react';

import './hero.styles.scss';

function Hero() {
	return (
		<section className="hero is-large is-info hero-image">
			<div className="hero-body">
				<h1 className="hero-title">Bage reimagined for modern life.</h1>
				<div className="shop-now-btn">
					<button className="button is-black" id="shop-now">
						SHOP NOW
					</button>
				</div>
			</div>
		</section>
	);
}

export default Hero;
