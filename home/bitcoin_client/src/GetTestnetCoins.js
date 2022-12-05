import {Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";


export const GetTestnetCoins = () => {


    return (
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
                Testnet Coins
            </h1>
            <Divider/>
        </Typography>
    )
}