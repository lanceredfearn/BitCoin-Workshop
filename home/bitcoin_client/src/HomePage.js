import React from "react";
import HomePageAppBar from "./HomePageAppBar";
import {HomePageTiles} from "./HomePageTiles";


export const HomePage = ({walletBalance, addressBook}) => {


    return (
        <>
            <HomePageAppBar/>
                <HomePageTiles walletBalance={walletBalance} addressBook={addressBook}/>

        </>
    )
}
