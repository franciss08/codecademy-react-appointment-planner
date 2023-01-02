import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contactsData,
  currentTitle,
  setCurrentTitle,
  currentContact,
  setCurrentContact,
  currentDate,
  setCurrentDate,
  currentTime,
  setCurrentTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = (event) => {
    const {target} = event;
    const {id, value} = target;
    
    switch (id) {
      case "app-title":
        setCurrentTitle(value);
        break;
      case "app-date":
        setCurrentDate(value);
        break;
      case "app-time":
        setCurrentTime(value);
        break;
      default:
        return;
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="app-title">Title: </label>
      <input id="app-title"
        type="text" 
        value={currentTitle}
        onChange={handleChange}/>
      <label for="app-date">Title: </label>
      <input id="app-date" 
        type="date" 
        min={getTodayString} 
        value={currentDate}
        onChange={handleChange}
        />
      <label for="app-time">Title: </label>
      <input id="app-time"
        type="time" 
        value={currentTime}
        onChange={handleChange}/>
      <ContactPicker 
        contactsData={contactsData}
      />
      <input type="submit" />
    </form>
  );
};
