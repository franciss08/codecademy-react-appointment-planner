import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contactsData, addNewContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [currentName, setCurrentName] = useState('');
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!duplicateName) {
      addNewContact(currentName, currentPhoneNumber, currentEmail);
      
      // clears the form
      setCurrentName('');
      setCurrentPhoneNumber('');
      setCurrentEmail('');
    } else {
      console.log("Cant submit as contact is a duplicate")
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(()=>{
    if(contactsData.some((contact) => contact.name === currentName)) {
      console.log("Contact is a duplicate");
      setDuplicateName(true);
    } else {
      console.log("Contact is unique!")
      setDuplicateName(false);
    }
  },[currentName, contactsData]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          currentName={currentName}
          setCurrentName={setCurrentName}
          currentPhoneNumber={currentPhoneNumber}
          setCurrentPhoneNumber={setCurrentPhoneNumber}
          currentEmail={currentEmail}
          setCurrentEmail={setCurrentEmail}
          handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          contactsData={contactsData}
          />
      </section>
    </div>
  );
};
