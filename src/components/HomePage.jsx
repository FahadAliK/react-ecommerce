import React from 'react';
import Layout from '../shared/Layout';
import FeaturedCollection from './featuredCollection/featuredCollection';
import Hero from './Hero/Hero';
import MainSection from './mainSection/MainSection';

function HomePage() {
	return (
		<>
			<Layout>
				<Hero />
				<MainSection />
				<FeaturedCollection />
			</Layout>
		</>
	);
}

export default HomePage;
