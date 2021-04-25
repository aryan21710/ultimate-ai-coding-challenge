import React from 'react';
import {  outerWrapper } from './styles';
import {  Box } from '@material-ui/core';
import Header from '../Header';
import Footer from '../Footer';

export const BasicLayout:React.FC = () => (
    <Box style={outerWrapper}>
        <Header/>
        <video width="100%" height="" loop muted autoPlay src="https://media.giphy.com/media/l49JGOWSDMAmOlSa4/giphy.mp4">
        </video>
        <Footer/>
    </Box>
);