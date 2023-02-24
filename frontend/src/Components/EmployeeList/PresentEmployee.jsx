import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss"
function PresentEmployee() {
  return (
   <ContentWrapper>
 

      <div class="panel panel-default">
       
        <div class="panel-body">
          <table class="table-latitude">
            <caption> Present Employees Information</caption>
            
            <thead>
              <th>Name</th>
              <th>employee id</th>
              <th>Designation</th>
              <th>In Time</th>
              <th>Out Time</th>
              <th>Date</th>
            </thead>
            
            <tbody  >
              {
                new Array(20).fill(0).map(()=>(

              <tr>
                <th>Robyn</th>
                <td>4568</td>
                <td>Banquet</td>
                <td>3:00 AM</td>
                <td>12:00</td>
                <td>24/FEB/2023</td>
              </tr>
                ))
              }
            
            
             
            
            </tbody>
          </table>
        </div>
      </div>
   
      </ContentWrapper>
  );
}

export default PresentEmployee;
