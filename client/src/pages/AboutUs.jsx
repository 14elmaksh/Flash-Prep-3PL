import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import HappyTeam from '../assets/images/happy-team.jpg'

const AboutUs = () => {
	return (
		<>
			<section className="heading">
				<h1>
					<FaSignInAlt /> About Us
				</h1>
			</section>
			<section className='hero content-top'>
				<img src={HappyTeam} alt="about us" />
				<div className="text-body">
					<p>
						Welcome to our logistics company, where dreams become reality. 
						Our founder's story is one of inspiration and innovation, 
						as he turned a vivid dream into a successful business that helps 
						companies around the world streamline their shipping processes.
					</p>
					<p>
						Our journey began when our founder had a dream in which he was being chased down the street 
						by a giant freight truck. The dream was a wake-up call, as he realized that inefficient 
						and unreliable logistics were constantly holding him back in his own business. 
						With a desire to solve these logistical challenges, he started our company, determined to 
						provide reliable and efficient shipping services to businesses of all sizes.
					</p>
				</div>
			</section>
			<section className="content-bottom">
				<p>Today, we have built a reputation as a leader in the logistics industry, thanks to our commitment to customer satisfaction, innovation, and excellence. We have a team of experts who are passionate about finding creative solutions to even the most complex shipping challenges, and we are constantly investing in the latest technology and tools to improve our services.</p>
				<p>At our logistics company, we are more than just a service provider - we are a partner in your success. We understand that efficient and reliable shipping is crucial to the success of any business, and we are dedicated to helping our clients achieve their goals through our innovative solutions and exceptional service.</p>
				<p>Thank you for considering our company for your logistics needs. We look forward to helping you achieve your shipping goals and dreams.</p>
			</section>
		</>
	)
}

export default AboutUs