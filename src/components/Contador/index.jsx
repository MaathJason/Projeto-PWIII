import React, {useState} from 'react'
import "./style.css"
import Gato from '../Gato';
import GatoGif from "../../assets/gato.gif"

export default function Contador(){

    const [status,setStatus] = useState(0);

    return(
        <div>
            <p className='title'>Quantos aoo você falou para o mineiro? Veja: {status}</p>
            <div className='container-gif'>
                <img className='gato-gif' src={GatoGif} />
                <img className='gato-gif' src={GatoGif} />
                <img className='gato-gif' src={GatoGif} />
                <img className='gato-gif' src={GatoGif} />
                <img className='gato-gif' src={GatoGif} />
                <img className='gato-gif' src={GatoGif} />
                
            </div>
            <div className='container-button'>
                <button onClick={ function(){
                    setStatus(status + 1)
                }}>
                    Aoooo
                </button>
                <button onClick={ function(){
                    setStatus(status - 1)
                }}>
                    Retirando o aoooo
                </button>
            </div>
        </div>
    )
}
