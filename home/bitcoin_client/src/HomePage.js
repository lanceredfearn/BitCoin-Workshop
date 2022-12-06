import React from "react";
import {HomePageTiles} from "./HomePageTiles";




export const HomePage = ({walletBalance, addressBook, setIsChainPage, setIsHome, setIsTransactionsPage}) => {



    return (
        <>
                <HomePageTiles walletBalance={walletBalance} addressBook={addressBook}/>

        </>
    )
}
