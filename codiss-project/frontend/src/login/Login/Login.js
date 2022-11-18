import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { HashRouter, Link, Route, useNavigate} from "react-router-dom";
import { AuthContext } from "../../App";
import styles from "./styles.module.css";

export default function Login() {
  let style={
    backgroundImage: "url('http://chitrahandicraft.com/wp-content/uploads/2019/02/login-page-background-images-hd-10.jpg')",
    height:'91vh', 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',  
}

  try {
  } catch (error) {
    console.log(error.message);
  }
 
  let token=useContext(AuthContext);
// console.log(token.users[0].student);
const navigate=useNavigate();
const [model,setModel]=useState(false);
const [error,setError]=useState("");

  const [values, setValues] = useState({

    emailId: "",
    password: ""
  });
  const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

  async function handle(e) {
    console.log("enter axios");
    e.preventDefault();
    const url = "https://localhost:9000/api/user/login";
    axios
      .post(url, {
        emailId: values.emailId,
        password: values.password
      },config
      )
      
      .then((res) => {
        if (res.status === 400) {
          console.log("Something went wrong");
          
        } else {

        alert('login successfully')
        
          
          localStorage.setItem('x-auth',res.data);
          localStorage.getItem('x-auth');
          console.log(localStorage.getItem('x-auth'));
          navigate("/main");
          // console.log(token)
         
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) 
          setError(error.response.data);
          // console.log(error)
        })
      // console.log(data);
  }
  // const style = {
  //   "margin-left": "0px",
  //   padding: "0px"
  // };

  

  return (
    <>
    
      <div  className={styles.login_container} style={style}>
				<div className={styles.login_form_container}>
					<div className={styles.left}>
						<form className={styles.form_container} method='post'>
						<h1 className={styles.title}>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
              onChange={(e) =>
                setValues({ ...values, emailId: e.target.value })
              }
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}             
						<button type="submit" className={styles.green_btn} onClick={handle}>
							Login
						</button>
          
						</form>
					</div>
					<div className={styles.right}>
						<h1>New User ?</h1>
						<Link to="/register">
							<button type="button" className={styles.white_btn} >
								Register
							</button>
						</Link>
					</div>
				  </div>
			    </div>
    
  
    </>
  );
}
