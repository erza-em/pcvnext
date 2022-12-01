export default function ViewAgency() {
    function editAgency() {
        let btnEdit = document.getElementById('btn-edit-branch')
        btnEdit.disabled = true
        let allInputs = document.querySelectorAll('input')
        let allSelect = document.querySelectorAll('select')
        console.log(allInputs)
        for(let i = 0; i < allInputs.length; i++) {
            allInputs[i].removeAttribute('disabled')
        }
        for(let i = 0; i < allSelect.length; i++) {
            allSelect[i].removeAttribute('disabled')
        }
    }
    return (
        <section className="main-content">
            <section className="m-tb-20">
                <section id="agency-details" className=" box-wrapper shadow-2 bg-white">                    
                    <form id="frm-agency-details">                        
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h2 className="c-blue" >Agency Details</h2> 
                            <button type="button" id="btn-edit-branch" className="btn btn-primary float-end mb-3" onClick={editAgency}>Edit Agency  <i className="fa-regular fa-pen-to-square"></i></button>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="agencyName" className="form-label">Agency Name<span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="agencyName" placeholder="Agency Name" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="dateCreated" className="form-label">Date Created<span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="dateCreated" placeholder="Current Date" value="28 Nov 2022" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="agencyCode" className="form-label">Agency Code<span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="agencyCode" placeholder="Agency Code" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address<span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="address" placeholder="Address" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="baranggay" className="form-label">Baranggay<span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="baranggay" placeholder="Baranggay" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="inputMunicipality" className="form-label">Municipality<span className="c-red">*</span></label>
                                    
                                    <select disabled  className="form-select" id="inputMunicipality">
                                        <option defaultValue="">Municipality</option>
                                        <option value="1">Municipality 1</option>
                                        <option value="2">Municipality 2</option>
                                        <option value="3">Municipality 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="inputProvince" className="form-label">Province<span className="c-red">*</span></label>
                                    
                                    <select disabled  className="form-select" id="inputProvince">
                                        <option defaultValue="">Province</option>
                                        <option value="1">Province 1</option>
                                        <option value="2">Province 2</option>
                                        <option value="3">Province 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="zipcode" className="form-label">Zip Code<span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="zipcode" placeholder="Zip Code" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="email-add" className="form-label">Email Address<span className="c-red">*</span></label>
                                    <input disabled  type="email" className="form-control" id="email-add" placeholder="Email Address" />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="mobile-primary" className="form-label">Primary Mobile Number<span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="mobile-primary" placeholder="Primary Mobile Number" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="mobile-secondary" className="form-label">Secondary Mobile Number (Optional)</label>
                                    <input disabled  type="text" className="form-control" id="mobile-secondary" placeholder="Secondary Mobile Number (Optional)" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="mb-3">
                                    <label htmlFor="website" className="form-label">Website<span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="website" placeholder="Website" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">

                                    <label htmlFor="selectPOVAccess" className="form-label">Total No. of Branches with POVS Access<span className="c-red">*</span></label>
                                    
                                    <select disabled  className="form-select" id="selectPOVAccess">
                                        
                                        <option value="1" defaultValue>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                    <hr className="my-4" />
                    <form id="frm-signatories">
                        <h2 className="c-blue" >Authorized Signatory/ries</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="position" className="form-label">Position/Designation</label>
                                    <input disabled  type="text" className="form-control" id="position" placeholder="Position/Designation" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="email-add" className="form-label">Email Address</label>
                                    <input disabled  type="email" className="form-control" id="email-add" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="sigMobile" className="form-label">Mobile Number</label>
                                    <input disabled  type="text" className="form-control" id="sigMobile" placeholder="Mobile Number" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="sigTelephone" className="form-label">Telephone Number</label>
                                    <input disabled  type="text" className="form-control" id="sigTelephone" placeholder="Telephone Number" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <hr className="my-4" />
                    <form id="frm-representative">
                        <h2 className="c-blue" >Authorized Representative/s (Contact Person/s)</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="position" className="form-label">Position/Designation <span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="position" placeholder="Position/Designation" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="email-add" className="form-label">Email Address <span className="c-red">*</span></label>
                                    <input disabled  type="email" className="form-control" id="email-add" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="sigMobile" className="form-label">Mobile Number <span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="sigMobile" placeholder="Mobile Number" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="sigTelephone" className="form-label">Telephone Number <span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="sigTelephone" placeholder="Telephone Number" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <hr className="my-4" />
                    <form id="frm-main-admin">
                        <h2 className="c-blue" >Agency Main Admin</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="admin-user-id" className="form-label">Admin User ID <span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="admin-user-id" placeholder="Admin User ID" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="main-admin-agency-code" className="form-label">Agency Code <span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="main-admin-agency-code" placeholder="Agency Code" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="selectMainPosition" className="form-label">Position/Designation<span className="c-red">*</span></label>
                                    
                                    <select disabled  className="form-select" id="selectMainPosition">
                                        <option value="1" defaultValue>Province 1</option>
                                        <option value="2">Province 2</option>
                                        <option value="3">Province 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="main-admin-email" className="form-label">Email Address <span className="c-red">*</span></label>
                                    <input disabled  type="email" className="form-control" id="main-admin-email" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="sigMobile" className="form-label">Mobile Number <span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="sigMobile" placeholder="Mobile Number" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="sigTelephone" className="form-label">Telephone Number <span className="c-red">*</span></label>
                                    <input disabled  type="text" className="form-control" id="sigTelephone" placeholder="Telephone Number" />
                                </div>
                            </div>
                        </div>
                        <section id="face-photo-wrapper" className="c-dark-gray box-wrapper bg-light-light-gray border-dotted-blue d-flex align-items-center justify-content-center flex-column p-5 mt-3">
                            <span>Upload a photo of your face (Do not wear any kind of accessories)</span>
                            <button type="button" className="btn btn-primary mt-3">Upload</button>
                        </section>
                    </form>
                    <hr className="my-4" />
                    <form id="frm-documents">
                        <h2 className="c-blue" >Documents for Upload</h2>
                        <section id="doc-1-wrapper" className="wrapper mb-5">
                            <p className="mb-1">Attach Document 1 <span className="c-red">*</span></p>
                        
                            <section className="c-dark-gray box-wrapper bg-light-light-gray border-dotted-blue d-flex align-items-center justify-content-center flex-column p-5">
                                <span>SEC Registration (for Private Agencies) or Charter/Enabling Law (for Government Agencies)</span>
                                <button type="button" className="btn btn-primary mt-3">Upload</button>
                            </section>
                        </section>
                        <section id="doc-2-wrapper" className="wrapper mb-5">
                            <p className="mb-1">Attach Document 2 <span className="c-red">*</span></p>
                        
                            <section className="c-dark-gray box-wrapper bg-light-light-gray border-dotted-blue d-flex align-items-center justify-content-center flex-column p-5">
                                <span>Board Resolution or {"Secretary's"} Certificate indicating authorized signatory/ies, representative/s and main Admin in relation to the application, access and use of PostalCard Online Verification System (POVS)</span>
                                <button type="button" className="btn btn-primary mt-3">Upload</button>
                            </section>
                        </section> 
                        <section id="doc-3-wrapper" className="wrapper mb-5">
                            <p className="mb-1">Attach Document 3 <span className="c-red">*</span></p>
                        
                            <section className="c-dark-gray box-wrapper bg-light-light-gray border-dotted-blue d-flex align-items-center justify-content-center flex-column p-5">
                                <span>Photocopy of the valid issued government ID of authorized signatory/ies, representative/s and main Admin</span>
                                <button type="button" className="btn btn-primary mt-3">Upload</button>
                            </section>
                        </section>
                    </form> 
                    <section id="btn-wrapper-export-print" className="d-flex align-items-center justify-content-center m-4">
                        <div className="btn-group">
                            
                            <button type="button" className="btn btn-outline-primary">
                                Discard
                            </button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </section> 
                </section>
            </section>
        </section>
    )
}