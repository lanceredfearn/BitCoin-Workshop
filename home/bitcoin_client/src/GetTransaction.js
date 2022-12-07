import {Divider, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useState} from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import {GetTransactionModal} from "./GetTransactionModal";

export const GetTransaction = () => {

    const [transactionId, setTransactionId] = useState("");
    const [confirmation, setConfirmation] = useState({});
    const [open, setOpen] = useState(false);


    const handleModal = () => {
        confirmation && setOpen(true)
    }

    const handleSubmit = async () => {
        const result = await axios.post('http://localhost:8080/gettransaction', transactionId)
        setConfirmation(result.data)
        handleModal()
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
                    Get Transaction
                </h1>
                <Divider/>
            </Typography>
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item sx={{marginBottom: 2}}>
                    <TextField sx={{width: 470}}
                               id="name-input"
                               name="name"
                               label="Enter Transaction ID"
                               type="text"
                               value={transactionId}
                               onChange={(event) => setTransactionId(event.target.value)}
                    />
                </Grid>
            <Button sx={{marginBottom: 2}} variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Grid>
            <GetTransactionModal open={open} setOpen={setOpen} confirmation={confirmation}/>
        </>
    )
}