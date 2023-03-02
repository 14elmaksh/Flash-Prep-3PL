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
					Got questions or ready to start shipping with us? 
					Contact us today and our team will be happy to assist you with all your logistics needs. 
					Let's work together to streamline your shipping process and achieve your business goals!
				</p>
				<div className="contact-params">
					<span className="lead">Address:</span>
					<span>123 Main Street, Suite 456, Anytown, CA 12345</span>
				</div>
				<div className="contact-params">
					<span className="lead">Email:</span>
					<span>info@flashpreplogistics.com</span>
				</div>
				<div className="contact-params">
					<span className="lead">Phone:</span>
					<span>(555) 555-1234</span>
				</div>
				<div className="contact-params">
					<span className="lead">Fax:</span>
					<span>(555) 555-5678</span>
				</div>
			</section>
		</>
	)
}

export default ContactUs