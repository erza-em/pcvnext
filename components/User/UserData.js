import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

function getUserData() {
    let userLink = 'http://161.49.87.77:85/php/login.php?param={%22username%22:%22dennis%22,%22agencyid%22:101,%22branchid%22:101,%22password%22:%222%22}';
    const { data: user } = useSWR(userLink, fetcher) 
    return user
}
export function UserName() {   
    const user = getUserData()
    
    return (
        <>
            {!!user ? user.data.name : 'Loading...'}
        </>
    )
}

export function UserAgency() {     
    const user = getUserData()
    return (
        <>
            {!!user ? user.data.agency : 'Loading...'}
        </>
    )
}
export function UserBranch() {     
    const user = getUserData()
    return (
        <>
            {!!user ? user.data.branch : 'Loading...'}
        </>
    )
}
