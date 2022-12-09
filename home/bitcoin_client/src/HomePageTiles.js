import {Grid, Paper} from "@mui/material";
import {GetBalance} from "./GetBalance";
import React from "react";
import {GetAddressBook} from "./GetAddressBook";
import {SendFunds} from "./SendFunds";


export const HomePageTiles = ({ walletBalance, addressBook }) => {


    return (
        <Grid sx={{flexGrow: 1, marginTop: 2, height: 'fit-screen'}} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={4} sx={{backgroundColor: 'gray', height: '145%'}}>
                    <Grid key={'item1'} item sx={{height: 'fit-screen', marginBottom: 4}}>
                        <Paper elevation={24}
                               sx={{
                                   height: '100%',
                                   width: 520,
                                   boxShadow: 3,
                                   backgroundColor: (theme) =>
                                       theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                   justifyItems: 'center'
                               }}>
                            <GetBalance walletBalance={walletBalance}/>
                        </Paper>
                    </Grid>
                    <Grid key={'item2'} item>
                        <Paper elevation={24}
                            sx={{
                                height: '96.5%',
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
                                height: '96.5%',
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