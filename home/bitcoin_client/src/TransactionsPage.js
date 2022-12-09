import {Grid, Paper} from "@mui/material";
import React from "react";
import {TransactionListTile} from "./TransactionListTile";
import {GetTransaction} from "./GetTransaction";
import {SetTransactionFee} from "./SetTransactionFee";


export const TransactionsPage = ({ transactionList }) => {

    return (
        <Grid sx={{flexGrow: 1, marginTop: 2, height: 'fit-screen'}} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={4} sx={{backgroundColor: 'gray', height: '192%'}}>
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
                            <TransactionListTile transactionList={transactionList}/>
                        </Paper>
                    </Grid>
                    <Grid key={'item2'} item sx={{height: 'fit-screen', marginBottom: 4}}>
                        <Paper elevation={24}
                               sx={{
                                   height: '100%',
                                   width: 520,
                                   boxShadow: 3,
                                   backgroundColor: (theme) =>
                                       theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                   justifyItems: 'center'
                               }}>
                            <GetTransaction/>
                        </Paper>
                    </Grid>
                    <Grid key={'item3'} item sx={{height: 'fit-screen', marginBottom: 4}}>
                        <Paper
                            sx={{
                                height: '100%',
                                width: 520,
                                boxShadow: 3,
                                marginBottom: 4,
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}>
                            <SetTransactionFee/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}