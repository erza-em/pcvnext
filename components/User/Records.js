import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

function fetchRecordsData() {
    const recordURL = 'http://161.49.87.77:85/php/getprndashboard.php?param={%22agencyid%22:101,%22branchid%22:101,%22username%22:%22dennis%22}'
    const { data: records } = useSWR(recordURL, fetcher) 
    return records
}
export  function getRecordsToday() {   
    console.log('called')
    const records =  fetchRecordsData()
    
    return (
        <>
            {!!records ? records.data.today : 'Loading...'}
        </>
    )
}
