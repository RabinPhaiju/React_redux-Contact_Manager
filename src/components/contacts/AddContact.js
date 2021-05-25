import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions/contactAction";
import { setAlert } from "../../redux/actions/alertAction";
import React, { useState } from "react";

const AddContact = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
      dispatch(setAlert("Email is required", "error"));
      return;
    }

    const newContact = {
      name,
      email,
      phone,
    };

    //// SUBMIT CONTACT ////
    dispatch(addContact(newContact));
    dispatch(setAlert("Contact added.", "success"));

    // Clear State
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <div className='card mb-3' style={{ width: "400px" }}>
      <div className='card-header'>Add Contact</div>
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
          <input type='submit' value='Add Contact' className='btn btn-light btn-block' />
        </form>
      </div>
    </div>
  );
};
export default AddContact;
