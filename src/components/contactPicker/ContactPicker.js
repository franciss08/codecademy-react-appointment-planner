import React from "react";

export const ContactPicker = ({contactsData}) => {
  return (
    <>
      <label for="app-contact">Contact: </label>
      <select id="app-contact">
        <option value="">No contact</option>
        {contactsData.map((contact, index) => {
          return <option value={contact.name} key={`opt${index}`}>{contact.name}</option>
        })}
      </select>
    </>
  );
};
