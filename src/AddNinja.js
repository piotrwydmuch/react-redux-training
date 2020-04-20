import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);
  };
  render() {

    const styles = {
      marginLeft: 10,
    }

    return (
      <div>
        <h2>Add new guy</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="namne">Name:</label>
          <TextField type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="namne">Age:</label>
          <TextField type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="namne">Belt:</label>
          <TextField type="text" id="belt" onChange={this.handleChange} />
          <Button
            variant="contained"
            color="primary"
            style={styles}
            onClick={this.handleSubmit}
          >
            Add ninja
          </Button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
