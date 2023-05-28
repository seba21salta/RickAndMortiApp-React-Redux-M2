import { getCharacterDetail, cleanDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";



const CharacterDetail = ()=> {
    const dispatch = useDispatch();

    const {id} = useParams();
  

    const characterDetail = useSelector((state)=> state.characterDetail);


    useEffect(()=> {
         dispatch(getCharacterDetail(id));
         return ()=>  dispatch(cleanDetail())
    }, []);




    return(
        <div style={{backgroundColor:'rgb(225, 146, 81)'}}>
         
         <p> 
            <button>
             <Link to='/home'>BACK TO HOME</Link>
          </button>
         </p>
         
         
          <img src={characterDetail?.image} style={{borderRadius: '999998rem', padding: '2rem'}} />
          <h1>{characterDetail?.name}</h1>
          

          <label style= {{fontWeight:'800'}}>Status: </label>
          <p>{characterDetail?.status}</p>

          <label style= {{fontWeight:'800'}}>Gender:</label>
          <p>{characterDetail?.gender}</p>

          <label style= {{fontWeight:'800'}}>Origin:</label>
          <p>{characterDetail?.origin?.name}</p>


        </div>
    )
}

export default CharacterDetail;