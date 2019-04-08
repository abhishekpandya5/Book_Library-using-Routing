import React from 'react'
import {Redirect} from 'react-router-dom';

// function Logout(props) {
//   if(props.isLogined){
//     return(

//         <div>
            
//             <Redirect to="/login" />
//         </div>

//     );  
//   }
// }
function Logout(props) {
  {props.handleLogout()}
  return <Redirect to="/" />
}

export default Logout;
