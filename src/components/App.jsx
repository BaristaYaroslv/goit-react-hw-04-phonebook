import { Component } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Section } from "./Section/section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./App.styled";
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  };

  takeDataFromSubmitForm = data => {
     const newUser = {
     id: nanoid(),
     name: data.name,
     number: data.number
     }
    const existingContact = this.state.contacts.find((element) =>
      element.name.toLowerCase() === data.name.toLowerCase()
    );

    if(existingContact) {
      window.alert(`${data.name} is already in contacts`);
      return;
    }; 

    this.setState(prevState => ({
      contacts: [newUser, ...prevState.contacts, ]
    }));
    Notify.success(`${data.name} is successfully added to your contact list`);
  };

  handleFilterInputChange = e => {
    this.setState({filter: e.currentTarget.value});
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(element => element.name.toLowerCase().includes(this.state.filter));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(c => c.id !== id),
    }));
    Notify.failure(` deleted from your contact list`);
  };

  render() {
    const visibleContacts = this.getFilteredContacts();
    return (
      <>
        <Section title="Phonebook">
          <ContactForm handleSubmit={this.takeDataFromSubmitForm}/>
        </Section>
  
        <Section title="Contacts">
          <Container>
            <Filter value={this.state.filter} onChange={this.handleFilterInputChange}/>
            <ContactList
              contacts={visibleContacts} 
              onDeleteContact={this.handleDeleteContact}>
            </ContactList>
          </Container>
        </Section>
      </>
    );
  };
};
