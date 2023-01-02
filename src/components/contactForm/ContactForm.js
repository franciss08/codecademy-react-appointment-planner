import React from "react";

export const ContactForm = ({
  currentName,
  setCurrentName,
  currentPhoneNumber,
  setCurrentPhoneNumber,
  currentEmail,
  setCurrentEmail,
  handleSubmit,
  duplicateName
}) => {

  const handleChange = ({target}) => {
    const {id} = target;
    const {value} = target;
    
    switch (id) {
      case "name":
        setCurrentName(value);
        break;
      case "phone":
        setCurrentPhoneNumber(value);
        break;
      case "email":
        setCurrentEmail(value);
        break;
      default:
        break;
    };
  };

  const phoneNumberRegEx = /[0-9]{10,12}/;

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name: <span id="error-message">{duplicateName && "contact with that name already exists!"}</span></label>
      <input 
        id="name"
        type="text"
        placeHolder="enter the contact's name..."
        value={currentName}
        onChange={handleChange}
      />
      <label for="phone">Contact number:</label>
      <input 
        id="phone"
        type="tel"
        placeHolder="enter the contact's phone number..."
        value={currentPhoneNumber}
        onChange={handleChange}
        
      />
      <label for="email">Email:</label>
      <input 
        id="email"
        type="email"
        placeHolder="enter the contact's email address..."
        value={currentEmail}
        onChange={handleChange}
      />
      <input
        type="submit"
        />
    </form>
  );
};
