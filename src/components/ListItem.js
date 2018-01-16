import React from "react";

const ListItem = (props) => {
	const listItems = props.listItems;
	const eachItem = listItems.map((listItem) =>
		<li>{listItem}</li>
	);

	return (
		<ul>{eachItem}</ul>
	);
};

export default ListItem;
