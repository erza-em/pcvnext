import Link from 'next/link';

export default function Branches() {
    return (
        <section className="main-content">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="form-group d-flex flex-row align-items-center">
                        <label htmlFor="inputAgency" className="col-form-label me-3">Agency</label>
                        
                        <select className="form-select " id="inputAgency">
                            <option defaultValue>All</option>
                            <option value="1">Agency 1</option>
                            <option value="2">Agency 2</option>
                            <option value="3">Agency 3</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <Link href="./add-branch" id="btn-add-branch" className="btn btn-success float-end">Add Branch  <i className="fa-solid fa-circle-plus"></i></Link>
                </div>
            </div>
            <table id="table_branches" className="table table-responsive table-striped table-main bg-white shadow-2">
                <thead className="bg-blue">
                    <tr>
                        <th>Branch Name</th>
                        <th>Location</th>
                        <th>Contact Person</th>
                        <th>Contact No.</th>
                        <th>Email</th>
                        <th>Details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="branch">Branch 1</td>
                        <td className="location">Location 1</td>
                        <td className="contactPerson">Person 1</td>
                        <td className="contact-no">09615785011</td>
                        <td className="email">email-1@gmail.com</td>
                        <td className="discrepancy">
                            <a href="./view-branch.php" id="btn-view-branch-1" className="" title="View branch 1">View</a>
                        </td>
                        <td className="status">
                            <div className="form-check form-switch">
                                <input className="form-check-input " type="checkbox" id="statusbranch-1" defaultChecked />                                        
                            </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <td className="branch">Branch 2</td>
                        <td className="location">Location 2</td>
                        <td className="contactPerson">Person 2</td>
                        <td className="contact-no">09615785011</td>
                        <td className="email">email-2@gmail.com</td>
                        <td className="discrepancy">
                            <a href="./view-branch.php" id="btn-view-branch-1" className="" title="View branch 1">View</a>
                        </td>
                        <td className="status">
                            <div className="form-check form-switch">
                                <input className="form-check-input " type="checkbox" id="statusbranch-1" defaultChecked />                                        
                            </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <td className="branch">Branch 3</td>
                        <td className="location">Location 3</td>
                        <td className="contactPerson">Person 3</td>
                        <td className="contact-no">09615785011</td>
                        <td className="email">email-3@gmail.com</td>
                        <td className="discrepancy">
                            <a href="./view-branch.php" id="btn-view-branch-1" className="" title="View branch 1">View</a>
                        </td>
                        <td className="status">
                            <div className="form-check form-switch">
                                <input className="form-check-input " type="checkbox" id="statusbranch-1" defaultChecked />                                        
                            </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <td className="branch">Branch 4</td>
                        <td className="location">Location 4</td>
                        <td className="contactPerson">Person 4</td>
                        <td className="contact-no">09615785011</td>
                        <td className="email">email-4@gmail.com</td>
                        <td className="discrepancy">
                            <a href="./view-branch.php" id="btn-view-branch-1" className="" title="View branch 1">View</a>
                        </td>
                        <td className="status">
                            <div className="form-check form-switch">
                                <input className="form-check-input " type="checkbox" id="statusbranch-1" defaultChecked />                                        
                            </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <td className="branch">Branch 5</td>
                        <td className="location">Location 5</td>
                        <td className="contactPerson">Person 5</td>
                        <td className="contact-no">09615785011</td>
                        <td className="email">email-5@gmail.com</td>
                        <td className="discrepancy">
                            <a href="./view-branch.php" id="btn-view-branch-1" className="" title="View branch 1">View</a>
                        </td>
                        <td className="status">
                            <div className="form-check form-switch">
                                <input className="form-check-input " type="checkbox" id="statusbranch-1" defaultChecked />                                        
                            </div>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </section>
    )
}