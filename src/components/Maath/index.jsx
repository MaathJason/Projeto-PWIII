import React from 'react';
import Surskity from '../Surskity';
import './style.css';
import Welcome from '../Welcome';
import Contador from '../Contador';


function Maath({nome,genero}){
    return (
        <div className='container'>
            <Welcome className="welcome" genero={genero} nome={nome} />
            <Surskity className="surskity" />
            <Contador/>
        </div>
    )
}


export default Maath;