import { useEffect } from "react";
import { useState } from "react"

function UseFetch(apipath,queryterm=''){
    const[data,setdata]=useState([])
    const key=import.meta.env.API_Key;
    const url =`https://api.themoviedb.org/3/${apipath}?api_key=${key}&query=${queryterm}`
    useEffect(()=>{
        async function fetchmovies() {
            fetch(url)
            .then(res=>res.json())
            .then(ans=>setdata(ans.result))
        }
        fetchmovies()
        
    },[url])
    return{data}
}
export default UseFetch