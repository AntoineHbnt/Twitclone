import React, { useState } from "react";

const DatePicker = () => {
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("1");
  const [day, setDay] = useState("1")


  const currentYear = () => {
    return new Date().getFullYear();
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  return (
    <div className="date-picker">
      <div className="input-select month">
        <label htmlFor="month"><span>Mois</span></label>
        <select name="month" id="month" onChange={(e) => {setMonth(e.target.value)}}>
          <option value="1">Janvier</option>
          <option value="2">Février</option>
          <option value="3">Mars</option>
          <option value="4">Avril</option>
          <option value="5">Mai</option>
          <option value="6">Juin</option>
          <option value="7">Juillet</option>
          <option value="8">Août</option>
          <option value="9">Septembre</option>
          <option value="10">Octobre</option>
          <option value="11">Novembre</option>
          <option value="12">Décembre</option>
        </select>
        <img src="./img/icons/select-arrow.svg" alt="" srcset="" />
      </div>
      <div className="input-select day">
        <label htmlFor="day"><span>Jour</span></label>
        <select name="day" id="day" onChange={(e) => {setDay(e.target.value)}}>
        {[...Array(daysInMonth(month, year))].map((e, i) => (
            <option value={i+1}>{i+1}</option>
          ))}
        </select>
        <img src="./img/icons/select-arrow.svg" alt="" srcset="" />
      </div>
      <div className="input-select year">
        <label htmlFor="year"><span>Année</span></label>
        <select name="year" id="year" onChange={(e) => {setYear(e.target.value)}}>
          {[...Array(100)].map((e, i) => (
            <option value={currentYear()-i}>{currentYear()-i}</option>
          ))}
        </select>
        <img src="./img/icons/select-arrow.svg" alt="" srcset="" />
      </div>
    </div>
  );
};

export default DatePicker;
