import React, { useState } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { unSelectedWrapper, selectedWrapper, initials, desc, expr, innerWrapper, importBtn, sampleInitials, info } from './styles';
import ChatBotInfo from '../ChatBotInfo';

interface IProps {
	intentName: string;
  description: string;
  expressionText: string[];
  sampleExpr: string[];
  idx: number;
  reply: string,
  onSelectBotHandler: (value: number)=>  (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void;
    botStatus: boolean
}


export const Card: React.FC<IProps> = ({ intentName, description, sampleExpr, onSelectBotHandler, botStatus, idx, expressionText, reply }) => {
    const [isChatBotInfoVisible, setIsChatBotInfoVisible] = useState<boolean>(false);

    const displayChatBotInfo = () => setIsChatBotInfoVisible(true);
    return (
        <Box
            style={botStatus ? selectedWrapper : unSelectedWrapper}
        >
            <Typography variant='h5' style={initials}>
                {intentName}
            </Typography>
            <InfoIcon  style={info} onMouseOver={displayChatBotInfo}/>
            {isChatBotInfoVisible && <ChatBotInfo setIsChatBotInfoVisible={setIsChatBotInfoVisible} expressionText={expressionText} reply={reply}/>}
            <Typography variant='h6' style={sampleInitials}>
                    Description:-
            </Typography>
            <Typography variant='h6' style={desc}>
                {description}
            </Typography>
            <Box style={innerWrapper}>
                <Typography variant='h6' style={sampleInitials}>
                    Sample Training Expression:-
                </Typography>
                <Typography variant='h6' style={expr}>
                    {sampleExpr}
                </Typography>
            </Box>
            <Button onClick={onSelectBotHandler(idx)} style={importBtn} variant='contained' color='secondary'>
                {botStatus ? 'Select' : 'UnSelect'}
            </Button>
        </Box>
    );
};