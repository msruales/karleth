import React, {useEffect, useState} from "react";
import './love.scss'

const Love = () => {

    const [buttonM, setButtonM] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setButtonM(true)
        }, 3000)
    },[])
    return (
        <div className="app">
            <header className="App-header">
                <img
                    className="animate__animated animate__zoomIn rotate"
                    src="/girasol.png"
                    alt="" width={250}
                    height={250}
                    style={ { display: 'block'}}
                />
                <br/>
                <img
                    className="animate__animated animate__fadeIn"
                    src="/arleth.png"
                    alt=""  width={150}
                    height={239}
                    style={ {
                        display: 'block',
                        fontSize: '50px',
                        borderRadius: '40px'
                }}/>
                <br/>
                {
                    buttonM ? (
                        <a className="button-33 animate__animated animate__fadeIn" role="button" href="/michis">Espera!! Quieres Ver Michis Presiona Aqui!!</a>
                    )
                       : (
                           <h4>Espero que te haya Gustado te Quiero un Universo Entero!!! 🌻🌻 </h4>
                        )

                }
<br/>
                <img
                    className="animate__animated animate__heartBeat"
                    src="https://codemyui.com/wp-content/uploads/2017/08/i-love-you-animation.gif" alt="" width={600} height={300}
                    style={ {
                        display: 'block',
                        borderRadius: '40px'
                }}
                />
            </header>
        </div>

    )
}

export default Love