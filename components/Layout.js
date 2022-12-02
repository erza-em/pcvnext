
import Header from './Partials/Header'
import Footer from './Partials/Footer'
import NavbarMain from './Partials/NavbarMain'
import NavbarTop from './Partials/NavbarTop'
import VerifiedPRN from './Partials/VerifiedPRN'
import $ from "jquery"

export default function Layout({ children, pageTitle, user }) {
    return (
      <div className="main-content-wrapper">
        <Header />
        <NavbarTop pageTitle = {pageTitle} user = {user}/>
        <NavbarMain />
        <main>{children}</main>
        <Footer />
      </div>
    )
  }

  