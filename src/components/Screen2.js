
import React,{useState} from "react";
import {useNavigate} from "react-router-dom";


const Screen2 = () => {

    const history =useNavigate()


    const [position, setPosition ] = useState({
        left: '300px',
        top: '600px',
        position: 'initial'
    })

    const mouseOver = (e) => {
        e.preventDefault()
        console.log('accion')
        setPosition({
            position: 'absolute',
            left: (Math.random() * 300) + "px",
            top: (Math.random() * 500) + "px",
        })
    }



    return (
        <div className="App" style={{ width: '100%', margin: 'auto', padding: 'auto'}}>
            <header className="App-header">

                <h2 className="animate__animated animate__heartBeat">SAMBA PRECIOSA! ME QUIERES 👉👈?</h2>

            <button
                onClick={() => history('/love')}
                style={{

                        width: '125px',
                        height: '50px',
                        left: position.left,
                        top: position.top
                    }}
            >
                SI 💚
            </button>
            <button
                onMouseOver={ mouseOver }
                style={{
                    display: 'block',
                    width: '125px',
                    height: '50px',
                     position: position.position,
                    left: position.left,
                    top: position.top
            }}
            >NO 💔</button>
            </header>

        </div>
    )
}
export default Screen2