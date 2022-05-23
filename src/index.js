import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css';
import Board from './Board';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import { ChakraProvider, extendTheme} from '@chakra-ui/react'
import { store } from './store';
import LoginPage from './LoginPage';

const theme = extendTheme({
    styles:{
        global:()=>({
            body:{
                bg:'#444'
            }
        })
    }
})

const Game = ()=>{
    return(
        <div className='game'>
            <Routes>
                <Route path='/' element={<LoginPage/>} />
                <Route path='play' element={<Board/>} />
            </Routes>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <Game />
            </ChakraProvider>
        </BrowserRouter>
</Provider>
);

