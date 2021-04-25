import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { mainWrapper } from './styles';
import { BasicLayout } from '../components/BasicLayout';
import { Home } from '../components/Home';
import { ChatBotView } from '../components/ChatBotView';

const AppRoutes:React.FC = () => (
    <BrowserRouter>
        <Box style={mainWrapper}>
            <BasicLayout/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pretrainedintentview" component={ChatBotView} />
            </Switch>
        </Box>
    </BrowserRouter>
);

export default AppRoutes;