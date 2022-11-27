
import { useContext  } from 'react';
import AppContext from '../AppContext';

const ButtonsConfirm = ()  => {
    const contextPRN = useContext(AppContext)
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
            <section id="" className="d-flex align-items-center justify-content-center">
                <button type="button" id="btn-print" className="btn btn-success">Print</button>
                <button type="button" id="btn-done" className="btn btn-danger" onClick={changePRN}>Done</button>
                <button type="button" id="btn-cancel" className="btn btn-secondary" onClick={changePRN}>Cancel</button>
            </section>
            
            <br />
        </section>
    )
}
export default ButtonsConfirm