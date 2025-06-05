// this is my custom hook
import { useEffect, useState } from "react";
import { gitInfo } from "./constants";

const useUserInfo = () =>{

    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(gitInfo);
        const json = await data.json();
        setResInfo(json);
    }

    return resInfo;
}
export default useUserInfo;