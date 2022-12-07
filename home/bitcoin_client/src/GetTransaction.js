import {Divider, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useState} from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    elevation: 24,
    p: 4,
};


export const GetTransaction = () => {

    const [transactionId, setTransactionId] = useState("");
    const [confirmation, setConfirmation] = useState({});
    const [open, setOpen] = useState(false);


    const handleSubmit = async () => {
        const result = await axios.post('http://localhost:8080/gettransaction', transactionId)
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
                    Get Transaction {transactionId}
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
            <div>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Transaction Information
                            </Typography>
                            <Typography id="modal-modal-description" sx={{mt: 2}}>
                                <div>Transaction ID: {confirmation.txid}</div>
                                <div>abandoned : {confirmation.abandoned}</div>
                                <div>amount: {confirmation.amount}</div>
                                <div>blockhash: {confirmation.blockhash}</div>
                                <div>blockheight: {confirmation.blockheight}</div>
                                <div>blockindex: {confirmation.blockindex}</div>
                                <div>blocktime: {confirmation.blocktime}</div>
                                <div>category: {confirmation.category}</div>
                                <div>fee: {confirmation.fee}</div>
                                <div>time: {confirmation.time}</div>
                                <div>timereceived: {confirmation.timereceived}</div>
                                <div>txid: {confirmation.txid}</div>
                                <div>walletconflicts: {confirmation.walletconflicts}</div>
                            </Typography>
                        </>
                    </Box>
                </Modal>
            </div>
        </>
    )
}