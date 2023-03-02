import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const ContactUs = () => {
	return (
		<>
			<section className="heading">
				<h1>
					<FaSignInAlt /> Contact Us
				</h1>
			</section>
			<section className="contact">
				<p>
					Got questions or ready to start shipping to us? 
					Contact us today and our team will be happy to assist you with all your needs. 
					Let's work together to streamline your e-commerce process and achieve your business goals!
				</p>
				<div className="contact-params">
					<span className="lead">Address:</span>
					<span>436 South Cameron Stree Harrisburg, PA 17101</span>
				</div>
				<div className="contact-params">
					<span className="lead">Email:</span>
					<span>flash1shipping@gmail.com</span>
				</div>
				<div className="contact-params">
					<span className="lead">Phone:</span>
					<span>(717) 964-4171</span>
				</div>
				<div className="contact-params">
					<span className="lead">Fax:</span>
					<span>(717) 963-4171</span>
				</div>
			</section>
		</>
	)
}

export default ContactUs