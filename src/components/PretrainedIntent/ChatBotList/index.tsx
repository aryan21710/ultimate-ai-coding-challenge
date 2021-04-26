import React, { useState, useEffect }from 'react';
import { Box, Button } from '@material-ui/core';
import { outerWrapper, selectAll, innerWrapper } from './styles';
import { listOfIntents } from '../../../common/constants';
import { Card } from '../Card';


interface IExpression {
    id : string; text: string
}

interface IState {
    botIndex: number;
    botStatus: boolean;
    id: string;
    name: string;
    description: string;
    trainingData: {expressionCount: number, expressions: IExpression[]},
    reply: { id : string, text: string}
}

const updatedListOfIntent = listOfIntents.map(intent=>({ ...intent,
    botIndex: -1,
    botStatus: false }));

export const ChatBotList: React.FC = () => {
    const [isBotAllSelect, SetIsBotAllSelect] = useState<boolean>(false);
    const [allBotSelectStatus, SetAllBotSelectStatus] = useState<string>('Select All');
    const [botValue, SetBotValue] = useState<IState[]>(updatedListOfIntent);

    // eslint-disable-next-line no-unused-vars
    const onSelectAllBotHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = () =>
        SetIsBotAllSelect((prevState) => !prevState);

    // eslint-disable-next-line no-unused-vars
    const onSelectBotHandler: (value: number)=>(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void  = (value:number) => (e) =>  {
        const filteredBot = botValue.map((bot, idx)=>idx === value ? ({
            ...bot,
            botIndex: value,
            botStatus: !bot.botStatus
        }) : ({
            ...bot,
            botIndex: idx,
            botStatus: bot.botStatus
        }));
        SetBotValue([...filteredBot]);
    };

    useEffect(()=>{
        if (!isBotAllSelect) {
            const filteredBot = botValue.map((bot, idx)=>({
                ...bot,
                botIndex: idx,
                botStatus: true
            }));
            SetAllBotSelectStatus('Select All');
            SetBotValue([...filteredBot]);
        } else {
            const filteredBot = botValue.map((bot, idx)=>({
                ...bot,
                botIndex: idx,
                botStatus: false
            }));
            SetAllBotSelectStatus('UnSelect All');
            SetBotValue([...filteredBot]);
        }
    }, [isBotAllSelect]);

    return (
        <Box style={outerWrapper}>
            <Button onClick={onSelectAllBotHandler}
                style={selectAll} variant="contained"
                color="secondary">{allBotSelectStatus}</Button>
            <Box style={innerWrapper}>
                {botValue?.map((intent, idx) => {
                    const intentName = intent.name.concat(' Intent');
                    const expressionText = intent.trainingData.expressions.map((text) => text.text);
                    const sampleExpr = expressionText.slice(0, 1);
                    const { botStatus } = intent;
                    return (
                        <Card
                            description={intent.description}
                            intentName={intentName}
                            sampleExpr={sampleExpr}
                            key={idx}
                            idx={idx}
                            onSelectBotHandler={onSelectBotHandler}
                            botStatus={botStatus}
                            expressionText={expressionText}
                            reply={intent.reply.text}
                        />
                    );

                })}
            </Box>
        </Box>

    );
};