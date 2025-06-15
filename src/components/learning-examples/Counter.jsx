import { useState } from 'react';
import './Counter.css';
import CounterButton from './CounterButton';

function CounterContainer () {

    const [count, setCount] = useState(0);

    function incrementMethod(by) {
        setCount(count + by)
    }

    function decrementMethod (by) {
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
                incrementMethod={incrementMethod}
                decrementMethod={decrementMethod}/>
            <CounterButton by={2} 
                incrementMethod={incrementMethod}
                decrementMethod={decrementMethod}/>
            <CounterButton by={5} 
                incrementMethod={incrementMethod}
                decrementMethod={decrementMethod}/>
            <button className="resetButton" 
                    onClick={resetCountParent} >  
            RESET
            </button>
        </div>
    )
}

export default CounterContainer;