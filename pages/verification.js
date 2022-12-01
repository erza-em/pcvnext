import Head from 'next/head'
import Image from 'next/image'
import React, { useRef, useState, useEffect, createContext } from 'react';
import AppContext from '../components/AppContext';
import ButtonsConfirm from '../components/Verification/ButtonsConfirm';
import Popup from '../components/Partials/Popup';
import PrintableVerification from '../components/Verification/PrintableVerification';

export default function Verification({user}) {
    
    const [contextPRN, setcontextPRN] = useState('')
    const [prnStatus, setprnStatus] = useState('Verify')
    const [showPopup, setshowPopup] = useState(false)
    
    
    const [prnValue, setprnValue] = useState('');

    const verifyPRN = async () => {

        if (!prnValue.length == 0) {
            //let inputPRN = 'D12345'
            await fetchPRN(prnValue)
        }else{
            setshowPopup(true)            
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
    <AppContext.Provider value={{contextPRN, setcontextPRN, setprnValue, showPopup, setshowPopup, user, prnStatus, verifyPRN}}>
        
        
        <section id="verification-wrapper" className="main-content">
            {showPopup ? <Popup title="Please input PRN Number!" /> : ''}
            <PrintableVerification />
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

