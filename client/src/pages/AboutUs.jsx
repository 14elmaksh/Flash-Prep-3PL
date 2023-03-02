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
					Our goal is to assist all Amazon sellers around the world by removing the burden of time-consuming 
					and heavy lifting aspects of business and providing the highest standard of technical and professional 
					support to maximize business efficiency.
					</p>
					<p>
					We provide Amazon FBA Prep, Merchant Fulfillment, and Storage Services to clients selling products on Amazon
					 or through the eCommerce market. We will partner with you and become your "shipping department" 
					 doing all the boxing, labeling and taping, etc. allowing you more time to source new products and increase sales. 
					 We know how important it is to the bottom line to get your items to Amazon as quickly and accurately as possible.
					</p>
				</div>
			</section>
			<section className="content-bottom">
				<p>We are driven to give you the highest level of service. We take care of the physical work, while you focus more on 
					growing and expanding your business. We also specializes in FBA and FBM preparation services at very low rates 
					compared to our competitors. We take care of all the packaging and execute the orders with perfection according 
					to all of Amazon's strict rules shipping guidelines.​</p>
			</section>
		</>
	)
}

export default AboutUs