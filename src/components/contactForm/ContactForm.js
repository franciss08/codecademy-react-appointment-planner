import React from "react";

export const ContactForm = ({
  currentName,
  setCurrentName,
  currentPhoneNumber,
  setCurrentPhoneNumber,
  currentEmail,
  setCurrentEmail,
  handleSubmit
}) => {

  const handleChange = ({target}) => {
    console.log(target.id,target.value);
    switch (target.id) {
      case "name":
        setCurrentName(target.value);
        break;
      case "phone":
        setCurrentPhoneNumber(target.value);
        break;
      case "email":
        setCurrentEmail(target.value);
        break;
    }
  };

  const phoneNumberRegEx = "";

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
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
