import { Component } from "react";
import "./App.css";
// import Contacts from "./Components/Contacts/Contacts";
// import Phonebook from "./Components/Phonebook/Phonebook";
// import Section from "./Components/Section/Section";
import { nanoid } from "nanoid";

class App extends Component {
  // state = {
  //   contacts: [],
  //   name: "",
  //   number: "",
  // };
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  heandlerInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, [name]: value, [name]: value });
  };

  onContactSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        {
          name: this.state.name,
          id: nanoid(),
          number: this.state.number,
          // filter: this.state.filter,
        },
      ],
    }));
    this.resetForm();
  };

  getFilterContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const filterEl = this.state.contacts;
    const findEl = filterEl.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return findEl;
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
        <span>Find contacts by name</span>
        <input
          value={this.state.filter}
          onChange={this.heandlerInputChange}
          type="text"
          name="filter"
        />
        <h2>Contacts</h2>
        <ul>
          {this.getFilterContacts().map((el) => {
            return (
              <li key={el.id}>
                {el.name}: {el.number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
// this.heandlerInputChange
// ,
{
  /* <Section title={"Phonebook"}>
          <Phonebook />
        </Section>
        <Section title={"Contacts"}>
          <Contacts />
        </Section> */
}
