import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/actions/contactAction";
import Contact from "./Contact";

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className='display-4 mb-2'>
        <span className='text-danger'>Contact</span> List
      </h1>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
