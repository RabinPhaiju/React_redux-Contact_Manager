import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions/contactAction";
import { setAlert } from "../../redux/actions/alertAction";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [showContactInfo, setShowContactInfo] = useState(false);

  const onDeleteClick = (id) => {
    //// DELETE CONTACT ////
    dispatch(deleteContact(id));
    dispatch(setAlert("Contact deleted.", "success"));
  };
  return (
    <div className='card card-body mb-3'>
      <h4>
        {contact.name}{" "}
        <i
          onClick={() => setShowContactInfo(!showContactInfo)}
          className='fas fa-sort-down'
          style={{ cursor: "pointer" }}
        />
        <i
          className='fas fa-times'
          style={{ cursor: "pointer", float: "right", color: "red" }}
          onClick={() => onDeleteClick(contact.id)}
        />
        <Link to={`contact/edit/${contact.id}`}>
          <i
            className='fas fa-pencil-alt'
            style={{
              cursor: "pointer",
              float: "right",
              color: "black",
              marginRight: "1rem",
            }}
          />
        </Link>
      </h4>
      {showContactInfo ? (
        <ul className='list-group'>
          <li className='list-group-item'>Email: {contact.email}</li>
          <li className='list-group-item'>Phone: {contact.phone}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Contact;
