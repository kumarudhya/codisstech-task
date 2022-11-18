import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
export default function Nav(){

    let style1={
        backgroundImage: "url('https://adigitalboom.com/wp-content/uploads/2022/05/netflix-category-codes-digital-boom-1.jpeg')",
        height:'91vh', 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
          
      }

      let head={
        fontSize:'50px',
        textShadow:'2px 5px 2px darkred, 1px 2px 1px red',
        textAlign:'center',
      }

    return(
        <>
        
        <div style={style1}> 
        <div style={head}>
        <div style ={head} class="nav-item">
        <a class="nav-link nav"  href="#/register">Register</a>
      </div>

      <div style={head} class="nav-item">
        <a class="nav-link nav" href="#/login">Login</a>
      </div>
        
        </div>
         </div>
        
        </>
        )
    }