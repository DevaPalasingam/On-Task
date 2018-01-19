import React from "react";

// NewTask is the input bar that the user can type new tasks into
class NewTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			time: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
	}

	handleChange(event) {
		// console.log(event);
		this.setState({ value: event.target.value });
	}

	handleTimeChange(event) {
		// console.log(event);
		this.setState({ time: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		// if-statement runs only if the user typed a task and a time
		// it also won't let you end your task with " min"
		if (
			this.state.value &&
			this.state.time &&
			!this.state.value.endsWith(" min")
		) {
			this.props.handlesUserInput(this.state.value);
			// adds " min" to the end of the time so that it's clear which element is a task and which is time
			this.props.handlesUserInput(`${this.state.time} min`);
			this.setState({ value: "" });
			this.setState({ time: "" });
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
				<label>
					<input
						type="number"
						min="1"
						step="1"
						placeholder="Minutes"
						value={this.state.time}
						onChange={this.handleTimeChange}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default NewTask;
