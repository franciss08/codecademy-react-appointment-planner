import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [ contactData, setContactData ] = useState([]);
  const [ appointmentsData, setAppointmentData ] = useState([]);
  
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addNewContact = (name, phoneNumber, email) => {
    const newContact = {name: name, phoneNumber: phoneNumber, email:email};
    setContactData((prev) => [...prev, newContact]);
  };

  const addNewAppointment = (title, contact, date, time) => {
    const newAppointment = {title:title, contact:contact, date:date, time:time};
    setAppointmentData((prev) => [...prev, newAppointment]);
  };


  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
              contactsData={contactData}
              addNewContact={addNewContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              appointmentsData={appointmentsData}
              contactsData={contactData}
              addNewAppointment={addNewAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
