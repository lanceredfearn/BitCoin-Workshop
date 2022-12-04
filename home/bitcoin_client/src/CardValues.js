import Typography from "@mui/material/Typography";

export const CardValues = ({ name, value }) => {


    return (
        <>
        <div>
            <Typography sx={{
                mr: 2,
                display: {xs: 'none', md: 'flex'},
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                justifyItems: 'center',
                justifyContent: 'center'}}>
            {`${name}: ${value}`}
        </Typography>
        </div>
        </>
    )

}