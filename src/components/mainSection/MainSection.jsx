import React from 'react';
import { withRouter } from 'react-router-dom';
import studioBag from '../../assets/studio-bag.png';
import './mainSection.styles.scss';

function MainSection({ history }) {
	return (
		<div className="main-section-container">
			<div className="main-section-middle">
				<div className="ms-m-image">
					<img src={studioBag} alt="studio bag" />
				</div>
				<div className="ms-m-description">
					<h2>Designed for fashion. Creafted for sport.</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
						placeat autem, error inventore accusantium delectus tenetur tempore
						velit, voluptas enim dolorem? Corporis reiciendis aliquam quibusdam
						voluptatibus possimus recusandae veritatis sapiente.
					</p>
					<button
						className="button is-black"
						id="shop-now"
						onClick={() => history.push('/product/1')}
					>
						STUDIO BAG
					</button>
				</div>
			</div>
		</div>
	);
}

export default withRouter(MainSection);
