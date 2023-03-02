import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import Price from "./pages/Price";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NewOrder from "./pages/NewOrder";
import MakePayment from "./pages/MakePayment";

function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<AboutUs />} />
						<Route path="/prices" element={<Price />} />
						<Route path="/contact" element={<ContactUs />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/new-order" element={<NewOrder />} />
						<Route path="/make-payment" element={<MakePayment />} />
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
