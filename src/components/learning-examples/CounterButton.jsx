import { PropTypes } from 'prop-types'

function CounterButton ( {by, incrementMethod, decrementMethod} ) {

    return (
        <div className="counter">
            <div className="buttons">
                <button className="counterButton" 
                        onClick={() =>  incrementMethod(by)} >  
                +{by}
                </button>
                <button className="counterButton" 
                        onClick={() =>  decrementMethod(by)} >  
                -{by}
                </button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default CounterButton;