import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const {contactsData, appointmentsData, addNewAppointment} = props;
  
  /*
  Define state variables for 
  appointment info
  */

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContact, setCurrentContact] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addNewAppointment(currentTitle, currentContact, currentDate, currentTime);
    setCurrentTitle('');
    setCurrentContact('');
    setCurrentDate('');
    setCurrentTime('');

  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          currentTitle={currentTitle}
          setCurrentTitle={setCurrentTitle}
          currentContact={currentContact}
          setCurrentContact={setCurrentContact}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          handleSubmit={handleSubmit}
          contactsData={contactsData}
          />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          inputArray={appointmentsData}/>
      </section>
    </div>
  );
};
