import { Component } from "react";
import "./App.css";
// import Contacts from "./Components/Contacts/Contacts";
// import Phonebook from "./Components/Phonebook/Phonebook";
// import Section from "./Components/Section/Section";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  resetForm = () => {
    this.setState({ name: "" });
  };

  heandlerInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onContactSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name);
  };
  render() {
    return (
      <>
        <form onSubmit={this.onContactSubmit}>
          <h2>Phonebook</h2>
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
            <button type="submit">Add Contact</button>
          </label>
        </form>
        <ul>
          <h2>Contacts</h2>
          <li>{this.state.contacts}</li>
        </ul>
      </>
    );
  }
}

export default App;

{
  /* <Section title={"Phonebook"}>
          <Phonebook />
        </Section>
        <Section title={"Contacts"}>
          <Contacts />
        </Section> */
}
