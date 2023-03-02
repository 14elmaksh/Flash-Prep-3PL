import React from 'react'
import { useNavigate } from 'react-router-dom'

import HeroImage from '../assets/images/hero-image.jpg'

const Home = () => {
	const navigate = useNavigate();

	const user = JSON.parse(localStorage.getItem("user"));

	console.log(user);

	const handleRegister = () => {
		navigate('/register');
	}

	return (
		<div>
			<section className="hero">
				<img src={HeroImage} alt="hero" />
				<div className="call-to-action">
					<p className="lead">We take care of all your inventory, packing, labeling, bundling and shipping needs while you focus on growing your business. We accept all business models (wholesale, retail/online arbitrage, FBA/FBM, and 3PL</p>
					<p>Ship to us today and take the first step towards success!</p>
					<button onClick={()=>handleRegister()}>Register Now!</button>
				</div>
			</section>
		</div>
	)
}

export default Home;