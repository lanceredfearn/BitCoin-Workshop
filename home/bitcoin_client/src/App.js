import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {HomePage} from "./HomePage";
import {ChainPage} from "./ChainPage";
import {TransactionsPage} from "./TransactionsPage";
import HomePageAppBar from "./HomePageAppBar";

function App() {
    const [walletBalance, setWalletBalance] = useState();
    const [addressBook, setAddressBook] = useState([]);
    const [isHome, setIsHome] = useState(true)
    const [isChainPage, setIsChainPage] = useState(false)
    const [isTransactionsPage, setIsTransactionsPage] = useState(false)
    const [transactionList, setTransactionList] = useState();


    const fetchData = async () => {
        const result = await axios.post('http://localhost:8080/getbalance')
        setWalletBalance(result.data)

        const fetchAddressBook = await axios.post('http://localhost:8080/receivedbyaddress')
        setAddressBook(fetchAddressBook.data)

        const fetchTransactionList = await axios.post('http://localhost:8080/listtransactions')
        setTransactionList(fetchTransactionList.data)
    }

    useEffect(() => {
        fetchData()
    }, []);


    return (
        <>
            <HomePageAppBar setIsTransactionsPage={setIsTransactionsPage} setIsChainPage={setIsChainPage} setIsHome={setIsHome}/>
            {isHome === true && walletBalance ?
                <HomePage walletBalance={walletBalance} addressBook={addressBook} setIsTransactionsPage={setIsTransactionsPage} setIsChainPage={setIsChainPage} setIsHome={setIsHome}/>
                : isChainPage ?
                     <ChainPage setIsTransactionsPage={setIsTransactionsPage} setIsChainPage={setIsChainPage} setIsHome={setIsHome}/>
                     : isTransactionsPage ?
                         <TransactionsPage setIsTransactionsPage={setIsTransactionsPage} setIsChainPage={setIsChainPage} setIsHome={setIsHome} transactionList={transactionList}/>
                        : ''}
        </>
    );
}

export default App;
