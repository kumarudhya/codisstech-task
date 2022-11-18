import { useState } from "react";
import userContext from './context';
import {useContext} from "react"
export default function Deposit(){

let style={
  backgroundImage: "url('https://skykasino.com/assets/img/bg-deposit.png')",
  height:'85vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

}


  // const [totalstate,setTotalState]=useState(0);
  let transactionState=0;
  let currbal=useContext(userContext) 
  // let ctx=currbal.balance
  var len=currbal.users.length
  let [bal,setBal]=useState(currbal.users[0].balance);

 
  
  // let cb;

  function handleChange(e){
    e.preventDefault();
   transactionState=Number(e.target.value);
  
  //  console.log(transactionState)
  }
  function HandleSubmit(event){
    event.preventDefault();
  
    bal= transactionState +bal;
   // setTotalState(totalstate+transactionState)
  //  console.log(bal)
  setBal(bal)
    return bal;
  }
  currbal.users[0].balance=bal;
  
  return(<>

<center>
<div style={style}>
  <form onSubmit={HandleSubmit} >
  <h4>Account Balance is ${bal}</h4>
  <h5>Kindly enter a value to deposit!</h5>
  <label>
  <input type="text"   onChange={handleChange}/>
  <input type="submit"/>
  </label>
  {/* <ATMDeposit onChange={handleChange}></ATMDeposit> */}
  </form>
  </div>
  </center>
  </>)
}