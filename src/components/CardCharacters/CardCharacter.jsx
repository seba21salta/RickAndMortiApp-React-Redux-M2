import {Link} from "react-router-dom";

const CardCharacter = ({id, name, gender, image})=> {
    return (
        <div>
           
            <Link to = {`/detail/${id}`}>
               <img src={image} alt={name} style={{ borderRadius: '99999rem', paddingTop:'5rem'}} />
            </Link>

            <h1 style={{color:'white'}}>{name}</h1>
            <h2 style={{color:'white'}}>{gender}</h2>

        </div>
    )
};

export default CardCharacter;