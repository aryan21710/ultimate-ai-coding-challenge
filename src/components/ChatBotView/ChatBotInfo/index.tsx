import React from 'react';
import { outerWrapper, innerWrapper, importBtn, title } from './styles';
import {  Box, Typography, Button  } from '@material-ui/core';

interface IProps {
    setIsChatBotInfoVisible: (value: React.SetStateAction<boolean>) => void;
    expressionText: string[],
    reply: string,
}

const ChatBotInfo:React.FC<IProps>  = ({ setIsChatBotInfoVisible, expressionText, reply }) => {
    const closeChatBotInfo: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = () => setIsChatBotInfoVisible(false);
    return (
        <Box style={outerWrapper}>
            <Box style={innerWrapper}>
                <Typography style={title} variant="h5">List Of Training Expression:- </Typography>

                {expressionText.map((expression, idx)=><Typography key={idx} variant="h6">{expression}</Typography>)}
                <Typography style={title} variant="h5">AI-Bot Reply</Typography>

                <Typography variant="h6">{reply}</Typography>
                <Button style={importBtn} variant='contained' color='secondary' onClick={closeChatBotInfo}>X</Button>
            </Box>
        </Box>


    );
};


export default ChatBotInfo;