import React from "react";

const DatePicker = () => {

    const  daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    }


  return (
    <div className="date-picker">
      <div className="input-select month">
        <label htmlFor="month">Mois</label>
        <select name="month" id="month">
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
      <div className="input-select month">
        <label htmlFor="day">Jour</label>
        <select name="day" id="day">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <img src="./img/icons/select-arrow.svg" alt="" srcset="" />
      </div>
      <div className="input-select month">
        <label htmlFor="year">Année</label>
        <select name="year" id="year">
            {() => {for}}
          <option value="2022">2022</option>
          
        </select>
        <img src="./img/icons/select-arrow.svg" alt="" srcset="" />
      </div>
    </div>
  );
};

export default DatePicker;
