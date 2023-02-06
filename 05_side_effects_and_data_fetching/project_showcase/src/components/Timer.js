// Deliverable 3: Demonstrate the unmounting and cleanup 
// phase of a component through `useEffect`

    // Return a cleanup function inside the `useEffect` 
    // with a console.log()

    // Open up the devtools to observe when the cleanup 
    // will occur during the stages of Component Lifecycle

import { useState, useEffect } from 'react';

const Timer = () => {
    // Timer That Increments By One Each Second (1000 ms)
    const [count, setCount] = useState(0);

    // useEffect
        // setTimeout / setInterval
    useEffect(() => {
        
        const consoleLog = () => {
            console.log("Page Clicked!");
        }

        // Another Behavior That "Sticks"
        document.addEventListener("click", consoleLog);
        
            

        const intervalId = setInterval(() => {
            
            // Indicates a Memory Leak in Application
            // console.log("Behavior Still Firing!");
            
            // Callback Function As Argument for setCount
                // Best Practice
            // setCount(count + 1);
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Clean Up Memory Leak
            // Think About Behavior. Does It Continue Once Component Has
            // Been Unmounted from the DOM? Does This Behavior STICK?
        return () => { 
            console.log("Side Effect Cleaned Up!");
            
            cleanUpEverything();
        };

        
        // Not Cleaning Up Lingering Behaviors => Memory Leaks => Slower / Laggy UI for Users
        function cleanUpEverything () {        
            document.removeEventListener("click", consoleLog);

            clearInterval(intervalId);
        }
    }, [])
    
    return (
        <>
            <h1>My Timer</h1>
            <p>Count: {count}</p>
        </>
    );
}

export default Timer;