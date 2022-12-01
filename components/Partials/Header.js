import Head from 'next/head'
import Script from 'next/script'
const Header = () => {
    return (
        <div>
            <Head>
                <title>Postal Card Verification</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />     
                <link rel="stylesheet" media="print" href="/assets/css/print.css" />
            </Head>
            {/* <Script src="//w.24timezones.com/l.js" type="text/javascript" async /> */}
        </div>
    );
}

export default Header



