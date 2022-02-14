import { useState } from "react";
import "./Order.css";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { send } from "@emailjs/browser";

import "react-datepicker/dist/react-datepicker.css";

export default function Order(props) {

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [orderDetails, setOrderDetails] = useState("");
	const [cookieQuantity, setCookieQuantity] = useState("");
	const [orderDate, setOrderDate] = useState("");
	const [pickupType, setPickupType] = useState("local");
	const [errors, setErrors] = useState([]);
	const [showSuccess, setShowSuccess] = useState(false);
	const [showFail, setShowFail] = useState(false);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		validateInput();
		if (errors.length === 0) {
			submitForm();
		}
	}

	const submitForm = () => {
		const formParams = {
			firstName: firstName,
			lastName: lastName,
			phoneNumber: phoneNumber,
			email: email,
			orderDetails: orderDetails,
			cookieQuantity: cookieQuantity,
			orderDate: orderDate.toLocaleDateString(),
			pickupType: pickupType === 'mail' ? 'Mail Delivery' : 'Local Pickup'
		}

		send('service_f8tcamn', 'template_8096wyh', formParams, 'user_R21KvyiMF2bCi7K69S6sX')
			.then((result) => {
				setShowFail(false);
				setShowSuccess(true);
			}, (error) => {
				setShowFail(true);
				setShowSuccess(false);
			});
	}

	const validateInput = () => {
		const validations = [];

		if (firstName.trim() === "") {
			validations["firstName"] = "First Name is required.";
		}

		if (email.trim() === "" || !email.includes("@")) {
			validations["email"] = "Valid email address is required.";
		}

		if (cookieQuantity === 0 || cookieQuantity.trim() === "") {
			validations["cookieQuantity"] = "Required.";
		} else if (cookieQuantity % 6 !== 0) {
			validations["cookieQuantity"] = "Increments of 6.";
		}

		if (!orderDate) {
			validations["orderDate"] = "Valid date is required.";
		}

		setErrors(validations);
	}

	return (
		<main className="pt-md-5">
			{!showFail && !showSuccess &&
				<div className="container-fluid pt-md-5" id="orders-container">
					<form className="needs-validation" onSubmit={handleFormSubmit} noValidate>
						<div className="row pb-3">
							<div className="col text-center">
								<h1>Order Form</h1>
							</div>
						</div>
						<div className="row pb-3">
							<div className="col">
								<p>
									Submit the below form with a little info about your request, and we'll contact you within one business day to provide an estimate and finalize your order.
								</p>
								<p>
									Have questions? <Link to="/contact">Contact Us</Link>
								</p>
							</div>
						</div>
						<div className="row g-3 pb-3">
							<div className="col-md">
								<div className="form-floating">
									<input id="firstName" type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
									<label for="firstName">First Name</label>
									{errors["firstName"] &&
										<div className="invalid-feedback d-block">
											{errors["firstName"]}
										</div>
									}
								</div>
							</div>
							<div className="col-md">
								<div className="form-floating">
									<input id="lastName" type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
									<label for="lastName">Last Name</label>
									{errors["lastName"] &&
										<div className="invalid-feedback d-block">
											{errors["lastName"]}
										</div>
									}
								</div>
							</div>
						</div>
						<div className="row g-3 pb-3">
							<div className="col-md-4">
								<div className="form-floating">
									<input id="phoneNumber" type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
									<label for="phoneNumber">Phone Number</label>
									{errors["phoneNumber"] &&
										<div className="invalid-feedback d-block">
											{errors["phoneNumber"]}
										</div>
									}
								</div>
							</div>
							<div className="col-md">
								<div className="form-floating">
									<input id="email" type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
									<label for="email">Email</label>
									{errors["email"] &&
										<div className="invalid-feedback d-block">
											{errors["email"]}
										</div>
									}
								</div>
							</div>
						</div>
						<div className="row g-3 pb-3">
							<div className="col">
								<div className="form-floating">
									<textarea id="orderDetails" className="form-control" style={{ height: "200px" }} onChange={(e) => setOrderDetails(e.target.value)} value={orderDetails} placeholder="Order Details" />
									<label for="orderDetails">Order Details</label>
									{errors["orderDetails"] &&
										<div className="invalid-feedback d-block">
											{errors["orderDetails"]}
										</div>
									}
								</div>
							</div>
						</div>
						<div className="row g-3 pb-3">
							<div className="col-md-2">
								<div className="form-floating">
									<input id="cookieQuantity" type="text" className="form-control" value={cookieQuantity} onChange={(e) => setCookieQuantity(e.target.value)} placeholder="Cookie Quantity" />
									<label for="cookieQuantity">Quantity</label>
									{errors["cookieQuantity"] &&
										<div className="invalid-feedback d-block">
											{errors["cookieQuantity"]}
										</div>
									}
								</div>
							</div>
							<div className="col-md-4">
								<DatePicker id="order-date" className="form-control" selected={orderDate} onChange={(e) => setOrderDate(e)} placeholderText={"Order Date"} />
								{errors["orderDate"] &&
									<div className="invalid-feedback d-block">
										{errors["orderDate"]}
									</div>
								}
							</div>
							<div className="col-md-6">
								<div className="form-floating">
									<select id="pickupType" className="form-select" value={pickupType} onChange={(e) => setPickupType(e.target.value)}>
										<option value="local">Local Pickup</option>
										<option value="mail">Mail Delivery (Additional Shipping Fees Apply)</option>
									</select>
									<label for="floatingSelect">Delivery Options</label>
								</div>
							</div>
						</div>
						<div className="row g-3 pb-3 pt-4">
							<div className="col text-center">
								<button type="submit" className="btn btn-wayward">Submit</button>
							</div>
						</div>
						{/* <div className="row g-3 pb-3">
						<div className="col-md-8">
							<label for="formFile" className="form-label">Attachments</label>
							<input className="form-control" type="file" id="formFile" multiple />
						</div>
					</div> */}
					</form>
				</div>
			}
			{showFail &&
				<div className="container-fluid pt-md-5">
					<div className="row">
						<div className="col text-center">
							<p>Bad job!</p>
						</div>
					</div>
				</div>
			}
			{showSuccess &&
				<div className="container-fluid pt-md-5">
					<div className="row">
						<div className="col text-center">
							<p className="success-message">Thank you for your order request!</p>
							<p>Pleas allow 24 hours for correspondence.</p>
						</div>
					</div>
				</div>
			}
		</main >
	);
}
