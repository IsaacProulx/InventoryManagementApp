import { Loader, Table, TableHead, TableBody, TableRow, TableCell, ThemeProvider } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { useState } from 'react';

const getAllPurchases = () => {
    return new Promise((resolve, reject)=>{
        Auth.currentSession().then(session=>{
            fetch("https://zrfgiv8j4h.execute-api.us-east-1.amazonaws.com/Prod/get-all-purchases",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${session.getIdToken().getJwtToken()}`
                }
            }).then(res=>resolve(res.json())).catch(err=>reject(err))
        })
    })
}

const PurchaseElement = props => {
    return(
        <TableRow>
            <TableCell>
                {props.PurchaseID}
            </TableCell>
            <TableCell>
                {props.ItemID}
            </TableCell>
            <TableCell>
                {props.NumberOfPackages}
            </TableCell>
            <TableCell>
                {props.PricePerPackage}
            </TableCell>
            <TableCell>
                {props.UnitsPerPackage}
            </TableCell>
        </TableRow>
    )
}

function Page(){
    const [error,setError] = useState(false);
    const [purchases, setPurchases] = useState([]);
    
    if(error) return (
        <>
            <h1>Error Fetching Data</h1>
        </>
    )

    if(purchases.length===0){
        getAllPurchases().then(res=>{
            console.log(res)
            setPurchases(Object.keys(res).map(key=>res[key]))
        }).catch(err=>{
            setError(true)
        })
        return(
            <>
                <h1>Fetching Data</h1>
                <Loader
                    size="large"
                    style={{width:"5rem",height:"5rem"}}
                />
            </>
        )
    }

    return(
        <Table
            backgroundColor="var(--amplify-colors-teal-40)"
            style={{
                borderCollapse:"collapse"
            }}
        >
            <TableHead backgroundColor="var(--amplify-colors-teal-90)">
                <TableRow>
                    <TableCell as="th">Purchase ID</TableCell>
                    <TableCell as="th">Item ID</TableCell>
                    <TableCell as="th">Number of Packages</TableCell>
                    <TableCell as="th">Price Per Package</TableCell>
                    <TableCell as="th">Units Per Package</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {purchases.map((purchase,key)=>(
                    <PurchaseElement
                        key={key}
                        PurchaseID={purchase.PurchaseID}
                        ItemID={purchase.ItemID}
                        NumberOfPackages={purchase.NumberOfPackages}
                        PricePerPackage={purchase.PricePerPackage}
                        UnitsPerPackage={purchase.UnitsPerPackage}
                    />
                ))}
            </TableBody>
        </Table>
    )
}

export default Page