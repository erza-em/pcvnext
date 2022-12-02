import Head from 'next/head'
import Image from 'next/image'
import React, { useRef, useState, useEffect, createContext, useContext } from 'react'
import AppContext from '../components/AppContext'
import Popup from '../components/Partials/Popup'
import PrintableVerification from '../components/Verification/PrintableVerification'
import { useReactToPrint } from 'react-to-print'


export default function Verification({pageTitle}) {
    
  
    let componentRef = useRef();    
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    }); 
    
    
    const [contextPRN, setcontextPRN] = useState('')
    const [prnStatus, setprnStatus] = useState('Verify')
    const [showPopup, setshowPopup] = useState(false)
    
    
    const [prnValue, setprnValue] = useState('');

    const verifyPRN = async () => {

        if (!prnValue.length == 0) {
            //let inputPRN = 'D12345'
            setprnStatus('Verifying...')
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
    <AppContext.Provider value={{contextPRN, setcontextPRN, setprnValue, setprnStatus, showPopup, setshowPopup, prnStatus, verifyPRN}}>        
        <section id="verification-wrapper" className="main-content">
            {showPopup ? <Popup title="Please input PRN Number!" /> : ''}
            {/* <PrintableVerification /> */}
            <ComponentToPrint ref={componentRef} />
              {/* <ComponentToPrint ref={(el) => (componentRef = el)} /> */}
            <br />    
                                       
            {prnStatus === 'Valid' ? <ButtonsConfirm printPRN={handlePrint} /> : ''}
        </section>
    </AppContext.Provider>
  )
}

export function  ButtonsConfirm ({printPRN}) {
  
  const contextPRN = useContext(AppContext)

  console.log(printPRN)

  function cancelVerification () {
    contextPRN.setprnStatus('Verify')
  }
  function changePRN () {
      let newPRNDetails = contextPRN.contextPRN 
      newPRNDetails = {...newPRNDetails, data: changeStatus(contextPRN.contextPRN.data) }

      contextPRN.setcontextPRN(newPRNDetails)
  }
  function changeStatus(data) {
      const dataPRN = data
      let newDataPRN = dataPRN.map(a=>{
        var returnValue = {...a};            
          if (a.Status == 'Valid'){
            returnValue.Status = 'Verify'
            returnValue.PRN = ''
          }
          return returnValue;
      });        

      return newDataPRN;
  }
  return (
      <section id="print-verified-wrapper">
          <section id="btn-wrapper" className="d-flex align-items-center justify-content-center">
              
              <button type="button" id="btn-print" className="btn btn-success" onClick={printPRN}>Print</button>
              <button type="button" id="btn-done" className="btn btn-danger" onClick={changePRN}>Done</button>
              <button type="button" id="btn-cancel" className="btn btn-secondary" onClick={cancelVerification}>Cancel</button> 
          </section>
          
          <br />
      </section>
      
  )
}
class ComponentToPrint extends React.Component {
  render() {
    return (
      <PrintableVerification />
    );
  }
}

export async function getStaticProps() {
  return {
    props: {
      pageTitle: 'Verification'
    },
  }
  
}

