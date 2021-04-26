import React from 'react';
import {  outerWrapper } from './styles';
import {  Box } from '@material-ui/core';
import { ChatBotList } from './ChatBotList';


export const PretrainedIntent:React.FC = () =>  (
    <Box style={outerWrapper}>
        <ChatBotList/>
    </Box>
);
