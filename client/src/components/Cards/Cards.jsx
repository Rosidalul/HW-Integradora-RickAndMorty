import React from "react";
import Card from "./../Card/Card";

export default function Cards(props){
    const {characters} = props;
    return(
        <div className="row">
        
            {characters.map((characters)=>{
                return(    <div className="col">
                    <Card
                    key={characters.id}
                    name={characters.name}
                    status={characters.status}
                    species={characters.species}
                    gender={characters.gender}
                    origin={characters.origin.name}
                    image={characters.image}
                    onClick={()=>window.alert('Emulamos que se cierra la card')}
                    /> </div>
                );
            })}
           
        </div>
    );
}