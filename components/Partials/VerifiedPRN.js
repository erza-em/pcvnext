import Image from 'next/image'
import IDfront from './../../public/assets/images/img-id-front.png'
import IDback from './../../public/assets/images/img-id-back.png'
import AppContext from '../AppContext'
import { useContext  } from 'react'
import CheckFront from '../Verification/CheckFront'
import CheckBack from '../Verification/CheckBack'

const VerifiedPRN = () => {
    const contextPRN = useContext(AppContext)
    const prnStatus = contextPRN.contextPRN.data[0].Status
    const prnValue = contextPRN.contextPRN.data[0].PRN
    const queryNo = contextPRN.contextPRN.data[0].QueryNo

    return (
           <section id="valid-PRN-wrapper">
                <h2 className="c-dark-blue">Postal Card Information</h2>
                <form id="frm-postal-card-valid" className="d-flex align-items-end">
                    <div  id="inputPRNvalid-wrapper" className="flex-fill">
                        <label htmlFor="inputPRNvalid" className="form-label">PRN </label>
                        <input type="text" className="t-50 form-control c-dark-gray" id="inputPRNvalid" placeholder="PRN Number" value={prnValue} readOnly disabled />
                    </div>
                    <div className="flex-fill">
                        <label htmlFor="inputPRN" className="form-label">PRN Status</label>
                        <div id="status-valid" className="t-50  status bg-light-green c-green d-flex align-items-center justify-content-center">{prnStatus}</div>
                    </div>
                </form>
                <div className="row align-items-center " id="query-no-wrapper">
                    <div className="col-auto">
                        <label htmlFor="inputQueryNo" className="col-form-label fw-bold">Query Number</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="inputQueryNo" className="form-control" placeholder="Query Number" value={queryNo} readOnly disabled />
                    </div>
                </div>

                <section id="discrepancy-check">
                    <div className="row">
                        <div className="offset-md-6 col-md-6 print-col-12">
                            <h2 className="c-dark-blue">Discrepancy Check</h2>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-sm-6 print-col-12">
                            <Image src={IDfront} alt="Postal ID Front" className="img-fluid"/>
                        </div>
                        <div className="col-sm-6 print-col-12">
                            <section id="checklist">
                                <section className="row">
                                    <div className="col-md-2 table-wrapper table-wrapper-center print-col-4">
                                        <span className="t-bold">With</span>
                                    </div>
                                    <div className="col-md-2 table-wrapper table-wrapper-center print-col-4">
                                        <span className="t-bold">Without</span>
                                    </div>
                                    <div className="col-md-8 table-wrapper print-col-4">
                                        <span className="t-bold">Items</span>
                                    </div>
                                </section>
                                
                                    
                                <CheckFront />
                                    
                                
                            </section>
                        </div>

                    </div>
                    
                    <br /><br />

                    <div className="row">
                        <div className="col-sm-6 print-col-12">                          
                            <Image src={IDback} alt="Postal ID Back" className="img-fluid"/>
                        </div>
                        <div className="col-sm-6 print-col-12 d-flex flex-column justify-content-end">
                            <CheckBack />
                        </div>

                    </div>

                    <div className="line-hr"></div>
                    <section id="upload-discrepancy-wrapper" className="d-flex align-items-center flex-column">
                        <br />
                        <p className="fw-bold">If with discrepancy/ies, please upload a copy of the card.</p>
                        <button type="submit" id="btn-upload" className="btn btn-primary">Upload</button>
                        <br /><br />
                    </section>
                </section>
                
            </section>    
    );
}

export default VerifiedPRN