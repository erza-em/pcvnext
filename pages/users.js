import Link from 'next/link';

export default function Users() {
    return (
        <section className="main-content">
            <div className="row align-items-center">
                <div className="col-md-5">
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
                <div className="col-md-5">
                    <div className="form-group d-flex flex-row align-items-center">
                        <label htmlFor="inputBranch" className="col-form-label me-3">Branch</label>
                        
                        <select className="form-select " id="inputBranch">
                            <option defaultValue>All</option>
                            <option value="1">Branch 1</option>
                            <option value="2">Branch 2</option>
                            <option value="3">Branch 3</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <Link href="./add-user" id="btn-add-user" className="btn btn-success float-end">Add user  <i className="fa-solid fa-circle-plus"></i></Link>
                </div>
            </div>
            <div className="table-responsive">
                <table id="table_users" className="table table-striped table-main bg-white shadow-2">
                    <thead className="bg-blue">
                        <tr>
                            <th>Name</th>
                            <th>Agency</th>
                            <th>Branch</th>
                            <th>Contact No.</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Password</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="user">User 1</td>
                            <td className="location">Agency 1</td>
                            <td className="contactPerson">Branch 1</td>
                            <td className="contact-no">09615785011</td>
                            <td className="email">email-1@gmail.com</td>
                            <td className="role">Role-1</td>
                            <td className="status">
                                <div className="form-check form-switch">
                                    <input className="form-check-input " type="checkbox" id="statususer-1" defaultChecked />                                        
                                </div>
                            </td>
                            <td className="userPassword">
                                <a href="./reset-user-pass.php" id="btn-reset-pass-user-1" className="" title="Reset user password 1">Reset Password</a>
                            </td>
                            <td className="userdetails">
                                <a href="./view-user.php" id="btn-view-user-1" className="" title="View user 1">View</a>
                            </td>
                            
                        </tr>
                        <tr>
                            <td className="user">User 2</td>
                            <td className="location">Agency 2</td>
                            <td className="contactPerson">Branch 2</td>
                            <td className="contact-no">09615785012</td>
                            <td className="email">email-2@gmail.com</td>
                            <td className="role">Role-2</td>
                            <td className="status">
                                <div className="form-check form-switch">
                                    <input className="form-check-input " type="checkbox" id="statususer-2" defaultChecked />                                        
                                </div>
                            </td>
                            <td className="userPassword">
                                <a href="./reset-user-pass.php" id="btn-reset-pass-user-2" className="" title="Reset user password 2">Reset Password</a>
                            </td>
                            <td className="userdetails">
                                <a href="./view-user.php" id="btn-view-user-2" className="" title="View user 2">View</a>
                            </td>
                            
                        </tr>
                        <tr>
                            <td className="user">User 3</td>
                            <td className="location">Agency 3</td>
                            <td className="contactPerson">Branch 3</td>
                            <td className="contact-no">09615785013</td>
                            <td className="email">email-3@gmail.com</td>
                            <td className="role">Role-3</td>
                            <td className="status">
                                <div className="form-check form-switch">
                                    <input className="form-check-input " type="checkbox" id="statususer-3" defaultChecked />                                        
                                </div>
                            </td>
                            <td className="userPassword">
                                <a href="./reset-user-pass.php" id="btn-reset-pass-user-3" className="" title="Reset user password 3">Reset Password</a>
                            </td>
                            <td className="userdetails">
                                <a href="./view-user.php" id="btn-view-user-3" className="" title="View user 3">View</a>
                            </td>
                            
                        </tr>
                        <tr>
                            <td className="user">User 4</td>
                            <td className="location">Agency 4</td>
                            <td className="contactPerson">Branch 4</td>
                            <td className="contact-no">09615785014</td>
                            <td className="email">email-4@gmail.com</td>
                            <td className="role">Role-4</td>
                            <td className="status">
                                <div className="form-check form-switch">
                                    <input className="form-check-input " type="checkbox" id="statususer-4" defaultChecked />                                        
                                </div>
                            </td>
                            <td className="userPassword">
                                <a href="./reset-user-pass.php" id="btn-reset-pass-user-4" className="" title="Reset user password 4">Reset Password</a>
                            </td>
                            <td className="userdetails">
                                <a href="./view-user.php" id="btn-view-user-4" className="" title="View user 4">View</a>
                            </td>
                            
                        </tr>
                        <tr>
                            <td className="user">User 5</td>
                            <td className="location">Agency 5</td>
                            <td className="contactPerson">Branch 5</td>
                            <td className="contact-no">09615785015</td>
                            <td className="email">email-5@gmail.com</td>
                            <td className="role">Role-5</td>
                            <td className="status">
                                <div className="form-check form-switch">
                                    <input className="form-check-input " type="checkbox" id="statususer-5" defaultChecked />                                        
                                </div>
                            </td>
                            <td className="userPassword">
                                <a href="./reset-user-pass.php" id="btn-reset-pass-user-5" className="" title="Reset user password 5">Reset Password</a>
                            </td>
                            <td className="userdetails">
                                <a href="./view-user.php" id="btn-view-user-5" className="" title="View user 5">View</a>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}