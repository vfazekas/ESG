// LoggedIn.js
import React from 'react';

function Menu() {


 const userFilial = sessionStorage.getItem('userFilial');

 return (
  <div>
   <h2>Pateo {userFilial}</h2>
  </div>
 );
}

export default Menu;
