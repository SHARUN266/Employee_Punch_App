import axios from "axios";
import React, { useEffect, useState } from "react";
import ContentWrapper from "../../Components/contentWrapper/ContentWrapper";
import "./style.scss"
function PresentEmployee() {
  const [data,setData]=useState([])
  let user=JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{

    fetch()

  },[])
  async function fetch(){
    let {data}=await axios.post("http://localhost:3000/getattendance/",user?.user)
    setData(data)
    console.log(data)
  }

  return (
   <ContentWrapper>
 

      <div className="panel panel-default">
       
        <div className="panel-body">
          <table className="table-latitude">
            <caption> Present Employees Information</caption>
            
            <thead>
              <th>Name</th>
             
          
              <th>In Time</th>
              <th>Out Time</th>
              <th>Date</th>
            </thead>
            
            <tbody  >
              {
               data?.map((e,i)=>(

              <tr  key={i}>
                <th>{e.name}</th>
                
                <td>{e.punchIn}</td>
                <td>{e.punchOut}</td>
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
