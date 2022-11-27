import Link from 'next/link';
import Image from 'next/image';
import Logo from './../../public/assets/images/postal-card-stamp-logo.png'

const NavbarMain = () => {
    return (
        <section id="main-navigator" className="bg-darkblue sidebar">
            <section id="logo-wrapper">
                <Image src={Logo} alt="Postal Card Logo" />
                <p>PostalCard Verification</p>
            </section>
            <ul>
                <li><Link href="./" title="Home"><i className="fa-solid fa-house-chimney"></i>Home</Link></li>
                <li><Link href="#" title="Admin Portal">
                    <i className="fa-solid fa-house-chimney"></i>Admin Portal</Link>
                    <ul className="ms-3">
                        <li><Link href="./agencies" title="Users"><i className="fa-solid fa-building"></i>Agencies</Link></li>
                        <li><Link href="./branches" title="Users"><i className="fa-solid fa-city"></i>Branches</Link></li>
                        <li><Link href="./users" title="Users"><i className="fa-solid fa-user"></i>Users</Link></li>
                    </ul>
                </li>
                <li><Link href="./report.php" title="Report Page"><i className="fa-solid fa-chart-simple"></i>Reports</Link></li>
                <li><Link href="./verification" title="Verification Page"><i className="fa-solid fa-credit-card"></i>Verification Page</Link></li>        
                <li><Link href="https://phlpost.gov.ph/" target="_blank"  title="Post Office Website"><i className="fa-solid fa-arrow-up-right-from-square"></i>Post Office Website</Link></li>
                
            </ul>

            <Link id="link-logout" href="" title="Log Out"><i className="fa-solid fa-arrow-right-from-bracket"></i>Log Out</Link>
        </section>
    );
}
export default NavbarMain