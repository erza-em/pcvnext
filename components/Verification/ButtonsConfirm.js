
import React, { useContext, useRef  } from 'react'
import AppContext from '../AppContext'
import ReactToPrint from "react-to-print"
import PrintableVerification from './PrintableVerification'

const ButtonsConfirm = ()  => {
    const contextPRN = useContext(AppContext)
    let componentRef = useRef();
    // let btnPrint = ''
    // const [clickedPrint, setclickedPrint] = useState(false)
    // const mounted = useRef(false);

    // useEffect(() => {
    //     mounted.current = true;     
    //     btnPrint = document.querySelector('#btn-print')
    //     btnPrint.addEventListener("click", printPageArea)

    //     return () => {
    //         mounted.current = false;
    //     };
    // }, []);

    // useEffect( () => {        
    //     btnPrint = document.querySelector('#btn-print')
    //     btnPrint.addEventListener("click", printPageArea)
    // }, [clickedPrint])

    
        
    
    function changePRN () {
        let newPRNDetails = contextPRN.contextPRN 
        newPRNDetails = {...newPRNDetails, data: changeStatus(contextPRN.contextPRN.data) }

        contextPRN.setcontextPRN(newPRNDetails)
    }
    // function printPageArea(){
        
    //     var areaID = 'prn-verify-wrapper'
    //     var getFullContent = document.body.innerHTML
    //     var printsection = document.getElementById(areaID).innerHTML
        
    //     window.addEventListener('beforeprint', (event) => {
    //         document.body.innerHTML = printsection
    //       });
    //     window.print();
    //     window.addEventListener('afterprint', (event) => {
    //         document.body.innerHTML = getFullContent
    //         setclickedPrint(current => !current)            
    //     });
        
        
    // }


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
                <ReactToPrint
                    trigger={() => <button type="button" id="btn-print" className="btn btn-success">Print</button>}
                    content={() => componentRef}
                />
                <ComponentToPrint ref={(el) => (componentRef = el)} />


                <button type="button" id="btn-done" className="btn btn-danger" onClick={changePRN}>Done</button>
                <button type="button" id="btn-cancel" className="btn btn-secondary" onClick={changePRN}>Cancel</button>
            </section>
            
            <br />
        </section>
        
    )
}
export default ButtonsConfirm


class ComponentToPrint extends React.Component {
    render() {
      return (
        <PrintableVerification />
      );
    }
  }
