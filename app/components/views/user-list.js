import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  // Array Sort by recordLocator
  props.users.sort(function(a, b){
   //compare two values
   if(a.recordLocator.toLowerCase() < b.recordLocator.toLowerCase()) return 1;
   if(a.recordLocator.toLowerCase() > b.recordLocator.toLowerCase()) return -1;
   return 0;
 })

  return (
    <div className="data-list">

      {props.users.map(passenger => {

        return (
          <div key={passenger.id} className="data-list-item">
            <div className="details">
              <p className = "recordLocator">{passenger.recordLocator}</p>
              <p>
                {passenger.name}
              </p>
            </div>
          </div>
        );

      })}

    </div>
  );
}
