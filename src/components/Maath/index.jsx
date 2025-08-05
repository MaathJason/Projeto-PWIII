import React from 'react';
import Surskity from '../Surskity';


//tag vazia = <> </>


function Maath({nome}){
    return (
        <div>
            <h1>Salve</h1>
            <p style={{color:"red", fontWeight:"bold", fontSize:"40px"}}>Bem vindo {nome}</p>
            <Surskity/>
        </div>
            
    )
}

export default Maath;