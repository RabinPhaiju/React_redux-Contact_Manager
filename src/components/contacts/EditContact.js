import { getContact, updateContact } from "../../redux/actions/contactAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AddContact = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { contact } = useSelector((state) => state.contact);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

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
      setErrors({ name: "Name is required" });
      return;
    }

    if (email === "") {
      setErrors({ email: "Email is required" });
      return;
    }

    if (phone === "") {
      setErrors({ phone: "Phone is required" });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
    };

    //// SUBMIT CONTACT ////
    dispatch(updateContact(id, newContact));

    // Clear State
    setName("");
    setEmail("");
    setPhone("");
    setErrors({});
  };
  return (
    <div className='card mb-3'>
      <div className='card-header'>Edit Contact</div>
      <div className='card-body w-75'>
        <form onSubmit={onSubmit}>
          <div className='form-control d-flex justify-content-around'>
            <h6>Name : </h6>
            <input
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className='text-danger'>{errors && errors.name}</div>
          </div>
          <div className='form-control d-flex justify-content-around'>
            <h6>Email : </h6>
            <input
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='text-danger'>{errors && errors.email}</div>
          </div>
          <div className='form-control d-flex justify-content-around'>
            <h6>Phone : </h6>
            <input
              type='number'
              placeholder='Enter Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className='text-danger'>{errors && errors.phone}</div>
          </div>
          <input type='submit' value='Edit Contact' className='btn btn-light btn-block' />
        </form>
      </div>
    </div>
  );
};
export default AddContact;
