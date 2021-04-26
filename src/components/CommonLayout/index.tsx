import React from 'react';
import {  outerWrapper } from './styles';
import {  Box } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';
import { bkgVideoUrl } from '../../common/constants';

export const CommonLayout:React.FC = () => (
    <Box style={outerWrapper}>
        <Header/>
        <video width="100%" height="" loop muted autoPlay>
            <source src={bkgVideoUrl}/>
        </video>
        <Footer/>
    </Box>
);