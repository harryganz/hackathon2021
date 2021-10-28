import "./Card.css";

const Card = ({children, className}) => {
    return (
        <div className={'card' + (typeof className !== 'undefined' ? ' ' + className : '')}>
            {children}
        </div>
    );
}

Card.Header = ({children, className}) => {
    return (
        <div className={'card-header' + (typeof className !== 'undefined' ? ' ' + className : '')}>
            {children}
        </div>
    );
};

Card.Body = ({children, className}) => {
    return (
        <div className={'card-body' + (typeof className !== 'undefined' ? ' ' + className : '')}>
            {children}
        </div>
    );
};

export default Card;