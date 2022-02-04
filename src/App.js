import { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Section from "./Components/Section/Section";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import ContactForm from "./Components/ContactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  heandlerInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  delateContackt = (data) => {
    const index = this.state.contacts.findIndex((n) => {
      console.log(n.id === data);
    });

    if (index !== -1) {
      this.state.contacts.splice(index, 1);
    }
    console.log([data]);
  };
  onContactSubmit = (user) => {
    const array = this.state.contacts;
    for (const obj of array) {
      if (obj.name.includes(user.name)) {
        return alert(`${user.name} is olredy in contact`);
      }
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { ...user, id: nanoid() }],
    }));
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
        <Section title="Phonebook">
          <ContactForm
            onContactSubmit={this.onContactSubmit}
            contscts={this.state.contacts}
          />
        </Section>

        <Section title="Contacts">
          <Filter
            heandlerInputChange={this.heandlerInputChange}
            filter={this.state.filter}
          />
          <ContactList
            getFilterContacts={this.getFilterContacts}
            delateContackt={this.delateContackt}
          />
        </Section>
      </>
    );
  }
}

export default App;
