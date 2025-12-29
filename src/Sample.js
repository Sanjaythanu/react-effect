import { useEffect } from "react";

useEffect()
// - Its a side effect , once the component gets loaded
// it instructs what to do
// Examples:time application
// Fetch data from API


Syntax:

useEffect(()=>{
    // code to run as side effect
    return ()=> {
        // cleaner function , ex to stop a timer like that
        //(optional)//
    };
    }, [dependencies]);