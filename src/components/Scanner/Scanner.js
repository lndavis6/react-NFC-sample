import React, { useContext } from 'react';
import './Scanner.css'
import Spinner from '../../spinner.gif';
import Aggie from '../../aggie.gif'
import { ActionsContext } from '../../contexts/context';

const Scanner = () => {
  const { actions, setActions} = useContext(ActionsContext);
    return (
      <div className="scanner">
        <p className="scanner-exit" onClick={()=>setActions({...actions, scan: null})}>X</p>
        <div className="scanner-container">
          <img src={Aggie} alt="spinning log" className="scanner-image"/>
          <p className="scanner-text">
            Fetching your weight...
          </p>
        </div>
      </div>
    );
};

export default Scanner;