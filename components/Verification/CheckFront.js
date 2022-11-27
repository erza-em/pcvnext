const CheckFront = () => {
    return (
        <>
         
         <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-PRN" id="check-PRN-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-PRN" id="check-PRN-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>PRN</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-name" id="check-name-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-name" id="check-name-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>Name</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Face-Photo" id="check-Face-Photo-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Face-Photo" id="check-Face-Photo-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>Face Photo</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Permanent-Address" id="check-Permanent-Address-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Permanent-Address" id="check-Permanent-Address-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>Permanent Address</span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Date-of-Birth" id="check-Date-of-Birth-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Date-of-Birth" id="check-Date-of-Birth-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>Date of Birth</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Gender" id="check-Gender-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Gender" id="check-Gender-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>Gender</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Blood-Type" id="check-Blood-Type-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Blood-Type" id="check-Blood-Type-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>BloodType</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Nationality" id="check-Nationality-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Nationality" id="check-Nationality-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>Nationality</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Signature" id="check-Signature-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Signature" id="check-Signature-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>Signature</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Place-of-Birth" id="check-Place-of-Birth-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Place-of-Birth" id="check-Place-of-Birth-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>Place of Birth</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-ID-Expiration" id="check-ID-Expiration-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-ID-Expiration" id="check-ID-Expiration-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>ID Expiration</span>
                </div>
            </div>
        
        </>
    )
}
export default CheckFront