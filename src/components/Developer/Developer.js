import React from 'react'
import './Developer.css'
import Terminal from '../../assets/terminal.png'

const Developer = () => {
    return (
        <div className='developers'>
            <div className="container">
                <div className="left">
                    <h2>Superpoderes para desenvolvedores DEFI.</h2>
                    <p>Confira a <span className="blue">documentação </span>, o <span className="blue">início rápido</span> ou um guia abaixo para integrar seu projeto com milhares de tokens e bilhões de liquidez.</p>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src={Terminal} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developer
