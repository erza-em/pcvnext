import Link from 'next/link'

const PageNotFound = () =>{
    return(
        <div className="main-content">
            <h1>Page Not Found!</h1>
            <Link href="/" title="Home">Home</Link>
        </div>
    )
}
export default PageNotFound