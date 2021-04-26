import intent from '../../assets/images/intent.png';

export const outerWrapper:React.CSSProperties = {
    position: 'absolute',
    top: '7vh',
    left: '0vw',
    width: '100vw',
    height: '90vh',
    background: 'rgba(0,0,0,0.8)',
    zIndex: 1,
};

export const innerWrapper:React.CSSProperties = {
    width: '100vw',
    height: '84vh',
    backgroundImage:`url(${intent})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'contain',
    zIndex: 1,
};

export const header:React.CSSProperties = {
    color: 'white',
    wordSpacing: '0px',
    fontFamily: 'PT Sans Narrow',
    letterSpacing: '2px',

};

export const linkWrapper:React.CSSProperties = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    right: '1vw',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '1vh 0vw',
    zIndex: 100,
    cursor: 'pointer',
};