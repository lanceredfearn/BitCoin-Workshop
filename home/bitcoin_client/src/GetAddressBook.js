import {
    Divider,
    Paper, Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import React, { useState} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {styled} from '@mui/material/styles';

export const GetAddressBook = ({ addressBook }) => {

    const [isViewingAddressProperties, setIsViewingAddressProperties] = useState(false);
    const [selectedAddressProperties, setSelectedAddressProperties] = useState();


    const showAddressProperties = (click, address) => {
        setIsViewingAddressProperties(click)
        setSelectedAddressProperties(address)
    }

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


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
                    Address Book
                </h1>
                <Divider/>
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell align='left'>Address</TableCell>
                            <TableCell align="left">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(addressBook).map((item) => (
                            <TableRow
                                key={item.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                onClick={() => showAddressProperties(true, addressBook[item])}
                            >
                                <TableCell align="left">{addressBook[item].address}</TableCell>
                                <TableCell align="left">{addressBook[item].amount}</TableCell>
                            </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
            {isViewingAddressProperties ?
                <>
                    <Divider sx={{marginTop: 2, marginBottom: 1}}><b>{selectedAddressProperties.address}</b></Divider>
                    <Box sx={{width: '100%'}}>
                        <Stack spacing={2}>
                            <Item>Confirmations : {selectedAddressProperties.confirmations ? selectedAddressProperties.confirmations : 'None'}</Item>
                            <Item>Label : {selectedAddressProperties.label ? selectedAddressProperties.label : 'None'}</Item>
                            <Item>Transaction IDs : {selectedAddressProperties.txids.length > 1 ? selectedAddressProperties.txids.slice(-3).map((txid) => <p>{txid}</p> )  : 'None'}</Item>
                        </Stack>
                    </Box>
                </>
                :
                <></>
            }
        </>
    )
}