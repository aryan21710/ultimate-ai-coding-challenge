import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { mainWrapper } from './styles';
import { CommonLayout } from '../components/CommonLayout';
import { Home } from '../components/Home';
import { PretrainedIntent } from '../components/PretrainedIntent';
import { GetStarted } from '../components/GetStarted';

const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Box style={mainWrapper}>
            <CommonLayout />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/pretrainedintent' component={PretrainedIntent} />
                <Route exact path='/getstarted' component={GetStarted} />
            </Switch>
        </Box>
    </BrowserRouter>
);

export default AppRoutes;
