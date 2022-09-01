import React from 'react'
import MainVideo from '../../../assets/video.mp4'
import './Hero.css'

const hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4' />
            </video>
            <div className="hero-text">
                <h1><span className="blue">Protocolo </span> de Finanças</h1>
                <h1>Decentralizadas</h1>
                <p>Negociação de liquidez garantida para milhões de usuários e os principais aplicativos Ethereum.</p>
                <div className="btn-group">
                    <button className="btn">Usar Defi</button>
                    {/* <button className="btn btn-outline">Documentation</button> */}
                    <button className="btn btn-outline">FAQ</button>
                </div>
            </div>
            <div className="bottom-text">
                <h2>Volume de Negociações: $ 42.104.783.662,47</h2>
            </div>
        </div>
    )
}

export default hero
