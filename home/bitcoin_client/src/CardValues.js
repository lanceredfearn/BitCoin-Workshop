
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";

export const CardValues = ({ walletBalance }) => {


    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table" size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell align='left'>Item</TableCell>
                        <TableCell align="left">Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(walletBalance).map((item) => (
                        <TableRow
                            key={item.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">{item}</TableCell>
                            <TableCell align="left">{walletBalance[item].toString()}</TableCell>
                        </TableRow>))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}