import { useState } from "react";
import './counter.css';

// declaring a component, this will throw XML + JS that will be the building block of the website / react application + react provides special syntax to call this function that is kind of custom HTML element
function Counter() {
    // this component holds the dynamic content for the website => wrap the state using useState so that react initiates the re-render when the state changes
    const [ count, setCount ] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }


    // this we are writing JSX, JSX supports writing JS inside the XML but only does that returns the value, like function calls, array apis (these are called expressions) 
    return (
        <div className="counter-container">
            {/* onClick is kind of attribute to which we will pass the function */}
            {/* kind of props that we are passing to it, the other sides destructure this using { onClick } */}
            <button onClick={increment}>Increment</button>
            <b>{count}</b>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;

// Props are the way to pass data from the parent to child components like passing state variables, props are immutable means that child component does not able to change the value.

// There are 2 ways to create the components in React Functional Components (creating a function and then returning JSX) (modern way) 2. Class Components

// In functional components the props are send to the arguments as objects that you can destructure