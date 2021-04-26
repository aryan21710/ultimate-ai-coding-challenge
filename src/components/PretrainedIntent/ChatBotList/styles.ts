export const outerWrapper:React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 100,
    height: '95%',
    width: '80%',
    background: 'rgba(0,0,0,1)',
};

export const innerWrapper:React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    zIndex: 100,
    height: '100%',
    overflow: 'scroll',
    width: '100%',
};

export const selectAll:React.CSSProperties = {
    margin: '1vh'
};