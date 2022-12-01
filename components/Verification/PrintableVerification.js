
import AppContext from '../AppContext'
import { useContext  } from 'react'

import VerifiedPRN from '../Partials/VerifiedPRN'

const PrintableVerification = () => {
    const contextPRN = useContext(AppContext)

    return (
        <section id="prn-verify-wrapper" className="prn-printable box-wrapper shadow-2 bg-white">
                <h2 className="c-dark-blue testred">User Information:</h2>
                <form>
                    <div className="form-group row d-flex align-items-center">
                        <label htmlFor="inputAgency" className="col-sm-2 col-form-label fw-bold">Agency</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputAgency" placeholder="Agency" value={contextPRN.user.agency} readOnly/>
                        </div>
                    </div>
                    <div className="form-group row d-flex align-items-center">
                        <label htmlFor="inputBranch" className="col-sm-2 col-form-label fw-bold">Branch</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputBranch" placeholder="Branch" value={contextPRN.user.branch} readOnly />
                        </div>
                    </div> 
                
                    <div className="form-group row d-flex align-items-center">
                        <label htmlFor="inputOfficer" className="col-sm-2 col-form-label fw-bold">Verification Officer</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputOfficer" placeholder="Verification Officer" value={contextPRN.user.name} readOnly />
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
                
                
                <section id="verify-postal-wrapper" className={contextPRN.prnStatus === 'Valid' ? 'd-none' : ''}>
                    <h2 className="c-dark-blue">Postal Card Information</h2>
                    <form id="frm-postal-card-info" className="d-flex align-items-end">
                        <div className="flex-fill">
                            <label htmlFor="inputPRN" className="form-label">PRN D12345</label>                           
                            <input type="text" className="t-50 form-control" id="inputPRN" placeholder="PRN Number" onChange={event => contextPRN.setprnValue(event.target.value)}  />
                        </div>
                        <div id="captcha-wrapper" className="flex-fill">
                            <label htmlFor="inputCaptcha" className="form-label">Captcha</label>
                            <input type="text" className="form-control" id="inputCaptcha" placeholder="Captcha" value="34530" disabled readOnly />
                            <br />
                            <label htmlFor="inputCaptchaVerify" className="form-label">Type the characters above</label>
                            <input type="text" className="form-control" id="inputCaptchaVerify" placeholder="Verify Captcha" />
                        </div>
                        <div className="flex-fill">
                            {/* <button type="button" id="btn-verify-prn" className="btn btn-primary" onClick={contextPRN.verifyPRN}>{contextPRN.prnStatus}</button>
                                                     */}
                            <button type="button" id="btn-verify-prn" className="btn btn-primary" onClick={contextPRN.verifyPRN}>{contextPRN.prnStatus}</button>
                        </div>
                    </form>
                </section>
                {contextPRN.prnStatus === 'Valid' ? <VerifiedPRN /> : ''} 
                
        </section>
    );
}

export default PrintableVerification



