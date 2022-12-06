import {Grid, Paper} from "@mui/material";
import {GetBalance} from "./GetBalance";
import React, {useState} from "react";
import {GetAddressBook} from "./GetAddressBook";
import {SendFunds} from "./SendFunds";


export const HomePageTiles = ({ walletBalance, addressBook }) => {
    const [spacing, setSpacing] = React.useState(2);
    const [walletIsClicked, setWalletIsClicked] = useState(false);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const handleClick = (click) => {
        setWalletIsClicked(click)
    }

    return (
        <Grid sx={{flexGrow: 1, marginTop: 2, height: 'fit-screen'}} container spacing={spacing}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={4} sx={{backgroundColor: 'gray'}}>
                    <Grid key={'item1'} item onClick={() => handleClick(!walletIsClicked)} sx={{height: 'fit-screen', marginBottom: 4}}>
                        <Paper elevation={24}
                               sx={{
                                   height: '100%',
                                   width: 520,
                                   boxShadow: 3,
                                   backgroundColor: (theme) =>
                                       theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                   justifyItems: 'center'
                               }}>
                            <GetBalance walletBalance={walletBalance} walletIsClicked={walletIsClicked}/>
                        </Paper>
                    </Grid>
                    <Grid key={'item2'} item>
                        <Paper elevation={24}
                            sx={{
                                height: '95%',
                                width: 520,
                                boxShadow: 3,
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                justifyItems: 'center'
                            }}>
                            <GetAddressBook addressBook={addressBook}/>
                        </Paper>
                    </Grid>
                    <Grid key={'item3'} item>
                        <Paper
                            sx={{
                                height: '94%',
                                width: 520,
                                boxShadow: 3,
                                marginBottom: 4,
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}>
                            <SendFunds/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}