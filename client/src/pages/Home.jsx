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
					<p className="lead">Ready to streamline your shipping process? Choose our reliable and affordable shipping services for a hassle-free experience.</p>
					<p>Ship with us today and take the first step towards shipping success!</p>
					<button onClick={()=>handleRegister()}>Register Now!</button>
				</div>
			</section>
		</div>
	)
}

export default Home;