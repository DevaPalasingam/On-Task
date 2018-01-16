import React from "react";

// NewTask is the input bar that the user can type new tasks into
class NewTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		// console.log(event);
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		// if-statement runs only if the user typed something in the input
		if (this.state.value) {
			this.props.handlesUserInput(this.state.value);
			this.setState({value: ""});
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<input
						type="text"
						placeholder="Task"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default NewTask;
