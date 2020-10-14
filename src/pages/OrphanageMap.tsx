import React from 'react';
import '../styles/pages/orphanage-map.css'
import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'

function OrphanageMap() {
    return <div id="page-map">
        <aside>
            <header>
                <img src={mapMarkerImg} alt="Happy"/>
                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>
            <footer>
                <strong>Brasilia</strong>
                <strong>Samambaia</strong>
            </footer>
        </aside>
        <div></div>
        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFFF"/>
        </Link>
    </div>;
}
export default OrphanageMap;