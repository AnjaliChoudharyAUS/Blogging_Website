import { useEffect } from "react";

import {useState} from "react";
const usefetch=()=>{

    
    const[data,setData]=useState([ ]);
    const[isPending, setIsPending]=useState(true);
    const[error,setError]=useState(null);
    useEffect(()=>{
    fetch('http://localhost:8001/blogs')
    .then(res=>{
        console.log(res);
        if(!res.ok){
            throw Error('Could not fetch the data for that resource');
    
        }
        return res.json();
    
    })
    .then(data=>{
        console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
    
    
    })
    .catch(err=>{
        setError(err.message);
        setIsPending(false);
    
    })
},[]);
return {

    data,isPending,error
}



}
export default usefetch;