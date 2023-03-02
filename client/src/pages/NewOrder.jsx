import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GrNewWindow } from "react-icons/gr";
import { createProduct } from "../features/products/productSlice";
import Spinner from "../components/Spinner";
import { createOrder } from "../features/orders/orderSlice";

const NewOrder = () => {
    const [formData, setFormData] = useState({
		productName: "",
		asin: "",
		quantity: "",
	});

	const { productName, asin, quantity } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { isLoading } = useSelector(
		(state) => state.order
	);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
        if (productName === '' || asin === '' || quantity === '') {
            toast.error("Please fill in all the form data.");
        } else {
            const productData = {
                productName,
                asin
            };

            dispatch(createProduct(productData)).then((data) => {
                const orderData = {
                    product: data.payload._id,
                    qnty: quantity
                }

                dispatch(createOrder(orderData)).then((data) => {
                    toast.success("Order created successfully!");
                    navigate("/dashboard");
                })
            }).catch((error) => {
                toast.error("Something went wrong. Please try again later.");
            })
        }
	};

	if (isLoading) {
		return <Spinner />;
	}

    return (
        <>
        <section className="heading">
            <h1>
                <GrNewWindow /> New Order
            </h1>
            <p>Fill the form below to add a new order.</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="productName"
                        name="productName"
                        value={productName}
                        placeholder="Enter the product name"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="asin"
                        className="form-control"
                        id="asin"
                        name="asin"
                        value={asin}
                        placeholder="Enter the product ASIN"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="quantity"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        placeholder="Enter the product quantity"
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

export default NewOrder