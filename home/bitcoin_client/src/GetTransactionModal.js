import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

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


export const GetTransactionModal = ({open, setOpen, confirmation}) => {

    return (
        <div>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {confirmation.details[0] &&
                    <Box sx={style}>
                        <>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                <b>Transaction Information</b>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{mt: 2}}>
                                <div>Transaction ID: {confirmation.txid}</div>
                                <div>abandoned : {confirmation.abandoned}</div>
                                <div>amount: {confirmation.amount}</div>
                                <div>blockhash: {confirmation.blockhash}</div>
                                <div>blockheight: {confirmation.blockheight}</div>
                                <div>blockindex: {confirmation.blockindex}</div>
                                <div>blocktime: {confirmation.blocktime}</div>
                                <div>Details:
                                    <div>&emsp;&emsp;Abandoned: {confirmation.details[0].abandoned.toString()}</div>
                                <div>&emsp;&emsp;Address: {confirmation.details[0].address}</div>
                                <div>&emsp;&emsp;Amount: {confirmation.details[0].amount}</div>
                                <div>&emsp;&emsp;Category: {confirmation.details[0].category}</div>
                                <div>&emsp;&emsp;Fee: {confirmation.details[0].fee}</div>
                                <div>&emsp;&emsp;VOUT: {confirmation.details[0].vout}</div>
                                </div>
                                <div>fee: {confirmation.fee}</div>
                                <div>time: {confirmation.time}</div>
                                <div>timereceived: {confirmation.timereceived}</div>
                                <div>txid: {confirmation.txid}</div>
                                <div>walletconflicts: {confirmation.walletconflicts}</div>
                            </Typography>
                        </>
                    </Box>}
                </Modal>
        </div>
    )
}