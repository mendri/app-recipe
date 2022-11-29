import React from "react";
import GenericEmailPassForm from "../components/GenericEmailPassForm";

function Login() {
	return (
		<section className="flex">
			<GenericEmailPassForm className="email-pass-form" type="login" />
			<GenericEmailPassForm className="email-pass-form" type="register"/>
		</section>
	);
}

export default Login;