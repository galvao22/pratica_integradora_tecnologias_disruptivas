import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Login = () => {

    function handleClick(){
        console.log('Clicou aqui')
    }

    return (
        <Grid item xs={12} 
            sx={{
                width: '100%',
                textAlign: 'center'
            }}
        >
            <Button variant="contained" color='success' endIcon={<SendIcon />}
                sx={{
                    marginTop: 5,
                }}
                onClick={handleClick}
            >Acessar</Button>
        </Grid>
    );
}

export default Login;