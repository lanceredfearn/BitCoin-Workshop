import * as React from 'react';
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";
import {CardValues} from "./CardValues";

// {
//     "walletname": "Dylan",
//     "walletversion": 169900,
//     "format": "sqlite",
//     "balance": 0.01496312,
//     "unconfirmed_balance": 0.00000000,
//     "immature_balance": 0.00000000,
//     "txcount": 9,
//     "keypoolsize": 3999,
//     "keypoolsize_hd_internal": 4000,
//     "paytxfee": 0.00000000,
//     "private_keys_enabled": true,
//     "avoid_reuse": false,
//     "scanning": false,
//     "descriptors": true,
//     "external_signer": false
// }


export const GetBalance = ({walletBalance, isClicked}) => {


    return (
        <>
            {!isClicked ?
                <>
                    <Typography sx={{
                        mr: 2,
                        display: {xs: 'none', md: 'flex'},
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                        justifyContent: 'center'
                    }}>
                        <h1 sx={{textAlign: 'center'}}>
                            Wallet
                        </h1>
                        <Divider/>
                    </Typography>
                    <CardValues walletBalance={walletBalance}/>
                </>
                :
                <Typography sx={{
                    mr: 2,
                    display: {xs: 'none', md: 'flex'},
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                    justifyContent: 'center'
                }}>
                    <h1>
                        You clicked me
                    </h1>
                    <Divider/>
                </Typography>}
        </>
    )
}