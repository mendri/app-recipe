import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import httpRequest from "../axios/config";

function LoginOrRegisterForm({ title, type, className, hasName = false }) {
	const [user, setUser] = useState({ email: "", password: "", name: "" });
	const [errDiv, setErrDiv] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [canRedirect, setCanRedirect] = useState(false);

	async function handleSubmitBtn() {
		try {
			const apiResponse = await httpRequest.post(`/${type}`, { user });
			setErrDiv(false);
			const token = apiResponse.data.token;
			localStorage.setItem("user", JSON.stringify({ ...user, token }));
			setCanRedirect(true);
		} catch(e) {
			setErrorMessage(e.response.data.errorMessage);
			return setErrDiv(true);
		}
	}

	function handleUser({ target }, type) {
		const { value } = target;
		const newUser = user;
		newUser[type] = value;
		setUser(newUser);
	}

	return(
		<form className={className} onSubmit={ (e) => e.preventDefault() }>
			<h3 className="text-xl font-semibold">{ title }</h3>
			{
				errDiv
				&& (
					<div>{ `${errorMessage}` }</div>
				)
			}
			{
				hasName
				&& <input
					onChange={ (event) => handleUser(event, "name") } 
					className="border-2 border-solid rounded p-1"
					placeholder="Username"
					id={`${type}-name`} 
				/>
			}
			<input 
				onChange={ (event) => handleUser(event, "email") }
				className="border-2 border-solid rounded p-1"
				placeholder="Email" id={`${type}-email`}
			/>
			<input 
				onChange={ (event) => handleUser(event, "password") }
				className="border-2 border-solid rounded p-1"
				placeholder="Password" id={`${type}-password`}
				type="password"
			/>
			<button
				className="w-24 p-1 rounded-xl text-gray-50 bg-emerald-600"
				onClick={ handleSubmitBtn }
			>
				{`${type[0].toUpperCase() + type.substring(1)}`}
			</button>
			{
				canRedirect
				&& (
					<Navigate to="/home" />
				)
			}
		</form>
	);
}

export default LoginOrRegisterForm;

LoginOrRegisterForm.propTypes = {
	hasName: PropTypes.bool,
	type: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string,
}.isRequired;
