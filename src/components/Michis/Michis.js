import React, {useEffect, useState} from "react";
import './../Love/love.scss'
const Michis = () => {
    const [cat, setCat] = useState('')

    const fetchCats = async () => {
        const data = await fetch('https://api.thecatapi.com/v1/images/search')
        const catInfo = await data.json()
        setCat(catInfo[0].url)
    }

    useEffect(() => {

        fetchCats()

    },[])

    return (
        <div>
            <header className="App-header">
                <div style={{ margin: 'auto', display: 'contents', justifyContent: 'center'}}>
                    <h2>Puedes Ver muchos michis divertidos Aqui solo dale al Boton de abajo</h2>
                    {cat && (
                        <img
                            src={cat}
                            alt=""
                            width={350}
                            height={350}
                            style={ {
                                display: 'block',
                                borderRadius: '40px'
                            }}
                        />
                    )}
                    <br/>
                    <button
                        className="button-33"
                        onClick={ fetchCats }
                    >
                        {cat ? 'MAS MICHIS ': 'VER MICHIS' }
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Michis