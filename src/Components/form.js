import React, { useState } from "react";


let Form=()=>{

let [userData,setUserData]=useState({
    email:'',
    password:'',
    confirmpassword:''

})
let[message,setmessage]=useState("")
function handleuser(e){
    e.preventDefault();
    
    if(userData.password===userData.confirmpassword&&userData.email!=''&&userData.password!=''&&userData.confirmpassword!='')
    {
        alert("user register secuessfully")
        setUserData({email:'',
   password:'',
   confirmpassword:''})
    }
    else if(userData.password!=userData.confirmpassword){
        alert("Password and Confirmpassword must be same")
    }
  
   
}
    return(
        <div style={{
            width:"100%",
            height:"100vh",
            display:"flex",
            paddingTop:"15%%",
            justifyContent:"center",
            alignItems:"center",
        }}>
            <form onSubmit={handleuser} style={{
                display :"flex",
                flexDirection:"column",
                gap:"20px",
             alignItems:"center",
                
            }}>
                <input id="input" type ="Email" placeholder="Enter Email" required  value={userData.email}onChange={(e)=>{
                  setUserData({  ...userData,email:e.target.value})
                   
                }}></input>
                <input type ="password" placeholder="Enter Password" value={userData.password} onChange={(e)=>
                    {
                        setUserData({...userData,password:e.target.value,})
                    }
                }></input>
                <input type ="password" placeholder="Confirm Password"  value={userData.confirmpassword}onChange={(e)=>
                    {
                       setUserData( {...userData,confirmpassword:e.target.value,})
                    }
                }></input>
                <button>Login</button>

            </form>
        </div>
    )
}


export default Form;