import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { header, linkWrapper, outerWrapper, innerWrapper } from './styles';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import { useHistory } from 'react-router-dom';
import { setupWizarLink } from '../../common/constants';

export const GetStarted: React.FC = () => {
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const onClickHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void = () =>
        history.push('/pretrainedintent');
    return (
        <Box style={outerWrapper}>
            <Box style={innerWrapper}>

                <Box style={linkWrapper} onClick={onClickHandler}>
                    <Typography variant='h6' style={header}>
                        {setupWizarLink}
                    </Typography>
                    <ArrowRightAltOutlinedIcon style={{ fontSize: '3em' }} />
                </Box>
            </Box>

        </Box>
    );
};
