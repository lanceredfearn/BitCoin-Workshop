import {Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

import {TransactionModal} from "./TransactionModal";


export const TransactionListTile = ({transactionList}) => {
    const [open, setOpen] = React.useState(false);
    let transactionIndex = 0

    const handleOpen = (index) => {
        setOpen(true)
        transactionIndex = index
    }



    return (
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
                    Transactions
                </h1>
                <Divider/>
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{textAlign: 'left'}}><b>Address</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactionList.map((row, index) => (
                            <TableRow
                                key={row.txid}
                                sx={{borderBottom: 1}}
                            >
                                <TableCell component="th" scope="row" onClick={() => handleOpen(index)}>
                                    {row.txid}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {open === true ? <TransactionModal open={open} setOpen={setOpen} transactionList={transactionList} transactionIndex={transactionIndex}/> : '' }
        </>
    )
}