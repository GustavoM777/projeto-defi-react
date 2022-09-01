import React from 'react'
import './About.css'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc'
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <h2>Crescente ecossistema de protocolos</h2>
                <p>O sistema de protocolo Defi capacita desenvolvedores, provedores de liquidez e traders a participar de um mercado financeiro aberto e acessível a todos.</p>
                <div className="card-container">
                    <div className="card">
                        <AboutCard icon={<SiHiveBlockchain className='icon' />} heading='Blockchain - Rede confiável e inviolável' text='Desentralizado, trusted nodes, dados premium e provas criptográficas para conectar dados/APIs altamente precisos e disponíveis a qualquer contrato inteligente.' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<SiStrapi className='icon' />} heading='Conexão perfeita com qualquer API' text='Construa em um framework flexível que pode recuperar dados de qualquer API, conectar-se a sistemas existentes e integrar-se a qualquer blockchain atual ou futura.' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<SiFsecure className='icon' />} heading='Soluções comprovadas e prontas' text='Integre soluções oracle pré-construídas e testadas ao longo do tempo que já garantem dezenas de bilhões em valor de contrato inteligente para aplicativos descentralizados líderes de mercado.' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<VscServerProcess className='icon' />} heading='Processamento seguro off-chain' text='Use uma rede descentralizada DeFi Keeper nodes para automatizar contratos, mitigando o risco de intervenções manuais e servidores centralizados.' />
                    </div>
                </div>
                <a href="/" className="btn">Usar Defi</a>
            </div>
        </div>
    )
}

export default About
