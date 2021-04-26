import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { header, linkWrapper, stackUsedAnimWrapper, text, arrowIcon } from './styles';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import { useHistory } from 'react-router-dom';
import { getStartedLink, stackUsedAnimText } from '../../common/constants';

export const Home: React.FC = () => {
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const onClickHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void = () => history.push('/getstarted');
    return (
        <React.Fragment>
            <Box style={stackUsedAnimWrapper}>
                <Typography className='slider' style={text}>
                    {stackUsedAnimText}
                </Typography>
            </Box>
            <Box style={linkWrapper} onClick={onClickHandler}>
                <Typography variant='h6' style={header}>
                    {getStartedLink}
                </Typography>
                <ArrowRightAltOutlinedIcon style={arrowIcon} />
            </Box>
        </React.Fragment>
    );
};
