import React, { useState } from "react"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";

 function Card(props){
    const {id, name, gender, species, image, status, origin, onclose, addFav, removeFav} = props;
    const [isFav, setIsFav] =useState(false);

    const handleFavorite=()=>{
        isFav ? deleteFavorite(id) : addFavorite(props)
        setIsFav(!isFav)
    }



return (
    <div className="card" style={{width: 250}}>
        {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
        <img src={props.image} alt="" />
        <div className="card-body">
            <h5 className="card-tittle">{props.name}</h5>
            <p className="card-text">{props.status}</p>
            <p className="card-text">{props.gender}</p>
            <p className="card-text">{props.species}</p>
            <p className="card-text">{props.origin.name}</p>
            <button type="button" class="btn btn-outline-success"
            onClick={()=>window.alert('Emulamos que se cierra la card')}>x</button>
        </div>

    </div>
);
    
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addFavorite : (character)=>
            dispatch(addFavorite(character)) ,
            deleteFavorite: (id)=>dispatch(deleteFavorite(id))

        
    }

}


export default connect(
    null,
    mapDispatchToProps
)(Card)