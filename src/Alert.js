import React, { useEffect } from 'react'

const Alert = ({item , type }) => {

  let style = ''
  switch (type){
    case 'added' : style = 'alert-success';
    break;
    case 'edited' : style ='alert-success';
    break;
    case 'deleted' : style ='alert-danger';
    break;
    default :style='';
     break;
  }
  let alertStyle = 'alert '+style

  return( 
  <div className={alertStyle}>
  {item} {type}
  </div>
 
  )
}

export default Alert
