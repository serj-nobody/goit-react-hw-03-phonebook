import PropTypes from 'prop-types';
import { ContactElement, ContactWrapper, ContactName, ContactNumber, Button } from "./ContactItem.styled";



export const ContactItem = ({ contact, onDelete }) => {
  return (
    <ContactElement>
      <ContactWrapper>
        <ContactName>{contact.name}:</ContactName>
        <ContactNumber>{contact.number}</ContactNumber>
      </ContactWrapper>
      <Button type="button" onClick={() => onDelete(contact.id)}>Delete</Button>
    </ContactElement>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,

  onDelete: PropTypes.func.isRequired,
}