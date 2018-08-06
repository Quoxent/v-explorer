
import React from 'react';

const Notification = () => (
  <div 
    className="alert alert-primary pulse text-center" 
    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', fontSize: '1em' }}>
    <div style={{ color: 'white', fontSize: '1.25em', fontWeight: 'bold' }}>
      Information still being collected.
    </div>
  </div>
);

export default Notification;
