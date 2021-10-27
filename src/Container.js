import './Container.css';

function Container({children}) {
    return (
        <div className='flex-container'>
            {children}
        </div>
    );
}

export default Container;