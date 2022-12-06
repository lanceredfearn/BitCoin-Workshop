export const TransactionListTile = ({ transactionList }) => {

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


    console.log(transactionList)

    return (
        transactionList.map((transaction) => {
            return <div>
                {transaction.address}
            </div>
        })

    )
}