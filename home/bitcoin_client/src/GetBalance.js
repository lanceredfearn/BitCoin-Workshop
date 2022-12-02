import * as React from 'react';
import axios from "axios";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {useEffect, useState} from "react";

function MenuIcon() {
    return null;
}

export const GetBalance = () => {

    const [balanceData, setBalanceData] = useState([]);

    useEffect(() => {
        fetch('http://bitcoin:password@127.0.0.1:18332/', {
            auth:
            method: 'POST',
            headers: {
                'content-type': 'text/plain;'
            },
            body: '{"jsonrpc":"1.0","id":"curltext","method":"getwalletinfo","params":[]}'
        }).then(r => r.json())
            .thenjson
    })


    console.log(balanceData)
    console.log('hello')


    return (
        <div>
            hello
        </div>
    );
}
