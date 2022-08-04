import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { ContactFormStyled, InputWrapper, InputLabel, Input, Button } from "./ContactForm.styled";



export class ContactForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  }
  
  state = {
    name: '',
    number: '',
  };

  nameInputID = nanoid();
  numberInputID = nanoid();

  onInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    }
    this.props.onFormSubmit(contact);
    this.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <ContactFormStyled onSubmit={this.onSubmit}>
        <InputWrapper>
          <InputLabel htmlFor={this.nameInputID}>Name:</InputLabel>
          <Input
            id={this.nameInputID}
            type="text"
            name="name"
            value={name}
            onChange={this.onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor={this.numberInputID}>Number:</InputLabel>
          <Input
            id={this.numberInputID}
            type="tel"
            name="number"
            value={number}
            onChange={this.onInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputWrapper>
        
        <Button type="submit">Add contact</Button>
      </ContactFormStyled>
    );
  };
}