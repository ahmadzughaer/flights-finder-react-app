import React from 'react';
import './FormErrors.style.css'
 function FormErrors (props) {

    return(
  <div className={props.ClassName3}>
      <p className="error">{props.errorMessage}</p>
  </div>
    )
 }

export default FormErrors;
