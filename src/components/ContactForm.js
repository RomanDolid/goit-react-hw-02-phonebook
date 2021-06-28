import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ImPencil } from 'react-icons/im';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          id={this.nameInputId}
          value={name}
          onChange={this.handleChange}
        />

        <label htmlFor={this.numberInputId}>Number</label>
        <input
          type="text"
          name="number"
          id={this.numberInputId}
          value={number}
          onChange={this.handleChange}
        />

        <button type="submit">
          <ImPencil style={{ marginRight: 15 }} />
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
