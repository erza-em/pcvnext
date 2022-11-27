const CheckBack = () => {
    return (
        <div className="mb-3">
         
            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Present-Address" id="check-Present-Address-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Present-Address" id="check-Present-Address-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>Present Address</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Bar-Code-Number" id="check-Bar-Code-Number-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-Bar-Code-Number" id="check-Bar-Code-Number-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>Bar Code Number</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-EC-Name" id="check-EC-Name-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-EC-Name" id="check-EC-Name-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>EC Name</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-EC-Contact-Number" id="check-EC-Contact-Number-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-EC-Contact-Number" id="check-EC-Contact-Number-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>EC Contact Number</span>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-EC-Address" id="check-EC-Address-yes" value="yes" />
                </div>
                <div className="col-md-2 table-wrapper">
                    <input className="form-check-input" type="radio" name="check-EC-Address" id="check-EC-Address-no" value="no" defaultChecked />
                </div>
                <div className="col-md-8 table-wrapper">
                    <span>EC Address</span>
                </div>
            </div>
        
        </div>
    )
}
export default CheckBack