import './styles.css';

function Spinner() {

    return (
        <div className='main-container'>
            <div className='spinner-container'>
                <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div>
            </div>
        </div>
    )
}

export default Spinner;