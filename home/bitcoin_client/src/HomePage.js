import React, {useState} from "react";
import HomePageAppBar from "./HomePageAppBar";
import {Grid, Paper} from "@mui/material";
import {GetBalance} from "./GetBalance";


export const HomePage = ({walletBalance}) => {
    const [spacing, setSpacing] = React.useState(2);
    const [isClicked, setIsClicked] = useState(false);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const handleClick = (click) => {
        setIsClicked(click)
    }

    return (
        <>
            <HomePageAppBar/>
            <Grid sx={{flexGrow: 1, marginTop: 2, height: 'fit-screen'}} container spacing={spacing}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={4} sx={{backgroundColor: 'gray'}}>
                        <Grid key={'item1'} item onClick={() => handleClick(!isClicked)} sx={{height: 'fit-screen'}}>
                            <Paper elevation={24}
                                sx={{
                                    height: '100%',
                                    width: 500,
                                    boxShadow: 3,
                                    marginBottom: 4,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                    justifyItems: 'center'
                                }}>
                                <GetBalance walletBalance={walletBalance} isClicked={isClicked}/>
                            </Paper>
                        </Grid>
                        <Grid key={'item2'} item>
                            <Paper
                                sx={{
                                    height: 500,
                                    width: 500,
                                    boxShadow: 3,
                                    marginBottom: 4,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}>
                            </Paper>
                        </Grid>
                        <Grid key={'item3'} item>
                            <Paper
                                sx={{
                                    height: 500,
                                    width: 500,
                                    boxShadow: 3,
                                    marginBottom: 4,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
