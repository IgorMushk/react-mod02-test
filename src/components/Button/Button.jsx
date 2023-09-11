import React from 'react';


// Button получает функцию changeMessage (имя пропа),
// которая вызывается при событии onClick
export const Button = ({ changeMessage, label }) => {
  return (
    <button type="button" onClick={changeMessage}>
      {label} componet
    </button>
  );
};
