import { data } from 'jquery';
import {useEffect, useState} from 'react'
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const UserName = ({dataName}) => {
    return (
        <p>Hi: {dataName}</p>
    )
}
const UserAgency = ({dataAgency}) => {
    return (
        <p>Agency: {dataAgency}</p>
    )
}
function DashboardSWR() {
    
    
    let userLink = 'http://161.49.87.77:85/php/login.php?param={%22username%22:%22dennis%22,%22agencyid%22:101,%22branchid%22:101,%22password%22:%222%22}';
    const { data: user } = useSWR(userLink, fetcher) 
    return (
        <div>
            {!!user && <>
                <UserName dataName = {user.data.name}/>
                <UserAgency dataAgency= {user.data.agency}/>
            </>}
        </div>
    )
}
export default DashboardSWR