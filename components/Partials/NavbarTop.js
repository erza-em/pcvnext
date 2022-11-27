import Link from 'next/link';
import { useContext } from 'react';
import AppContext from '../AppContext';

export default function NavbarTop() {
    console.log('TOP LOADED')
    return (
        <section className="top_navbar d-flex justify-content-between">
            <div id="hamburger" className=" d-flex align-items-center">
                <a href="#">
                    <i className="fa-solid fa-bars"></i>
                </a>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="changePassTitle">Change Password</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                        <div className="mb-3">
                            <label htmlFor="oldPasswrod" className="form-label">Old Password</label>
                            <input type="password" className="form-control" id="oldPasswrod" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input type="password" className="form-control" id="newPassword" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
            <section id="user-settings" className="d-flex justify-content-center align-items-center">
                
                <div className="dropdown">
                    <section className="dropdown-toggle d-flex justify-content-center align-items-center" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <p>Dennis</p>
                        <div className="img-holder" style={{backgroundImage: `url(https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png)`}}></div>
                    </section>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Change Password</a></li>
                        <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>
            </section>
        </section>

    );
}
