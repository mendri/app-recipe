import React from "react";
import LoginOrRegisterForm from "../components/LoginOrRegisterForm";

function Login() {
	return (
		<section className="flex justify-evenly items-center h-full w-full bg-slate-100">
			<LoginOrRegisterForm title="Já possui uma conta?" className="flex flex-col justify-evenly items-center w-4/12 h-2/3 shadow-2xl rounded-md bg-white" type="login" />
			<LoginOrRegisterForm title="Crie uma conta" className="flex flex-col justify-evenly items-center w-4/12 h-2/3 shadow-2xl rounded-md bg-white" type="register" hasName={ true } />
		</section>
	);
}

export default Login;