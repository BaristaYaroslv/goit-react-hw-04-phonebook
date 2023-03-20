import PropTypes from 'prop-types';
import { ContactListEl, Item, Span, Button } from './ContactList.styled';

export function ContactList({contacts, onDeleteContact}) {
    return (
        <ContactListEl >
            {contacts.map(({id,name,number}) => {
                    return (
                        <Item key={id}>{name}: <Span>{number}</Span>
                          <Button type='button'  onClick={() => onDeleteContact(id)}>
                         Delete
                          </Button>
                         </Item>
                    );
                })}                
        </ContactListEl>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })),
    onDeleteContact: PropTypes.func,
};