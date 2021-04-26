import chatbot from '../../../assets/images/chatbot.png';

export const outerWrapper:React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    backgroundImage:`url(${chatbot})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    borderRadius: '10px',
    position: 'absolute',
    top: '0%',
    left: '0%',
    zIndex: 101,
    overflow: 'hidden'
};

export const innerWrapper:React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    background: 'rgba(255,255,255,0.8)',
    borderRadius: '10px',
    position: 'absolute',
    top: '0%',
    left: '0%',
    zIndex: 101,
    padding: '0.5vh 0.5vw',
    overflow: 'hidden'
};

export const importBtn:React.CSSProperties = {
    position: 'absolute',
    top: '1vh',
    right: '1vw',
    padding: '0vh 0vw',
    width: '1vw',
    zIndex: 100,
};

export const title:React.CSSProperties = {
    margin: '1.5vh 0vw',
    color: '#0099ff'
};
