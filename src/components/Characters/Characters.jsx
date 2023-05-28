import { getCharacters, cleanCharacters } from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import CardCharacter from '../CardCharacters/CardCharacter';
import style from "./Characters.module.css"



const Characters = ()=> {
    const dispatch = useDispatch();
    const characters = useSelector((state)=>state.characters)

    useEffect(()=>{
        dispatch(getCharacters());
        return ()=>  dispatch (cleanCharacters())
    }, [])
    


    return(
        <div className={style.chars}>
            <h1 style={{color:'white'}}>CHARACTERS:</h1>
            
            {
                characters.map((character)=> {
                     return(
                        <CardCharacter
                            key = {character?.id}
                            id = {character?.id}
                            name = {character?.name}
                            gender = {character?.gender}
                            image = {character?.image}

                        />
                     )
                })
            }
        </div>
    )
};

export default Characters;