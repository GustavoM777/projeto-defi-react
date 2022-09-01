import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className="content">
                <h2>Faça Parte de Nossa Comunidade DeFi</h2>
                <form action="https://getform.io/f/" method="POST">
                    <div className="form-container display-col">
                        <input type="email" name='email' placeholder='Digite o seu email' />
                        <button className="btn">Registrar-se</button>
                    </div>
                    <div className="form-container">
                        <input type="checkbox"/> <p>Sim, concordo em receber notificações por e-mail da DeFi.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Subscribe
