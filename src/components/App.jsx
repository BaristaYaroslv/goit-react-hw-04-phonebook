
import  Section from "./Section/section";
import  ContactForm from "./ContactForm/ContactForm";
import  Filter from "./Filter/Filter";
import  ContactList from "./ContactList/ContactList";
import { Container } from "./App.styled";
import  React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';


const NAME_STORAGE = 'Contacts_Phonebook';

function useLocalStorage(naneStorage) {
  const [value, setValue] = useState(loadData);

  function loadData() {
    let restoredSession = [];
    try {
      restoredSession = JSON.parse(localStorage.getItem(naneStorage));
    } catch {
      console.log('Error local');
      restoredSession = [];
    }

    return restoredSession || [];
  }

  useEffect(() => {
    function saveData(data) {
      try {
        const serializedState = JSON.stringify(data);
        localStorage.setItem(naneStorage, serializedState);
      } catch (error) {
        console.error('Set state error: ', error.message);
      }
    }

    saveData(value);
  }, [value, naneStorage]);

  return [value, setValue];
}

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(NAME_STORAGE);
  const [filter, setFilter] = useState('');

  const findContactByName = userName => {
    const textFilter = userName.toUpperCase();

    return contacts.find(
      element => element.userName.toUpperCase() === textFilter
    );
  };


  const handlerSubmitPhonebook = ([userName, number]) => {
    if (findContactByName(userName)) {
      alert(`${userName} is already in contacts`);
      return;
    }

    setContacts(prevState => [
      ...prevState,
      { userName, number, id: nanoid() },
    ]);

    return true;
  };

  const handlerOnChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const handlerDeleteContact = event => {
    const id = event.currentTarget.name;
    const newContacts = contacts.filter(element => element.id !== id);

    setContacts(newContacts);
  };

  const visibleContacts = contacts.filter(element =>
    element.userName.toUpperCase().includes(filter.toUpperCase())
  );
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={handlerSubmitPhonebook}/>
        </Section>
  
        <Section title="Contacts">
          <Container>
            <Filter value={filter} onChange={handlerOnChangeFilter}/>
            <ContactList
              contacts={visibleContacts}
              onDelete={handlerDeleteContact}>
            </ContactList>
          </Container>
        </Section>
      </>
    );
  };

