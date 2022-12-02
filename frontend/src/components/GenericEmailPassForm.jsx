import React from "react";
import PropTypes from "prop-types";


function GenericEmailPassForm({ title, type, className, hasName = false }) {
	return(
		<form className={className}>
			<h3 className="text-xl font-semibold">{ title }</h3>
			{
				hasName
				&& <input className="border-2 border-solid rounded p-1" placeholder="Username" id={`${type}-name`} />
			}
			<input className="border-2 border-solid rounded p-1" placeholder="Email" id={`${type}-email`} />
			<input className="border-2 border-solid rounded p-1" placeholder="Password" id={`${type}-password`} />
			<button className="w-24 p-1 rounded-xl text-gray-50 bg-emerald-600">{`${type[0].toUpperCase() + type.substring(1)}`}</button>
		</form>
	);
}

export default GenericEmailPassForm;

GenericEmailPassForm.propTypes = {
	hasName: PropTypes.bool,
	type: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string,
}.isRequired;
