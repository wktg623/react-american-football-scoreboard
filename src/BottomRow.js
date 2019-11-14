import React, { useState } from "react";
import "./App.css";


const BottomRow = () => {
  const [quarterChange, setQuarter] = useState(0);

 

const nextQuarter = el => {

  setQuarter(quarterChange +1)
}
if(quarterChange>4){
 setQuarter(0)
 }




  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">1</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">1</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">1</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
       <div className="quarter__value">{quarterChange}</div>
      </div>
      
      <div className = "quarterButton">
     <button onClick = {nextQuarter}  className="quarterButton_change">Quarter</button>
   </div>
   
    </div>

  );
};

export default BottomRow;
