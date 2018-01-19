import React from "react";

const DeleteButton = props => {
	return (
		<button
			type="button"
			onClick={() => props.handlesItemDelete(props.idx)}
		>
			Delete
		</button>
	);
};

export default DeleteButton;
