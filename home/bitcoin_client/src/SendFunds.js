import {
    Divider,
    Grid, Link, Paper,
    Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";


export const SendFunds = () => {

    const [sendRequest, setSendRequest] = useState({sendAddress: '', amount: ''});
    const [confirmation, setConfirmation] = useState();


    const typographySettings = {
        mr: 2,
        display: {xs: 'none', md: 'flex'},
        fontFamily: 'monospace',
        fontWeight: 700,
        color: 'inherit',
        textDecoration: 'none',
        justifyContent: 'center'
    }

    const handleFaucetChange = (event) => {
        setSendRequest({...sendRequest, sendAddress: event.target.value})
    }

    const handleSubmit = async () => {
        const result = await axios.post('http://localhost:8080/sendtoaddress', {
            sendAddress: sendRequest.sendAddress,
            amount: sendRequest.amount
        })
        setConfirmation(result.data)
    };

    return (
        <>
            <Typography sx={typographySettings}>
                <h1 sx={{textAlign: 'center'}}>
                    Send Funds
                </h1>
                <Divider/>
            </Typography>
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item sx={{marginBottom: 2}}>
                    <TextField sx={{width: 470}}
                               id="name-input"
                               name="name"
                               label="Enter Address"
                               type="text"
                               value={sendRequest.sendAddress}
                               onChange={(event) => setSendRequest({...sendRequest, sendAddress: event.target.value})}
                    />
                </Grid>
                <Grid item>
                    <Typography variant={'h5'} sx={typographySettings}>or</Typography>
                    <Typography sx={typographySettings}>Select Testnet Faucet</Typography>
                </Grid>
                <Grid item sx={{marginBottom: 2}}>
                    <Select sx={{width: 470}} defaultValue="Select Testnet Faucet" onChange={handleFaucetChange}>
                        <MenuItem value="Select Testnet Faucet" disabled={true}>
                            Select Testnet Faucet
                        </MenuItem>
                        <MenuItem key="bitcoin" value="tb1q4280xax2lt0u5a5s9hd4easuvzalm8v9ege9ge">
                            https://bitcoinfaucet.uo1.net/
                        </MenuItem>
                        <MenuItem key="coin" value="mv4rnyY3Su5gjcDNzbMLKBQkBicCtHUtFB">
                            https://coinfaucet.eu/en/btc-testnet/
                        </MenuItem>
                        <MenuItem key="testnet" value="mohjSavDdQYHRYXcS3uS6ttaHP8amyvX78">
                            https://testnet-faucet.com/btc-testnet/
                        </MenuItem>
                    </Select>
                </Grid>
                <Grid item sx={{marginBottom: 2}}>
                    <TextField type="text"
                               id="message"
                               name="message"
                               label='Amount (ex. 0.00001)'
                               onChange={(event) => setSendRequest({...sendRequest, amount: event.target.value})}
                               value={sendRequest.amount}>
                    </TextField>
                </Grid>
                <Button sx={{marginBottom: 2}} variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Grid>
            {confirmation &&
                <>
                    <TableContainer component={Paper} sx={{marginBottom: 4}}>
                        <Table aria-label="simple table" size='small'>
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'>Transaction ID</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    key={confirmation}
                                    sx={{'&:last-child td, &:last-child th': {border: 1}}}
                                >
                                    <TableCell align="left">{confirmation}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Link
                        href={`https://mempool.space/testnet/tx/${confirmation}`} sx={{marginLeft: 20}}
                    >
                        <b>
                            Check it out in Mempool
                        </b>
                    </Link>
                </>
            }
        </>
    )
}