import React from 'react';
import { outerWrapper, footer } from './styles';
import { Box, Typography } from '@material-ui/core';
import { footerText } from '../../../common/constants';

const Footer:React.FC  = () => (
    <Box style={outerWrapper}>
        <Typography variant="subtitle1" style={footer}>{footerText}
        </Typography>
    </Box>
);

export default Footer;