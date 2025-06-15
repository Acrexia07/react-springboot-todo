import { PropTypes } from 'prop-types'

function CounterButton ( {by, incrementMethodParent, decrementMethodParent} ) {
    
    function incrementMethod (value) {
        return () => {
            incrementMethodParent(by)

        }
    }

    function decrementMethod (value) {
        return () => {
            decrementMethodParent(by)
        }
    }

    return (
        <div className="counter">
            <div className="buttons">
                <button className="counterButton" 
                        onClick={incrementMethod(by)} >  
                +{by}
                </button>
                <button className="counterButton" 
                        onClick={decrementMethod(by)} >  
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