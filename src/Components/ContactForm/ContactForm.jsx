import { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  heandlerInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onContactSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          <span>Name</span>
          <input
            value={this.state.name}
            onChange={this.heandlerInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            value={this.state.number}
            onChange={this.heandlerInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add Contact</button>
        </label>
      </form>
    );
  }
}

export default ContactForm;
