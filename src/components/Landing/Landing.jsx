import {Link} from "react-router-dom";
import style from "./Landing.module.css"

const Landing =()=> {
    return(
      
        <div className={style.land}>
            
            <h1 >Welcome to Rick and Morty app</h1>
            <h2>For Seba Alvarez</h2>
            <h2>React - Redux</h2>
            <button style={{borderRadius:'10px', backgroundColor:'yellow', fontWeight:'600'}}>
                <Link to='/home'>ENTRAR</Link>
            </button>
        </div>

    )
     
} 

export default Landing