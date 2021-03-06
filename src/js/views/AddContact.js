import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const { register, handleSubmit } = useForm();

	const onSubmit = data => {
		actions.addNewContact(data);
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							ref={register}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							ref={register}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							ref={register}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							ref={register}
						/>
					</div>

					<button type="submit" className="btn btn-primary form-control">
						Create Contact
					</button>

					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts list
					</Link>
				</form>
			</div>
		</div>
	);
};

// AddContact.propTypes = {
// 	history: PropTypes.object
// };
