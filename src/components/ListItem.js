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
		const eachItem = listItems.map((listItem,idx) => (
			<div  key={idx}>
				<li>{listItem}</li>
				<DeleteButton idx={idx} handlesItemDelete={this.props.handlesItemDelete}/>
			</div>
		));

		// returns each item in the list
		return <ul>{eachItem}</ul>;
	}
}

export default ListItem;
