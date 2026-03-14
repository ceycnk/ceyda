import React from "react";
<link
  href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
  rel="stylesheet"
/>

function Box() {
  return (
    <div className="boxs">
      <div className="box">
        <div className="box-info">
          Active Orders
          <h2>3</h2>
          
        </div>
      </div>
      <div className="box">
        <div className="box-info">
          Completed Orders
          <h2>24</h2>
        </div>
      </div>
      <div className="box">
        <div className="box-info">
          Reward Points
          <h2>1,240</h2>
        </div>
      </div>
    </div>
  );
}

export default Box;
