import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GrNewWindow } from "react-icons/gr";
import Spinner from "../components/Spinner";

const MakePayment = () => {
	const [formData, setFormData] = useState({
		cardNumber: "",
		cvv: "",
		expiryDate: "",
		amount: ''
	});

	const { cardNumber, cvv, expiryDate, amount } = formData;

	const navigate = useNavigate();

	const { isLoading } = useSelector(
		(state) => state.auth
	);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
        if (cardNumber === '' || cvv === '' || expiryDate === '' || amount === '') {
            toast.error("Please fill in all the form data.");
        } else {
            toast.success(`Payment data submitted successfully. Equivalent credits added to your account.`);
			navigate("/dashboard");
        }
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
        <>
			<section className="heading">
				<h1>
					<GrNewWindow /> Make Payment
				</h1>
				<p>Your payment details are safe with us.</p>
			</section>
			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="cardNumber"
							name="cardNumber"
							value={cardNumber}
							placeholder="Enter the Card Number"
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="cvv"
							className="form-control"
							id="cvv"
							name="cvv"
							value={cvv}
							placeholder="Enter the CVV Number"
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="expiryDate"
							className="form-control"
							id="expiryDate"
							name="expiryDate"
							value={expiryDate}
							placeholder="Enter the card expiryDate"
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="amount"
							className="form-control"
							id="amount"
							name="amount"
							value={amount}
							placeholder="Enter the amount"
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-block">
							Submit
						</button>
					</div>
				</form>
			</section>
		</>
    )
}

export default MakePayment