import Link from 'next/link';

export default function Agencies() {
    return (
        <section className="main-content">
            
                <Link href="./add-agency" id="btn-add-agency" className="btn btn-success float-end mb-3">Add Agency  <i className="fa-solid fa-circle-plus"></i></Link>
            
                <div className="clearfix"></div>
                <div className="table-responsive">
                    <table id="table_agencies" className="table table-striped table-main bg-white shadow-2">
                        <thead className="bg-blue">
                            <tr>
                                <th>Agency Name</th>
                                <th>Location</th>
                                <th>Contact Person</th>
                                <th>Contact No.</th>
                                <th>Email</th>
                                <th>Access Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="agency">Agency 1</td>
                                <td className="location">Location 1</td>
                                <td className="contactPerson">Person 1</td>
                                <td className="contact-no">09615785011</td>
                                <td className="email">email-1@gmail.com</td>
                                <td className="discrepancy">
                                    <a href="./view-agency" id="btn-view-agency-1" className="" title="View Agency 1">View</a>
                                </td>
                                <td className="status">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input " type="checkbox" id="statusAgency-1" defaultChecked />                                        
                                    </div>
                                </td>
                                
                            </tr>
                            <tr>
                                <td className="agency">Agency 2</td>
                                <td className="location">Location 2</td>
                                <td className="contactPerson">Person 2</td>
                                <td className="contact-no">09615785011</td>
                                <td className="email">email-2@gmail.com</td>
                                <td className="discrepancy">
                                    <a href="./view-agency" id="btn-view-agency-1" className="" title="View Agency 1">View</a>
                                </td>
                                <td className="status">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input " type="checkbox" id="statusAgency-1" defaultChecked />                                        
                                    </div>
                                </td>
                                
                            </tr>
                            <tr>
                                <td className="agency">Agency 3</td>
                                <td className="location">Location 3</td>
                                <td className="contactPerson">Person 3</td>
                                <td className="contact-no">09615785011</td>
                                <td className="email">email-3@gmail.com</td>
                                <td className="discrepancy">
                                    <a href="./view-agency" id="btn-view-agency-1" className="" title="View Agency 1">View</a>
                                </td>
                                <td className="status">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input " type="checkbox" id="statusAgency-1" defaultChecked />                                        
                                    </div>
                                </td>
                                
                            </tr>
                            <tr>
                                <td className="agency">Agency 4</td>
                                <td className="location">Location 4</td>
                                <td className="contactPerson">Person 4</td>
                                <td className="contact-no">09615785011</td>
                                <td className="email">email-4@gmail.com</td>
                                <td className="discrepancy">
                                    <a href="./view-agency" id="btn-view-agency-1" className="" title="View Agency 1">View</a>
                                </td>
                                <td className="status">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input " type="checkbox" id="statusAgency-1" defaultChecked />                                        
                                    </div>
                                </td>
                                
                            </tr>
                            <tr>
                                <td className="agency">Agency 5</td>
                                <td className="location">Location 5</td>
                                <td className="contactPerson">Person 5</td>
                                <td className="contact-no">09615785011</td>
                                <td className="email">email-5@gmail.com</td>
                                <td className="discrepancy">
                                    <a href="./view-agency" id="btn-view-agency-1" className="" title="View Agency 1">View</a>
                                </td>
                                <td className="status">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input " type="checkbox" id="statusAgency-1" defaultChecked />                                        
                                    </div>
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
        </section>
    )
}