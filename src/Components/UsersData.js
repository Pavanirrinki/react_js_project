import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { API } from './API';
import { Navigate, useNavigate } from 'react-router-dom';
function UsersData() {
    const navigate = useNavigate()
const [local_data,setLocal_data] = useState(null);
const [all_users,setAll_users] = useState(null);

    useEffect(()=>{
        const fetchdata =() =>{
const local_user_data = localStorage.getItem("users_details");

if(JSON.parse(local_user_data)?.user?.roll?.toString() == "admin"){
 return axios.get(API+"All_users",{headers:{
    'Content-Type': 'application/json',
  'x-token':JSON.parse(local_user_data)?.token ,
 }}).then((res)=>setAll_users(res.data)).catch((error)=>console.log(error.message))
}
if(JSON.parse(local_user_data)?.user?.roll?.toString() == "employee"){
    console.log(JSON.parse(local_user_data)?.user?._id,'ppppppppppppppppp')
    return axios.get(API+`LoggedIn_user/${JSON.parse(local_user_data)?.user?._id}`,{headers:{
        'Content-Type': 'application/json',
      'x-token':JSON.parse(local_user_data)?.token ,
     }}).
    then((res)=>setLocal_data(res.data)).catch((error)=>console.log(error.message))
   }
}
fetchdata()
    },[])

const LogoutHandler =(e) =>{
    e.preventDefault();
    localStorage.removeItem("users_details");
    navigate("/");
    window.location.reload();
}

    console.log("local_userdata",local_data);
    console.log("all_users",all_users);
  return (
    <><div style={{display:"flex",justifyContent:"center"}} onClick={LogoutHandler}>
    <button style={{padding:"20px 80px 20px 80px",fontWeight:"bold"}}>LOG OUT</button></div>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
          {all_users && all_users?.all_users.map((employees) => {
              return (
                  <div style={{ border: "1px solid black", padding: "5px", margin: "5px" }}>
                      <p>{employees?.name}</p>
                      <p>{employees?.mobile}</p>
                      <p>{employees?.email}</p>
                      <p>{employees?.designation}</p>
                      <p>{employees?.roll}</p>
                  </div>
              );
          })}
      </div>
      
      
     {local_data && <div style={{display:"flex",justifyContent:"center",
     flexDirection:"column",alignItems:"center",border:"1px solid black",width:"50%",margin:"5px auto"}}>
        
        <p>{local_data?.particular_user?.name}</p>
        <p>{local_data?.particular_user?.email}</p>
        <p>{local_data?.particular_user?.mobile}</p>
        <p>{local_data?.particular_user?.designation}</p>
        <p>{local_data?.particular_user?.roll}</p>
        </div>} 
      </>
  )
}

export default UsersData
