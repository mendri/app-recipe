import React from "react";
import GenericEmailPassForm from "../components/GenericEmailPassForm";

function Login() {
	return (
		<section>
			<GenericEmailPassForm className="email-pass-form" type="login" />
			<GenericEmailPassForm class="email-pass-form" type="register"/>
		</section>
	);
}

export default Login;