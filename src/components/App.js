import React from "react";
import NewTask from "./NewTask";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { listItems: [] }

		this.handlesUserInput = this.handlesUserInput.bind(this);
	}

	// this fuction gets sent to NewTask which will then push the user's input into the listItems array
	handlesUserInput(task) {
		// creates a new array with the new task pushed into it
		let newArray = this.state.listItems.push(task)
		// overwrites listItem with the new array
		this.setState( {listItem: newArray} )
	}

	render() {
		return (
			<NewTask handlesUserInput={this.handlesUserInput} />
		);
	}
}

export default App;
