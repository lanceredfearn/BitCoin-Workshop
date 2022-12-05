import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {HomePage} from "./HomePage";

function App() {
    const [walletBalance, setWalletBalance] = useState();
    const [addressBook, setAddressBook] = useState([]);


    const fetchData = async () => {
        const result = await axios.post('http://localhost:8080/getbalance')
        setWalletBalance(result.data)

        const fetchAddressBook = await axios.post('http://localhost:8080/receivedbyaddress')
        setAddressBook(fetchAddressBook.data)
    }

    useEffect(() => {
        fetchData()
    }, []);


    return (
        <>
            {walletBalance && <HomePage walletBalance={walletBalance} addressBook={addressBook}/>}
        </>


    );
}

export default App;
