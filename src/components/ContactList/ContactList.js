import PropTypes from 'prop-types';
import { ContactListEl, Item, Span, Button } from './ContactList.styled';

const  ContactList = ({contacts, onDelete}) => {
    return (
        <ContactListEl >
            {contacts.map(({id,userName,number}) => {
                    return (
                        <Item key={id}>{userName}: <Span>{number}</Span>
                          <Button type='button'  name={id} onClick={onDelete}>
                         Delete
                          </Button>
                         </Item>
                    );
                })}                
        </ContactListEl>
    );
};

ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.is,
};
export default ContactList;