import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {HomePage} from "./HomePage";

function App() {
  const [walletBalance, setWalletBalance] = useState();


   const fetchData = async () => {
     const result = await axios.post('http://localhost:8080/getbalance')
     setWalletBalance(result.data)
   }

    useEffect(() => {
           fetchData()
   }, []);

  return (
      <>
        { walletBalance && <HomePage walletBalance={walletBalance}/>}
      </>


  );
}

export default App;
