// import "./styles.css";
import {useContext,useEffect,useState} from 'react';
import userContext  from "./context"
import axios from 'axios';
// import user from './createaccount';

export default function Alldata (){
	
	
	 let style={
    backgroundImage: "url('https://wallpaperaccess.com/full/2314950.jpg')",
    height:'91vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  
  }
 
  const [data,setData]=useState([]);
 const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Accept': 'application/json',
          'Content-Type': 'application/json',
         
    }
  };
 async function Getall() {
    
    const url = "https://server-udhayabank.herokuapp.com/api/bank/getall";
    axios
      .get(url,config
      )
      
      .then((res) => {
       
        console.log(res.data)
		setData(res.data)
       
      })
      .catch((error) => {
        // if (
        //   error.response &&
        //   error.response.status >= 400 &&
        //   error.response.status <= 500
        // ) 
        console.log(error.response.data);
          // console.log(error)
        })
      // console.log(data);
  }
  useEffect(()=>{
	Getall();
  },[])
  
  

 
	
	return (<>
	<div style={style}>
		<table >
		 <tbody>
			<tr >
		
			<th>Name</th>
			<th>Email</th>
			<th>CurrentBalance</th>
		   </tr>
		
		 {data.map((data,i)=>
		   <tr key={i}>
			 
			 <td>{data.name}</td>
			 <td>{data.emailId}</td>
			 <td>{data.balance}</td>
		   </tr>
		 )}
	  </tbody>
	  </table>
	  </div>
	  </>
	)
}
