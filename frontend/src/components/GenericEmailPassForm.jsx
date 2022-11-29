import React from "react";
import PropTypes from "prop-types";


function GenericEmailPassForm({ type }) {
	return(
		<form>
			<label htmlFor={`${type}-email`}>
            Email
				<input type="email" id={`${type}-email`} />
			</label>
			<label htmlFor={`${type}-password`}>
            Password
				<input type="password" id={`${type}-password`} />
			</label>
			<button>{ `${type[0].toUpperCase() + type.substring(1)}` }</button>
		</form>
	);
}

export default GenericEmailPassForm;

GenericEmailPassForm.propTypes = {
	type: PropTypes.string,
}.isRequired;
