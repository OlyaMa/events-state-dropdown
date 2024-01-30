import React, { useState } from 'react';
import DropdownList from "./DropdownList";

export default function Dropdown() {

  const [openClass, changeClass] = useState(' open')
  const toggleThis = () => {
    changeClass(prev => prev === ' open' ? '' : ' open');
  }

  return (
    <div className="container">
      <div data-id="wrapper" className={"dropdown-wrapper" + openClass}>
        <button data-id="toggle" className="btn" onClick={toggleThis}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>      
        <DropdownList />
      </div>
    </div>
  );
}