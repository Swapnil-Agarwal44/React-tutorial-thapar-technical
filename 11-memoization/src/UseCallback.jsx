import {useCallback, useState} from 'react';

// In this example we will understand the use of the useCallback hook. 

// Similary like the useMemo hook, useCallback hook is used for memoization, the only difference is that whereas the useMemo hook is used to optimize the values, useCallback hook is used to optimize the function. 

// In the below example, we are passing functions instead of values to the child components, and like the useMemo example, we are changing the state of the parent component, so that it will re-render. And if wouldn't have used the useCallback hook, then as we have passed the functions as props, then on every re-render of the parent component due to change of count state, the child component will perceive that the props have also been changed, even if their definition and values are not changed, because like data types, their references changes on every re-rendering.So to make sure that the children are not re-renderd due to re-rendering of the parent component, and when we have to pass functions as props, we have to use the useCallback hook. 

const Button = memo(({onClick, children}) =>{
    console.log(`Rendering button: ${children}`);

    return <button onClick={onClick}>{children}</button>;
})

export default function UseCallback(){
    const [count, setCount] = useState(0);


// Memoize the increment function 
const increment = useCallback(() =>{
    console.log("increment inside");
    setCount((prevCount) => prevCount + 1);
}, []);

// Memoize the decrement function 
const decrement = useCallback(() => {
    console.log("decrement inside");
    setCount((prevCount) => prevCount - 1);
}, [])

return (
    <div>
        <h1> Count: {count} </h1>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
    </div>
);
}
