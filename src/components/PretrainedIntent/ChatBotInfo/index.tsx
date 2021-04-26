import React from 'react';
import { outerWrapper, innerWrapper, importBtn, title } from './styles';
import { Box, Typography, Button } from '@material-ui/core';

interface IProps {
	// eslint-disable-next-line no-unused-vars
	setIsChatBotInfoVisible: (value: React.SetStateAction<boolean>) => void;
	expressionText: string[];
	reply: string;
}

const ChatBotInfo: React.FC<IProps> = ({ setIsChatBotInfoVisible, expressionText, reply }) => {
    // eslint-disable-next-line no-unused-vars
    const closeChatBotInfo: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = () =>
        setIsChatBotInfoVisible(false);
    return (
        <Box style={outerWrapper}>
            <Box style={innerWrapper}>
                <Typography style={title} variant='h5'>
					List Of Training Expression:-{' '}
                </Typography>

                {expressionText.map((expression, idx) => (
                    <Typography key={idx} variant='h6'>
                        {expression}
                    </Typography>
                ))}
                <Typography style={title} variant='h5'>
					AI-Bot Reply
                </Typography>

                <Typography variant='h6'>{reply}</Typography>
                <Button style={importBtn} onClick={closeChatBotInfo}>
					X
                </Button>
            </Box>
        </Box>
    );
};

export default ChatBotInfo;
