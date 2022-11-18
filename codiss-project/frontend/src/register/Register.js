import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {  useNavigate} from "react-router-dom";
import styles from "./styles.module.css";

export default function Register() {
  let style={
    backgroundImage: "url('data:image/jpeg;base64,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')",
    height:'91vh',
    width:'100%',
    paddingTop:'10px',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',  

}
  try {
  } catch (error) {
    console.log(error.message);
  }
  const navigate=useNavigate();
  const [values, setValues] = useState({
    name: "",
    emailId: "",
    password: "",
    phoneNo: "",
   
  });
  const [error, setError] = useState("");
  const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

  async function handle(e) {
    e.preventDefault();
    const url = "https://localhost:9000/api/user/register";
    axios
      .post(url,{
        name: values.name,
        emailId: values.emailId,
        password: values.password,
        mobileNo: values.mobileNumber,
       
      },config
      )
      
      .then((res) => {
        if (res.status === 400) {
          console.log("wrong");
          alert("Something went wrong");
        } else {
          console.log("register");
          alert("Registerd Successfully");
          navigate("/login")
          console.log(res);
        }
      })
      .catch((error) => {
        setError(error.response.data)
        console.log(error);
      });
      // console.log(data);
  }
 

  return (
    <>
    {/* <div className={styles.signup_container}> */}
				<div style={style}>
						<div className={styles.left} >
            <h1 className={styles.head}>Create Your Account</h1>
            <form>
							<input
            className={styles.input}
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            /><br></br>
							
							
             <input
            className={styles.input}
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) =>
                setValues({ ...values, emailId: e.target.value })
              }
            /><br></br>
            <input
            className={styles.input}
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            /><br></br>
             <input
            className={styles.input}
              type="number"
              placeholder="Enter Your MobileNumber"
              onChange={(e) =>
                setValues({ ...values, mobileNumber: e.target.value })
              }
            /><br></br>
             	{error && <div className={styles.error_msg}>{error}</div>}
  
               </form>

						
					{/* </div>       */}
		
    <center>
							<button type="submit" className={styles.green_btn} onClick={handle}>
								Sign Up
							</button>
              </center>
              </div>
              </div>
         </>
  );
}
