import React, { useEffect, useState } from "react";

const DatePicker = ({dateOfBirth, setDateOfBirth}) => {
  const [year, setYear] = useState(2022);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(1)


  const currentYear = () => {
    return new Date().getFullYear();
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  useEffect(()=>{
    setDateOfBirth((new Date(year, month, day).getTime()/1000).toString())
  },[day, month, year])



  return (
    <div className="date-picker">
      <div className="input-select month">
        <label htmlFor="month"><span>Mois</span></label>
        <select name="month" id="month" onChange={(e) => {setMonth(e.target.value)}}>
          <option value="0">Janvier</option>
          <option value="1">Février</option>
          <option value="2">Mars</option>
          <option value="3">Avril</option>
          <option value="4">Mai</option>
          <option value="5">Juin</option>
          <option value="6">Juillet</option>
          <option value="7">Août</option>
          <option value="8">Septembre</option>
          <option value="9">Octobre</option>
          <option value="10">Novembre</option>
          <option value="11">Décembre</option>
        </select>
        <img src="./img/icons/select-arrow.svg" alt="" srcSet="" />
      </div>
      <div className="input-select day">
        <label htmlFor="day"><span>Jour</span></label>
        <select name="day" id="day" onChange={(e) => {setDay(e.target.value)}}>
        {[...Array(daysInMonth(month, year))].map((e, i) => (
            <option key={i} value={i+1}>{i+1}</option>
          ))}
        </select>
        <img src="./img/icons/select-arrow.svg" alt="" srcSet="" />
      </div>
      <div className="input-select year">
        <label htmlFor="year"><span>Année</span></label>
        <select name="year" id="year" onChange={(e) => {setYear(e.target.value)}}>
          {[...Array(100)].map((e, i) => (
            <option key={i} value={currentYear()-i}>{currentYear()-i}</option>
          ))}
        </select>
        <img src="./img/icons/select-arrow.svg" alt="" srcSet="" />
      </div>
    </div>
  );
};

export default DatePicker;
