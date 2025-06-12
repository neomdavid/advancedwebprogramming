import React from 'react';
import '../styles/UnauthorizedAccess.css';

const UnauthorizedAccess = () => {
  return (
    <div className="unauthorized-container">
      <div className="unauthorized-content">
        <h1>Unauthorized Access</h1>
        <p>You do not have permission to access this page.</p>
        <p>Please contact your administrator if you believe this is an error.</p>
      </div>
    </div>
  );
};

export default UnauthorizedAccess; 
