import { ContactItem } from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';
import { ContactListStyled } from "./ContactList.styled";



export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ContactListStyled>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,  
  }).isRequired),

  onDelete: PropTypes.func.isRequired,
}