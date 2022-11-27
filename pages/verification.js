import Head from 'next/head'
import Image from 'next/image'
import React, { useRef, useState, useEffect, createContext } from 'react';
import AppContext from '../components/AppContext';
import VerifiedPRN from '../components/Partials/VerifiedPRN';
import ButtonsConfirm from '../components/Verification/ButtonsConfirm';


export default function Verification({user}) {
    console.log(user)
    // let username = 'Kevin'
    // let userbranch = 'Branch'
    // let useragency = 'Agency'
    
    const [contextPRN, setcontextPRN] = useState('')
    const [prnStatus, setprnStatus] = useState('Verify')
    
    
    const [prnValue, setprnValue] = useState('');

    const handleClick = async () => {

        if (!prnValue.length == 0) {
            //let inputPRN = 'D12345'
            console.log('clicked')
            await fetchPRN(prnValue)
        }else{
            alert('Please input PRN Number')
        }
    }
    useEffect(() => {
        setprnStatus('Verify')
    }, [prnValue]);

    useEffect(() => {
        if (contextPRN != '') {
          setprnStatus(contextPRN.data[0].Status)
        }
    }, [contextPRN]);
    

    const fetchPRN = async (inputPRN) => {
        const link = 'http://161.49.87.77:85/php/getprndetail.php?param={"prn":"'+inputPRN+'","agencyid":101,"branchid":101,"username":"dennis"}';
        
        const req = await fetch(link);
        const newPRN = await req.json();
        setcontextPRN(newPRN)
    };

    
  
  return (
    <AppContext.Provider value={{contextPRN, setcontextPRN}}>
        <section id="test" className="main-content">
            <section id="prn-verify-wrapper" className=" box-wrapper shadow-2 bg-white">
                <h2 className="c-dark-blue">User Information:</h2>
                <form>
                    <div className="form-group row d-flex align-items-center">
                        <label htmlFor="inputAgency" className="col-sm-2 col-form-label fw-bold">Agency</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputAgency" placeholder="Agency" value={user.agency} readOnly/>
                        </div>
                    </div>
                    <div className="form-group row d-flex align-items-center">
                        <label htmlFor="inputBranch" className="col-sm-2 col-form-label fw-bold">Branch</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputBranch" placeholder="Branch" value={user.branch} readOnly />
                        </div>
                    </div> 
                
                    <div className="form-group row d-flex align-items-center">
                        <label htmlFor="inputOfficer" className="col-sm-2 col-form-label fw-bold">Verification Officer</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputOfficer" placeholder="Verification Officer" value={user.name} readOnly />
                        </div>
                    </div>
                    
                    <div className="form-group row d-flex align-items-center">
                        <label htmlFor="inputDateTime" className="col-sm-2 col-form-label fw-bold">Date/Time Generated</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputDateTime" placeholder="Date/Time Generated" value="04 October 2022, 08:52:50" readOnly/>
                        </div>
                    </div>
                </form>

                <div className="line-hr"></div>
                
                
                <section id="verify-postal-wrapper" className={prnStatus === 'Valid' ? 'd-none' : ''}>
                    <h2 className="c-dark-blue">Postal Card Information</h2>
                    <form id="frm-postal-card-info" className="d-flex align-items-end">
                        <div className="flex-fill">
                            <label htmlFor="inputPRN" className="form-label">PRN D12345</label>                           
                            <input type="text" className="t-50 form-control" id="inputPRN" placeholder="PRN Number" onChange={event => setprnValue(event.target.value)}  />
                        </div>
                        <div id="captcha-wrapper" className="flex-fill">
                            <label htmlFor="inputCaptcha" className="form-label">Captcha</label>
                            <input type="text" className="form-control" id="inputCaptcha" placeholder="Captcha" value="34530" disabled readOnly />
                            <br />
                            <label htmlFor="inputCaptchaVerify" className="form-label">Type the characters above</label>
                            <input type="text" className="form-control" id="inputCaptchaVerify" placeholder="Verify Captcha" />
                        </div>
                        <div className="flex-fill">
                            {/* <button type="button" id="btn-verify-prn" className="btn btn-primary" onClick={handleClick}>{prnStatus}</button>
                                                     */}
                            <button type="button" id="btn-verify-prn" className="btn btn-primary" onClick={handleClick}>{prnStatus}</button>
                        </div>
                    </form>
                </section>
                {prnStatus === 'Valid' ? <VerifiedPRN /> : ''} 
                
            </section>
            <br />

            {prnStatus === 'Valid' ? <ButtonsConfirm /> : ''}
        </section>
    </AppContext.Provider>
  )
}


export async function getStaticProps() {
  let userLink = 'http://161.49.87.77:85/php/login.php?param={%22username%22:%22dennis%22,%22agencyid%22:101,%22branchid%22:101,%22password%22:%222%22}';
  const res = await fetch(userLink)
  const user = await res.json()
  // By returning { props: { users } }, the Blog component
  // will receive `users` as a prop at build time
  return {
    props: {
      user: user.data,
    },
  }
  
}

