import React from "react";

const ListItem = (props) => {
	const listItems = props.listItems;
	// eachItem holds each item in the listItems array
	const eachItem = listItems.map((listItem) =>
		<li>{listItem}</li>
	);

	// returns each item in the list
	return (
		<ul>{eachItem}</ul>
	);
};

export default ListItem;
