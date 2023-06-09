import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';


const useChangeLabel = (initialState = '') => {
  const [value, setValue] = useState(initialState);

  const onChange = event => {
    setValue(event.target.value);
  };

  return [value, setValue, onChange];
};

const Phonebook = ({ onSubmit }) => {
  const [userName, setUserName, handleChargeName] = useChangeLabel('');

  const [number, setNumber, handleChargeNumber] = useChangeLabel('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit([userName, number]) && reset();
  };

  const reset = () => {
    setUserName('');
    setNumber('');
  };

        return (
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={userName}
                        onChange={handleChargeName}
                    />
                </Label>
               
                <Label>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleChargeNumber}
                    />
                </Label>  
                <Button type="submit">Add contact</Button>
            </Form>
        );
};

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Phonebook;