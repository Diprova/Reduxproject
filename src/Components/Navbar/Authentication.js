import React from 'react';

 const Authentication=({setAuthenVisibility})=> {
  return (
    <div className="authentication" onClick={()=>setAuthenVisibility(true)}>
          <p className="account">My Account</p>
          <p className="signUp">Login/Sign Up</p>
          
    </div>
  );
}
export default Authentication;