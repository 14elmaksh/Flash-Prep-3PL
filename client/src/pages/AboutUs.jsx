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
					Our goal is to assist all Amazon sellers around the world by removing the burden of time-consuming and heavy lifting aspects of business and providing the highest standard of technical and professional support to maximize business efficiency. 
					We provide Amazon FBA Prep, Merchant Fulfillment, and Storage Services to clients selling products on Amazon or through the eCommerce market.
					We will partner with you and become your "shipping department" (doing all the boxing, labeling and taping, etc.) allowing you more time to source new products and increase sales. We know how important it is to the bottom line to get your items to Amazon as quickly and accurately as possible.
					Anything that takes you away from the activities that produce value for your business needs to be outsourced. This is never truer than when you are in growth mode.
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