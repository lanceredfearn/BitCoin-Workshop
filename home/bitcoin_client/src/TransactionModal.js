import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


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



// {
//     "address": "mv4rnyY3Su5gjcDNzbMLKBQkBicCtHUtFB",
//     "category": "send",
//     "amount": -0.00001000,
//     "vout": 0,
//     "fee": -0.00001470,
//     "confirmations": 115,
//     "blockhash": "0000000000000004113929cf71587ffbccab94f0b3e9e9b339fa78188cbe6122",
//     "blockheight": 2409980,
//     "blockindex": 37,
//     "blocktime": 1670287592,
//     "txid": "de584141481ddb9a9aafd40c8613802dabc5fdd364d64d9c13a64c7c66bd6d0e",
//     "walletconflicts": [
// ],
//     "time": 1670287050,
//     "timereceived": 1670287050,
//     "bip125-replaceable": "no",
//     "abandoned": false
// },

export const TransactionModal = ({open, setOpen, transactionList, transactionIndex}) => {

    const txObject = transactionList[transactionIndex]

    console.log(txObject)

    return (
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
                                    <div>Transaction ID: {txObject.txid}</div>
                                    <div>abandoned : {txObject.abandoned}</div>
                                    <div>amount: {txObject.amount}</div>
                                    <div>blockhash: {txObject.blockhash}</div>
                                    <div>blockheight: {txObject.blockheight}</div>
                                    <div>blockindex: {txObject.blockindex}</div>
                                    <div>blocktime: {txObject.blocktime}</div>
                                    <div>category: {txObject.category}</div>
                                    <div>fee: {txObject.fee}</div>
                                    <div>time: {txObject.time}</div>
                                    <div>timereceived: {txObject.timereceived}</div>
                                    <div>txid: {txObject.txid}</div>
                                    <div>walletconflicts: {txObject.walletconflicts.length}</div>
                                </Typography>
                    </>
                </Box>
            </Modal>
        </div>
    );

}