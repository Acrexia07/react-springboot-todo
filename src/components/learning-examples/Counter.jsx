import { useState } from 'react';
import './Counter.css';
import CounterButton from './CounterButton';

function CounterContainer () {

    const [count, setCount] = useState(0);

    function incrementMethodParent (by) {
        setCount(count + by)
    }

    function decrementMethodParent (by) {
        setCount(count - by)
    }

    function resetCountParent (){
        setCount(0)
    }

    return (
        <div className="Counter">
            <h1>Counter</h1>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} 
                incrementMethodParent={incrementMethodParent}
                decrementMethodParent={decrementMethodParent}/>
            <CounterButton by={2} 
                incrementMethodParent={incrementMethodParent}
                decrementMethodParent={decrementMethodParent}/>
            <CounterButton by={5} 
                incrementMethodParent={incrementMethodParent}
                decrementMethodParent={decrementMethodParent}/>
            <button className="resetButton" 
                    onClick={resetCountParent} >  
            RESET
            </button>
        </div>
    )
}

export default CounterContainer;