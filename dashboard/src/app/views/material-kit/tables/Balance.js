import React, { useState } from 'react';

function Balance (props){
    return (
        <div className="Balance">
          <p> Balance</p>
          <h2>{props.balance} {props.currency}</h2>
          <img src={props.image} height = "150" width="150"></img>
        </div>
      );
}
export default Balance;