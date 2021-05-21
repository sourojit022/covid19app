import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Container } from "react-bootstrap";
import { BsCheckAll } from "react-icons/bs";
export default function UserDetails() {
  const [userD, setuserD] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then((res) => {
        //Console.log(res)
        setuserD(res.data.statewise);
        console.log(res.data.statewise);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>

      <section>

        <h1 id="Title" >Live Covid Tracker</h1>
        <p id="Title">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>

      </section >


      {/* <table class="table">
        <thead>
          <tr className="abc">
            <th scope="col">State</th>
            <th scope="col">active</th>
            <th scope="col" id="confirm">
              confirmed
              </th>
            <th scope="col" id="death">
              deaths
              </th>
            <th scope="col">recovered</th>
            <th scope="col">lastupdatedtime</th>
          </tr>
        </thead>
        {userD.map((e, i) => {
          return (
            <>
              <tbody>
                <tr className="abc" key={i}>
                  <td>{e.state}</td>
                  <td id="active">{e.active}</td>
                  <td id="confirm">{e.confirmed}</td>
                  <td id="death">{e.deaths}</td>
                  <td id="recoverd">{e.recovered}</td>
                  <td >{e.lastupdatedtime}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table> */}



        {/* <div class="caption">Live Covid Tracker</div> */}
        <div class="table">
          <div class="th">
            <div class="td">State</div>
            <div class="td">Active</div>
            <div class="td">Confirmed</div>
            <div class="td">Deaths</div>
            <div class="td" >Recovered</div>
            <div class="td">Last Update</div>
          </div>
          {userD.map((e) => {
            return (
              <>
                <div class="tbody" className="abc">
                  <div class="tr">
                    <div class="td" >{e.state}</div>
                    <div class="td" id="active">{e.active}</div>
                    <div class="td" id="confirm"> <BsCheckAll/> {e.confirmed}</div>
                    <div class="td" id="death"> {e.deaths}</div>
                    <div class="td" id="recoverd">{e.recovered}</div>
                    <div class="td">{e.lastupdatedtime}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
   



      <section id="foot">
        <h3>* HOW IT SPREADS</h3>
        <hr />
        <p>The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.</p>

        <p>You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.</p>
      </section>




      <div id="indicator">
        <div id="section3">
          <h5> in green=all cases have recovered from the infection </h5>
        </div>
        <div id="section2">
          <h5> in Yellow=all cases are Confirmed</h5>
        </div>
        <div id="section1">
          <h5> in red=all cases are Death</h5>
        </div>
      </div>

      
      

    </>
  );
}