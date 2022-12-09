import {Divider, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useState} from "react";
import Button from "@mui/material/Button";
import axios from "axios";


export const SetTransactionFee = () => {

    const [amount, setAmount] = useState();
    const [confirmation, setConfirmation] = useState();


    const handleSubmit = async () => {
        const result = await axios.post('http://localhost:8080/settransactionfee', amount)
        setConfirmation(result.data)
    };

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
                    Set Transaction Fee
                </h1>
                <Divider/>
            </Typography>
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item sx={{marginBottom: 2}}>
                    <TextField sx={{width: 470}}
                               id="name-input"
                               name="name"
                               label="Enter Amount"
                               type="text"
                               value={amount}
                               onChange={(event) => setAmount(event.target.value)}
                    />
                </Grid>
                <Button sx={{marginBottom: 2}} variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Grid>
            {confirmation && <Typography sx={{
                mr: 2,
                display: {xs: 'none', md: 'flex'},
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                justifyContent: 'center'
            }}>
                <h2 sx={{textAlign: 'center'}}>
                    Success!
                </h2>
            </Typography> }
        </>
    )
}