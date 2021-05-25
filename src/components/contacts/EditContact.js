import { getContact, updateContact } from "../../redux/actions/contactAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { setAlert } from "../../redux/actions/alertAction";
import { useParams, useHistory } from "react-router-dom";

const AddContact = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { contact } = useSelector((state) => state.contact);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    dispatch(getContact(id));
  }, [dispatch]);

  useEffect(() => {
    if (contact.name) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
  }, [contact]);

  const onSubmit = (e) => {
    e.preventDefault();
    // Check For Errors
    if (name === "") {
      dispatch(setAlert("Name is required", "error"));
      return;
    }

    if (email === "") {
      dispatch(setAlert("Email is required", "error"));
      return;
    }

    if (phone === "") {
      dispatch(setAlert("Phone is required", "error"));
      return;
    }

    const newContact = {
      name,
      email,
      phone,
    };

    //// SUBMIT CONTACT ////
    dispatch(updateContact(id, newContact));
    dispatch(setAlert("Contact edited.", "success"));
    if (newContact.name) {
      setTimeout(function () {
        history.push("/");
      }, 1000);
    }
  };
  return (
    <div className='card mb-3' style={{ width: "400px" }}>
      <div className='card-header'>Edit Contact</div>
      <div className='card-body'>
        <form onSubmit={onSubmit}>
          <div className='form-control d-flex justify-content-between'>
            <h6>Name : </h6>
            <input
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-control d-flex justify-content-between'>
            <h6>Email : </h6>
            <input
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-control d-flex justify-content-between'>
            <h6>Phone : </h6>
            <input
              type='number'
              placeholder='Enter Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <input type='submit' value='Edit Contact' className='btn btn-light btn-block' />
        </form>
      </div>
    </div>
  );
};
export default AddContact;
