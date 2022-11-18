import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter, Link, Route, useNavigate} from "react-router-dom";
export default function Nav(){
  
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-primary nav-bar">
  <a class="navbar-brand" href="#/home"></a>
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <div class="collapse navbar-collapse" id="navbarNav">
    <h2 class="navbar-nav" href="#/"> <span>U</span><span>S</span>tream
      {/* <li class="nav-item active">
        <a class="nav-link" href="#/bank">Bank <span class="sr-only"></span></a>
      </li> */}
      {/* <li class="nav-item">
        <a class="nav-link nav"  href="#/register">Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav" href="#/login">Login</a>
      </li> */}
     
      {/* <li class="nav-item">
        <a class="nav-link nav" href="#/alldata">All Data</a>
      </li> */}
    </h2>
  </div>
</nav>

        </>

    )
}
