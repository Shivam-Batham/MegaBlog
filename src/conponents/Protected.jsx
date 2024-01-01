import React ,{useEffect,useState}from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({childern,authentication=true}) {
  
    const navigate = useNavigate();
    const [loader,setLoader] = useState(true);
    const authStatus = useSelector(state=>state.auth.status)

    // simple check 
    // if(authStatus === true){
    //     navigate("/")
    // }else if(authStatus === false){
    //     navigate("/login")
    // }

    // complex check 
    useEffect(()=>{
        if(authentication && authStatus !== authentication){

            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false);
    },[authStatus,navigate,authentication])

    return loader ? <h1>Loading...</h1> : <>{childern}</>
  
}
export default Protected;
