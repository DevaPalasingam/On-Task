import React from "react";
import DeleteButton from "./DeleteButton";

class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};
	}

	render() {
		const listItems = this.props.listItems;
		// eachItem holds each item in the listItems array
		const eachItem = listItems.map((listItem, idx) => {
			// console.log(`list item is: ${listItem}`)

			if (listItem.endsWith(" min")) {
				return (
					<div key={idx}>
						<p>{listItem}</p>
						<DeleteButton
							idx={idx}
							handlesItemDelete={this.props.handlesItemDelete}
						/>
					</div>
				);
			} else {
				return (
					<div key={idx}>
						<p>{listItem}</p>
					</div>
				);
			}
		});

		// returns each item in the list
		return <div>{eachItem}</div>;
	}
}

export default ListItem;
