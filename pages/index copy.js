import React, { useState, useEffect  } from 'react';
import {UserAgency} from '../components/User/UserData';
export default function Home({pageTitle}) {
  return (
    <section className="main-content">
      {/* <h2>
          <div className="cleanslate w24tz-current-time w24tz-small" style={{background: 'none !important', padding: '0 !Important', display: 'inline-block !important', padding: '0 !Important', visibility: 'hidden !important', minWidth: 'auto !important', minHeight: 'auto !important'}}>
            <p>
              <a href="//24timezones.com/Manila/time" style={{textDecoration: 'none'}} className="clock24" id="tz24-1666322246-c1145-eyJob3VydHlwZSI6MTIsInNob3dkYXRlIjoiMSIsInNob3dzZWNvbmRzIjoiMCIsImNvbnRhaW5lcl9pZCI6ImNsb2NrX2Jsb2NrX2NiNjM1MjBmNDYwYTBhYSIsInR5cGUiOiJkYiIsImxhbmciOiJlbiJ9" title="Manila actual time" target="_blank" rel="nofollow">
                </a>
            </p>
          <div id="clock_block_cb63520f460a0aa"></div></div>          
      </h2> */}
        <section className="tiles-status d-flex ">
          <section className="tile d-flex flex-fill flex-column align-items-start px-5 py-4 bg-white">
              <p className="data c-green">3</p>
              <p>Active Agencies</p>
          </section>
          <section className="tile d-flex flex-fill flex-column align-items-start px-5 py-4 bg-white">
              <p className="data c-red">1</p>
              <p>Deactivated Agencies</p>
          </section>
          <section className="tile d-flex flex-fill flex-column align-items-start px-5 py-4 bg-white">
              <p className="data c-dark-gray">0</p>
              <p>Suspended Agencies</p>
          </section>
          <section className="tile d-flex flex-fill flex-column align-items-start px-5 py-4 bg-white">
              <p className="data c-yellow">0</p> 
              <p>Pending</p>
          </section>
        </section>
        
        <section className="m-tb-20">
          <section id="pcv-report" className=" box-wrapper shadow-2 bg-white">
            <h5 className="" >PostalCard Validation Report</h5>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row d-flex align-items-center">
                      <label htmlFor="inputAgency" className="col-sm-2 col-form-label">Agency</label>
                      <div className="col-sm-10">
                      <select className="form-select" id="inputAgency">
                          <option defaultValue>All</option>
                          <option value="1">Agency 1</option>
                          <option value="2">Agency 2</option>
                          <option value="3">Agency 3</option>
                      </select>
                      </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row d-flex align-items-center">
                      <label htmlFor="inputOfficer" className="col-sm-2 col-form-label">Verfication Officer</label>
                      <div className="col-sm-10">
                      <select className="form-select" id="inputOfficer">
                          <option defaultValue>All</option>
                          <option value="1">Officer 1</option>
                          <option value="2">Officer 2</option>
                          <option value="3">Officer 3</option>
                      </select>
                      </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row d-flex align-items-center">
                      <label htmlFor="inputBranch" className="col-sm-2 col-form-label">Branch</label>
                      <div className="col-sm-10">
                      <select className="form-select" id="inputBranch">
                          <option defaultValue>All</option>
                          <option value="1">Branch 1</option>
                          <option value="2">Branch 2</option>
                          <option value="3">Branch 3</option>
                      </select>
                      </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row d-flex align-items-center">
                      <label htmlFor="inputDateTime" className="col-sm-2 col-form-label">Date/Time Generated</label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputDateTime" placeholder="Date/Time Generated" value="04 October 2022, 08:52:50" readOnly />
                      </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </section>
        <div className="table-responsive">
          <table id="table_users" className="table  table-striped table-main bg-white shadow-2 mt-4">
            <thead className="bg-blue">
                <tr>
                    <th>Date</th>
                    <th>Agency</th>
                    <th>Branch</th>
                    <th>Validation Officer</th>
                    <th>Query No.</th>
                    <th>PRN</th>
                    <th>Status</th>
                    <th>Discrepancy/ies</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                  <td className="date">25 Nov 2022</td>
                  <td className="location">Agency Name 1</td>
                  <td className="contactPerson">Branch Name 1</td>
                  <td className="contact-no">09615785011</td>
                  <td className="officer">Officer 1</td>
                  <td className="query-no">Query No 1</td>
                  <td className="status">Valid</td>
                  <td className="discrepancy">No</td>                        
              </tr>
              <tr>
                  <td className="date">25 Nov 2022</td>
                  <td className="location">Agency Name 2</td>
                  <td className="contactPerson">Branch Name 2</td>
                  <td className="contact-no">09615785011</td>
                  <td className="officer">Officer 2</td>
                  <td className="query-no">Query No 2</td>
                  <td className="status">Valid</td>
                  <td className="discrepancy">No</td>                        
              </tr>
              <tr>
                  <td className="date">25 Nov 2022</td>
                  <td className="location">Agency Name 3</td>
                  <td className="contactPerson">Branch Name 3</td>
                  <td className="contact-no">09635785033</td>
                  <td className="officer">Officer 3</td>
                  <td className="query-no">Query No 3</td>
                  <td className="status">Valid</td>
                  <td className="discrepancy">No</td>                        
              </tr>
              <tr>
                  <td className="date">25 Nov 2022</td>
                  <td className="location">Agency Name 4</td>
                  <td className="contactPerson">Branch Name 4</td>
                  <td className="contact-no">09645785044</td>
                  <td className="officer">Officer 4</td>
                  <td className="query-no">Query No 4</td>
                  <td className="status">Valid</td>
                  <td className="discrepancy">No</td>                        
              </tr>
              <tr>
                  <td className="date">25 Nov 2022</td>
                  <td className="location">Agency Name 5</td>
                  <td className="contactPerson">Branch Name 5</td>
                  <td className="contact-no">09655785055</td>
                  <td className="officer">Officer 5</td>
                  <td className="query-no">Query No 5</td>
                  <td className="status">Valid</td>
                  <td className="discrepancy">No</td>                        
              </tr>
            </tbody>
          </table>
        </div>
    </section>
  )
}
export async function getStaticProps() {
  return {
    props: {
      pageTitle: 'Dashboard',
    },
  }
  
}