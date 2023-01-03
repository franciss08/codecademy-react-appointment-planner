import React from "react";

export const ContactPicker = ({contactsData, handleChange, currentContact}) => {
  return (
    <>
      <label for="app-contact">Contact: </label>
      <select id="app-contact"
        value={currentContact}
        onChange={handleChange}>
        <option value="">No contact</option>
        {contactsData.map((contact, index) => {
          return <option value={contact.name} key={`opt${index}`}>{contact.name}</option>
        })}
      </select>
    </>
  );
};
