import React from "react";

class NewTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		alert("A name was submitted: " + this.state.value);
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